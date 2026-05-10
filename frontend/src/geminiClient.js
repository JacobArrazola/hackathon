import { GoogleGenerativeAI } from "@google/generative-ai";

// Access the key safely from your .env file
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

// Choose a model (like gemini-1.5-flash)
export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
