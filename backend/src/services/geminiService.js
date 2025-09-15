// Updated: backend/src/services/geminiService.js
import { GoogleGenerativeAI } from '@google/generative-ai';

class GeminiService {
    // UPDATED: Added systemInstruction to the constructor
    constructor(apiKey, systemInstruction = '') {
        if (!apiKey) {
            throw new Error('Gemini API key is missing.');
        }
        this.googleAI = new GoogleGenerativeAI(apiKey);
        
        // UPDATED: Pass the systemInstruction when getting the model
        this.model = this.googleAI.getGenerativeModel({ 
            model: 'gemini-2.5-pro',
            systemInstruction: systemInstruction,
        });
    }

    startChat(history = []) {
        return this.model.startChat({
            history: history,
            generationConfig: {
                maxOutputTokens: 2048,
            },
        });
    }

    async fetchResponse(chatSession, message) {
        try {
            const result = await chatSession.sendMessage(message);
            const response = result.response;
            return response.text();
        } catch (error) {
            console.error('Error in fetchResponse:', error);
            throw new Error('Failed to get a response from the Gemini API.');
        }
    }
}

export default GeminiService;