"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseMcpServers = parseMcpServers;
const generative_ai_1 = require("@google/generative-ai");
const genAI = new generative_ai_1.GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
async function parseMcpServers(url, content, existingServers) {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `
    You are a helpful assistant that extracts MCP (Model Context Protocol) server configurations from web pages.
    
    Here is the content of a web page scraped from ${url}:
    
    --- START CONTENT ---
    ${content.substring(0, 20000)} 
    --- END CONTENT ---
    
    Your task is to identify MCP servers mentioned in this content and extract their details.
    
    The database schema for an McpServer is:
    {
      name: string; (Unique identifier)
      description: string;
      command: string; (The executable, e.g., 'npx', 'python')
      args: string[]; (Arguments for the command)
      env: Record<string, string> | null; (Environment variables)
      logoUrl: string | null;
      rating: number; (Extract rating if available, else default to 0)
      tags: string[]; (Extract keywords/tags)
      author: string | null;
    }
    
    We already have the following servers in our database (names):
    ${JSON.stringify(existingServers)}
    
    RULES:
    1. Extract ALL valid MCP servers found in the content.
    2. DO NOT return servers that are already in the existingServers list (deduplication).
    3. Format the output as a JSON array of objects adhering to the schema above.
    4. If no new servers are found, return an empty array [].
    5. Ensure 'args' is an array of strings.
    6. Ensure 'env' is an object or null.
    7. Set 'sourceUrl' to '${url}' implicitly (I will add it later, you just return the object).
    
    Return ONLY the JSON array. Do not include markdown formatting like \`\`\`json.
  `;
    try {
        const result = await model.generateContent(prompt);
        const response = result.response;
        const text = response.text();
        // Clean up potential markdown blocks if the model disobeys
        const cleanedText = text.replace(/```json/g, '').replace(/```/g, '').trim();
        return JSON.parse(cleanedText);
    }
    catch (error) {
        console.error("Error calling Gemini API:", error);
        return [];
    }
}
