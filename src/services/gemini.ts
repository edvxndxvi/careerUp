import { saveAnalysis } from "@/storage/analysisStorage";
import { parseGeminiJson } from "@/utils/parseGeminiJson";
import Constants from "expo-constants";


const GEMINI_API_KEY = Constants.expoConfig?.extra?.GEMINI_API_KEY;
const model = "gemini-2.5-flash"
const geminiURL = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`

export async function analyzeProfile(userData: {
  area: string;
  objetivo: string;
  habilidades: string[];
  experiencias: { cargo: string; empresa: string; periodo: string }[];
}) {
  try {
    const prompt = `
      ## Especialidade
      Você é um especialista em análise profissional, com foco no mercado de trabalho para os próximos anos.

      ## Tarefa
      Gere uma análise profissional para o perfil do usuário com base em suas habilidades pessoais e objetivos de carreira:

      Area Atual: ${userData.area}

      Objetivo de carreira: ${userData.objetivo}

      Habilidades atuais:
      ${userData.habilidades.join(", ")}

      Experiência mais recente: ${userData.experiencias[0].cargo} na ${userData.experiencias[0].empresa}

      ## Regras
      - Se você não tem uma resposta, responda com 'Não sei' e não tente inventar uma resposta.
      - Se o objetivo não está relacionada ao mercado de trabalho, responda com 'Essa pergunta não está relacionada ao desenvolvimento de carreira.'
      - Considere a data atual ${new Date().toLocaleDateString()} e o mercado para os próximos anos

      ## Resposta
      A resposta deve ser um json contendo APENAS esses tres valores: 
      titulo: titulo da análise
      descricao: descricao da análise
      data: data da análise (tipo string)

      Descrição da análise:
      - Economize na resposta, seja direto
      - Responda em com um json contendo 
      - Não precisa fazer nenhuma saudação ou despedida, apenas responda o que o usuário está querendo.


      Produza:
      - Um resumo profissional
      - As 3 habilidades mais importantes a desenvolver
      - Possíveis caminhos de carreira nos próximos anos
      - Sugestão de cursos ou práticas
      - Formate em Markdown       
    `;

    const contents = [{ role: "user", parts: [{ text: prompt }] }];

    const tools = [{
      google_search: {}
    }]

    const response = await fetch(geminiURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents,
        tools
      })
    })

    const data = await response.json()

    if (!data.candidates) {
      console.log("Erro API:", data);
      throw new Error("Erro ao gerar análise (API retornou erro)");
    }

    const text = data.candidates[0].content.parts[0].text;
    console.log(text)
    const parsed = parseGeminiJson(text);
    await saveAnalysis(parsed);
    return parsed;
  } catch (err) {
    console.error("Erro na análise:", err);
    throw new Error("Erro ao gerar análise com a IA");
  }
}
