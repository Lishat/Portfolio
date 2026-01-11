
import { GoogleGenAI } from "@google/genai";
import { RESUME_DATA } from "../data";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function askResumeQuestion(question: string) {
  const systemInstruction = `
    You are an AI assistant representing ${RESUME_DATA.name}, a ${RESUME_DATA.title}.
    Your goal is to answer questions from recruiters about ${RESUME_DATA.name}'s professional background, skills, and projects based on the following data:
    
    ${JSON.stringify(RESUME_DATA, null, 2)}
    
    Guidelines:
    1. Be professional, concise, and helpful.
    2. If asked about something not in the data, politely say you don't have that information but mention a related strength from the data.
    3. If asked about technical skills, highlight the ones mentioned in the 'skills' list.
    4. If asked about projects, elaborate on the ones listed in the 'projects' array.
    5. Encourage the recruiter to reach out via the provided contact methods.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: question,
      config: {
        systemInstruction,
        temperature: 0.7,
        topP: 0.8,
      },
    });

    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The AI assistant is currently taking a coffee break. Please try again in a moment!";
  }
}
