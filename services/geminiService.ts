
import { GoogleGenAI } from "@google/genai";

// Enhanced safe check for environment variables
const getApiKey = (): string => {
  try {
    // Check window.process for polyfill or direct process.env
    const env = (window as any).process?.env || (typeof process !== 'undefined' ? process.env : {});
    return env.API_KEY || "";
  } catch (e) {
    console.warn("Gemini Service: Could not access process.env safely.");
    return "";
  }
};

const API_KEY = getApiKey();

export const generateMarketingContent = async (businessType: string, goal: string): Promise<string> => {
  if (!API_KEY) {
    console.error("Gemini Service: API Key is missing. Check your environment variables.");
    return "### Configuration Required\nTo use the AI Marketing Engine, please ensure an `API_KEY` is provided in the environment settings.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate a short, punchy marketing headline using a markdown heading (#) and a 2-sentence description for a ${businessType} business focusing on ${goal}. 
      Use bolding (**) for key value propositions. 
      Include a short bulleted list of 3 high-impact benefits. 
      Format the entire response using clean Markdown.`,
      config: {
        temperature: 0.7,
        topP: 0.8,
        maxOutputTokens: 300,
      }
    });

    return response.text || "No content generated.";
  } catch (error: any) {
    console.error("Gemini Service Error:", error);
    return `### Service Unavailable\nThere was an error generating content: ${error.message || 'Unknown Error'}.`;
  }
};
