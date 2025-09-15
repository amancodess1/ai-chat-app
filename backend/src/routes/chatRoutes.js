// Updated: backend/src/routes/chatRoutes.js
import express from 'express';
import ChatController from '../controllers/chatController.js';
import GeminiService from '../services/geminiService.js';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

// --- DEFINE YOUR BOT'S PERSONALITY HERE ---
const personalityPrompt = `
you are a bhojpuria don
powerstar
`;

// UPDATED: Pass the personality prompt to the GeminiService
const geminiService = new GeminiService(process.env.GEMINI_API_KEY, personalityPrompt);
const chatController = new ChatController(geminiService);

function setRoutes(app) {
    router.post('/send', chatController.sendMessage.bind(chatController));
    router.post('/receive', chatController.receiveMessage.bind(chatController));

    app.use('/api/chat', router);
}

export default setRoutes;