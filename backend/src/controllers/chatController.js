class ChatController {
    constructor(geminiService) {
        this.geminiService = geminiService;
    }

    async sendMessage(req, res) {
        const { message } = req.body;
        try {
            const response = await this.geminiService.fetchResponse(message);
            res.status(200).json({ response });
        } catch (error) {
            res.status(500).json({ error: 'Error sending message' });
        }
    }

    async receiveMessage(req, res) {
        // Logic for receiving messages can be implemented here
        res.status(200).json({ message: 'Message received' });
    }
}

export default ChatController;