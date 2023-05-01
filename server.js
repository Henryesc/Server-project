const express = require("express");
const cors = require("cors");
const es6Renderer = require("express-es6-template-engine");
const {checkAuth} = require('./middleware');
const pgp = require('pg-promise') ();

const server = express();
server.use(express.json());
// server.use(checkAuth)

const corsOptions = {
    origin: 'http://127.0.0.1:5500'
};

const cn = {
    host: 'localhost',
    port: 5432,
    database: 'users',
    user: 'postgres',
    password: 'test',
    allowExitOnIdle: true
};

const db = pgp(cn);

server.use(cors(corsOptions));

server.get('/', (req, res) => {
    res.json({
        "message": "hello"
    });
});

server.get("/test", async (req, res) => {
    const user = await test();
    res.json(user)
});

async function test() {
    const user = await db.any('SELECT * FROM userAuth', [true]);
    return user
}


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

hi 

//create db storing all products
//user autho admin autho 
//tailwind 
//designing 
//connect paypal or stripe
//create a script so were working on the same stuff 
//after 7:30 expect wednesday and weekends