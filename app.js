const express = require('express');
const app = express();
const port = 3000; 


app.use(express.static('public'));

//rotta Home App
app.get('/', (req,res) => {
    res.send("<h1>Rotta Home </h1>")
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})