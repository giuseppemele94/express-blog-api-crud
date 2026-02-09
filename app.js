const express = require('express');
const app = express();
const port = 3000; 

// importa router dei post
const blogsRouter = require('./routers/posts')

app.use(express.static('public'));

//rotta Home App
app.get('/', (req,res) => {
    res.send("<h1>Rotta Home </h1>")
})

// istanza delle rotte per risorsa  post
app.use("/posts", blogsRouter); 

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})