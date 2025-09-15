// Updated: backend/src/controllers/chatController.js
class ChatController {
    constructor(geminiService) {
        this.geminiService = geminiService;
        this.chatHistories = {}; // In-memory store for chat sessions
    }

    async sendMessage(req, res) {
        // Expecting `message` and an optional `chatId` from the frontend
        const { message, chatId } = req.body;
        let currentChatId = chatId;

        try {
            // If no chatId is provided, or it doesn't exist, start a new chat
            if (!currentChatId || !this.chatHistories[currentChatId]) {
                const newChat = this.geminiService.startChat();
                // Generate a simple unique ID for the new chat
                currentChatId = `chat_${Date.now()}`;
                this.chatHistories[currentChatId] = newChat;
            }

            // Get the current chat session
            const chatSession = this.chatHistories[currentChatId];

            // Fetch response using the chat session, which maintains history
            const response = await this.geminiService.fetchResponse(chatSession, message);

            // Send back the response and the chatId so the frontend can remember it
            res.status(200).json({ response, chatId: currentChatId });

        } catch (error) {
            console.error('Error in sendMessage controller:', error);
            res.status(500).json({ error: 'Error sending message' });
        }
    }

    async receiveMessage(req, res) {
        res.status(200).json({ message: 'Message received' });
    }
}

export default ChatController;