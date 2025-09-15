# AI Chat Application

This project is an AI chatting application built using Node.js and Express. It utilizes the Gemini API to facilitate chat interactions.

## Project Structure

```
ai-chat-app
├── src
│   ├── app.js                # Entry point of the application
│   ├── config
│   │   └── gemini.js        # Configuration for Gemini API
│   ├── controllers
│   │   └── chatController.js # Logic for handling chat messages
│   ├── routes
│   │   └── chatRoutes.js     # Route definitions for chat functionality
│   └── services
│       └── geminiService.js  # Service for interacting with Gemini API
├── package.json              # NPM configuration file
├── .env                      # Environment variables
├── .gitignore                # Files to ignore by Git
└── README.md                 # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/ai-chat-app.git
   ```

2. Navigate to the project directory:
   ```
   cd ai-chat-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your Gemini API key:
   ```
   GEMINI_API_KEY=your_api_key_here
   ```

## Usage

To start the application, run the following command:
```
npm start
```

The application will be available at `http://localhost:3000`.

## Features

- Send and receive messages using the Gemini API.
- Simple and intuitive chat interface.
- Configurable API key through environment variables.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.