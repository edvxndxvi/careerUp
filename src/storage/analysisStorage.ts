import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "@analises_history";

export type Analysis = {
  id: number;
  titulo: string;
  descricao: string;
  data: string;
};

export async function saveAnalysis(newAnalysis: Analysis) {
  try {
    const stored = await AsyncStorage.getItem(KEY);
    const list: Analysis[] = stored ? JSON.parse(stored) : [];

    newAnalysis.id = list.length + 1;
    list.push(newAnalysis);

    await AsyncStorage.setItem(KEY, JSON.stringify(list));
  } catch (err) {
    console.log("Erro ao salvar análise", err);
  }
}

export async function getAnalyses(): Promise<Analysis[]> {
  try {
    const stored = await AsyncStorage.getItem(KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (err) {
    console.log("Erro ao carregar análises", err);
    return [];
  }
}

export async function getAnalysisById(idParam: number | string | string[]) {
  try {
    const stored = await AsyncStorage.getItem(KEY);
    const list: Analysis[] = stored ? JSON.parse(stored) : [];

    let parsedId: number;
    
    if (Array.isArray(idParam)) {
      parsedId = Number(idParam[0]);
    } else {
      parsedId = Number(idParam);
    }

    if (isNaN(parsedId)) {
      console.log("ID inválido ao buscar análise:", idParam);
      return null;
    }

    return list.find((a) => a.id === parsedId) ?? null;
  } catch (err) {
    console.log("Erro ao buscar por ID", err);
    return null;
  }
}
