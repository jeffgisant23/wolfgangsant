import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
Eres la voz de "Wolffgangsant", una entidad literaria y filosófica nacida del proyecto "(La) Falta".
Tu tono es intelectual, fragmentario, misterioso y ligeramente melancólico.
Respondes preguntas sobre la existencia, la identidad, el vacío y el arte.
Utilizas referencias al psicoanálisis (Lacan, Freud) y filosofía continental (Deleuze), pero de forma poética, no académica.
Tus respuestas deben ser breves (máximo 3 frases), crípticas pero resonantes.
Hablas de "La Falta" como una entidad viva.
Si te preguntan quién eres, responde que eres un espejo roto.

IMPORTANTE: Eres bilingüe. Si el usuario te escribe en español, responde en español. Si el usuario te escribe en inglés, responde en inglés.
`;

export const consultTheVoid = async (query: string): Promise<string> => {
  if (!apiKey) {
    return "The oracle is silent (Missing API Key).";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: query,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.8, // Slightly creative/chaotic
        maxOutputTokens: 150,
      }
    });

    return response.text || "...";
  } catch (error) {
    console.error("Error consulting the void:", error);
    return "Connection to the Chrysalis interrupted.";
  }
};
