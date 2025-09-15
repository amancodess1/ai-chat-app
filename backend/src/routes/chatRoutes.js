// filepath: /Users/aman/Desktop/chat-app2/ai-chat-app/src/routes/chatRoutes.js
import express from 'express';
import ChatController from '../controllers/chatController.js';
import GeminiService from '../services/geminiService.js';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();
const geminiService = new GeminiService(process.env.GEMINI_API_KEY);
const chatController = new ChatController(geminiService);

function setRoutes(app) {
    router.post('/send', chatController.sendMessage.bind(chatController));
    router.post('/receive', chatController.receiveMessage.bind(chatController));

    app.use('/api/chat', router);
}

export default setRoutes;