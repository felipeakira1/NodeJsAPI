const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

// Routers
const userRouter = require('./routes/userRouter');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'index.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'register.html'));
})

app.use('/users', userRouter);

app.listen(process.env.SERVER, () => {
    console.log(`Servidor iniciado em <http://localhost:${process.env.SERVER}>`);
});