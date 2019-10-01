const express = require('express');
const routes = require('./routes');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');

const app = express();

mongoose.connect(process.env.DB_CONNECT,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    },
    () => {
        console.log(`Database connected `);
    }
);

//GET,  POST,   PUT,   DELETE

//req.query = Acessar query params    , ex: (http://localhost:3333/usersidade=20)
//req.params = Acessar route params   , ex: (http://localhost:3333/users/1)
//req.body = Acessar corpo da requisição , ex: {"nome" : "Joao"}


app.use(express.json());
app.use(routes);


app.listen(process.env.PORT, () => {
    console.log(`Server is running... Port: ${process.env.PORT}`);
});