
const express = require('express')

const app = express();

app.listen(3000);

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get("/", (req, res) =>{

    res.sendFile('./src/views/index.html', {root: __dirname})
})

app.get("/contact", (req, res) =>{

    res.sendFile('./views/contact.html', {root: __dirname})
})

app.use("/contact", (req, res) =>{

    res.sendFile('./views/404.html', {root: __dirname})
})