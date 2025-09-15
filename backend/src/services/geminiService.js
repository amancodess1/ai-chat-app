// filepath: /Users/aman/Desktop/chat-app2/ai-chat-app/src/services/geminiService.js
import fetch from 'node-fetch';

class GeminiService {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.apiUrl = 'https://api.gemini.com/v1'; // Replace with the actual Gemini API URL
    }

    async fetchResponse(message) {
        const response = await fetch(`${this.apiUrl}/chat`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.apiKey}`
            },
            body: JSON.stringify({ message })
        });

        if (!response.ok) {
            throw new Error('Error fetching response from Gemini API');
        }

        return await response.json();
    }

    processMessage(message) {
        // Add any preprocessing logic for the message if needed
        return message.trim();
    }
}

export default GeminiService;