const express = require('express');
const app = express();
const router = require("./router/auth-router");

// this is from documentation to make route
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.listen(3000)

// this is the method to get api from other router file to keep this file neat and clean
app.use('/api/auth', router);

// this is the method to get api/route but best is to make separate file for it
app.get('/', (req, res) => {
    res.status(200).send('Welcome to Home Page')
});

// app.get('/register', (req, res) => {
//     res.status(200).send('Welcome to Registration Page')
// });

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
});