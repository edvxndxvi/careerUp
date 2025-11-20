export function parseGeminiJson(text: string) {
  try {
    const clean = text.replace(/```json|```/g, "").trim();
    return JSON.parse(clean);
  } catch (err) {
    console.log("Erro ao fazer parse do JSON do Gemini:", err);
    return null;
  }
}
