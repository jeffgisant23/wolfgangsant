// El cliente no conoce la clave de Gemini: llama a la función serverless /api/oracle.
// VITE_API_BASE_URL: vacío en la web (mismo dominio); en la app Capacitor, la URL
// donde está desplegada la función, p. ej. https://tu-dominio.vercel.app
const API_BASE = (import.meta.env.VITE_API_BASE_URL as string | undefined) ?? '';

export const consultTheVoid = async (query: string): Promise<string> => {
  try {
    const res = await fetch(`${API_BASE}/api/oracle`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      return data.error || "Connection to the Chrysalis interrupted.";
    }
    return data.text || "...";
  } catch (error) {
    console.error("Error consulting the void:", error);
    return "Connection to the Chrysalis interrupted.";
  }
};
