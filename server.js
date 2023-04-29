const express = require("express");
const cors = require("cors");
const es6Renderer = require("express-es6-template-engine");
const server = express();

const corsOptions = {
    origin: 'http://127.0.0.1:5500'
};

server.use(cors(corsOptions));

server.get('/', (req, res) => {
    res.json({
        "message": "hello"
    });
});


server.get('/heartbeat', (req, res) => {
    res.json({
        "message": "Heartbeat"
    });
});

server.listen(8080, () => {
    console.log("The server is running at PORT 8080");
});