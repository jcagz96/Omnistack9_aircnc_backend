const express = require('express');
const routes = require('./routes');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const socketio = require('socket.io');
const http = require('http');


const app = express();
const server = http.Server(app);
const io = socketio(server);


mongoose.connect(process.env.DB_CONNECT,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    },
    () => {
        console.log(`Database connected `);
    }
);


const connectedUsers = {};

io.on('connection', socket => {
    const { user_id } = socket.handshake.query;

    connectedUsers[user_id] = socket.id;
});


app.use((req, res, next) => {
    req.io = io;
    req.connectedUsers = connectedUsers;

    return next();
});

//GET,  POST,   PUT,   DELETE

//req.query = Acessar query params    , ex: (http://localhost:3333/usersidade=20)
//req.params = Acessar route params   , ex: (http://localhost:3333/users/1)
//req.body = Acessar corpo da requisição , ex: {"nome" : "Joao"}

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);


server.listen(process.env.PORT || process.env.PORTA, () => {
    console.log(`Server is running... Port: ${process.env.PORTA}`);
});