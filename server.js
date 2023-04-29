const express = require("express");
const cors = require("cors");
const es6Renderer = require("express-es6-template-engine");
const {checkAuth} = require('./middleware');

const server = express();
server.use(express.json());
server.use(checkAuth)

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

server.post('/auth/login', (req, res) => {
    res.send(`${req.body.username}, ${req.body.password}`);
});

server.listen(8080, () => {
    console.log("The server is running at PORT 8080");
});