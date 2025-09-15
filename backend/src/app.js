// filepath: /Users/aman/Desktop/chat-app2/ai-chat-app/src/app.js
const express = require('express');
const bodyParser = require('body-parser');
const { default: setRoutes } = require('./routes/chatRoutes');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

setRoutes(app)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
app.use(express.static(path.join(__dirname, '../frontend/build')));

// API routes
setRoutes(app);

// The "catchall" handler: for any request that doesn't match an API route, send back React's index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});