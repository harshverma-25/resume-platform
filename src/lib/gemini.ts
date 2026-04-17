import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function improveText(text: string, type: 'experience' | 'project' | 'achievement'): Promise<string> {
  const prompts = {
    experience: `Improve the following experience description for a resume. Make it professional, action-oriented, and use bullet points (returned as plain text with newlines or formatted cleanly, without asterisks if possible). Keep it concise. Input: ${text}`,
    project: `Improve the following project description for a resume. Focus on technical impact, problem-solving, and clear results. Use bullet points or professional sentences. Input: ${text}`,
    achievement: `Rewrite this achievement to sound more impactful and professional for a resume. Keep it to one powerful sentence if possible. Input: ${text}`
  };

  try {
    const result = await model.generateContent(prompts[type]);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini Error:", error);
    throw new Error("Failed to improve text via AI");
  }
}

export async function generateSummary(resumeData: any): Promise<string> {
  const prompt = `Generate a professional, concise resume summary (3-4 lines maximum) based on the following candidate info. Do not use buzzwords excessively. \n\n${JSON.stringify(resumeData)}`;
  
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini Error:", error);
    throw new Error("Failed to generate summary via AI");
  }
}

export async function getAtsScore(resumeText: string): Promise<{ score: number; suggestions: string[] }> {
    const prompt = `Act as an ATS (Applicant Tracking System) expert. Analyze the following resume text and provide:
1. An ATS score out of 100.
2. A list of exactly 3-5 brief, actionable suggestions to improve it.

Return ONLY a JSON object in this exact format, nothing else:
{"score": 85, "suggestions": ["Include more action verbs.", "Add quantifiable metrics."]}

Resume Text:
${resumeText.substring(0, 5000)} // Ensure we don't exceed token limits`;

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text().replace(/```json/g, '').replace(/```/g, '').trim();
        return JSON.parse(text);
    } catch (error) {
        console.error("Gemini ATS Error:", error);
        return { score: 0, suggestions: ["Error analyzing resume. Please try again later."] };
    }
}
