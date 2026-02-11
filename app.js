const express = require('express');
const app = express();
const port = 3000; 

//registro il body-parser per json per leggere il body della req dato che è un json 
app.use(express.json()); 

// importa router dei post
const blogsRouter = require('./routers/posts')

// import del middelware di gestione di rotta inesistente
const notFound = require("./middlewares/notFound");

app.use(express.static('public'));

//rotta Home App
app.get('/', (req,res) => {
    res.send("<h1>Rotta Home </h1>")
})

// istanza delle rotte per risorsa  post
app.use("/posts", blogsRouter); 

// registriamo middelware di gestione rotta inesistente
app.use(notFound);

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})