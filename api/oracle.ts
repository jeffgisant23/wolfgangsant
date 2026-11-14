// Función serverless (Vercel): la clave de Gemini vive solo en el servidor
// (variable de entorno GEMINI_API_KEY), nunca en el JavaScript de la app.
import { GoogleGenAI } from '@google/genai';

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

const MAX_QUERY_LENGTH = 500;

// Orígenes permitidos: la web publicada y la app Capacitor (capacitor://localhost, https://localhost).
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || '')
  .split(',')
  .map((o) => o.trim())
  .filter(Boolean);

function setCors(req: any, res: any) {
  const origin: string | undefined = req.headers?.origin;
  const allowed =
    origin &&
    (ALLOWED_ORIGINS.includes(origin) ||
      origin === 'capacitor://localhost' ||
      origin === 'http://localhost' ||
      origin === 'https://localhost');
  if (allowed) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

export default async function handler(req: any, res: any) {
  setCors(req, res);

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'Server is missing GEMINI_API_KEY' });
    return;
  }

  const query = typeof req.body?.query === 'string' ? req.body.query.trim() : '';
  if (!query || query.length > MAX_QUERY_LENGTH) {
    res.status(400).json({ error: `query must be 1-${MAX_QUERY_LENGTH} characters` });
    return;
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: query,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.8,
        maxOutputTokens: 150,
      },
    });
    res.status(200).json({ text: response.text || '...' });
  } catch (error) {
    console.error('Error consulting the void:', error);
    res.status(502).json({ error: 'Connection to the Chrysalis interrupted.' });
  }
}
