//raggruppo tutte le rotte che iniziano con /posts in un file e lo uso in 
// app.js tramite la classe express.Router()


// richiamo istanza di framework Express
const express = require('express')
// creiamo un istanza dell'oggetto rotte di Express
const router = express.Router();

// importo i dati dei post
const postsList = require('./../data/postsArr');



// rotta GET /posts
router.get('/', function (req, res) {

   //restituisco l'oggetto
    res.json(postsList);

   
});

//inizio crud 

//SHOW
router.get('/:id', function (req, res) {
    // res.send('Dettagli del post con id ' + req.params.id); 

    //prova restituzione singolo post dalla rotta show in formato json
    //recupero id da url ( mi salvo l'id inserito in una variabile)
    const postId = parseInt(req.params.id);

    //confronto l'id salvato con gli id presenti nell'array POSTList 
    const post = postsList.find(post => post.id === postId);
    res.json(post);
});

// CREATE ( STORE)
router.post('/', function (req, res) {
    res.send('Creazione nuovo post');
});

// UPDATE
router.put('/:id', function (req, res) {
    res.send('Modifica del post con id ' + req.params.id);
});

// MODIFY
router.patch('/:id', function (req, res) {
    res.send('Modifica parziale del post ' + req.params.id);
});

// DELETE
router.delete('/:id', function (req, res) {
    res.send('Eliminazione del post ' + req.params.id);
});

// esporta l'istanza di queste rotte
module.exports = router;