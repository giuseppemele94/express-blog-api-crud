// importo i dati dei post
const postsArr = require('./../data/postsArr');
const postsList = require('./../data/postsArr');

function index(req, res) {
 
 //creo un nuovo oggetto con le propr che mi servono
 const oggettoBlog = {
    numeroPost : postsArr.length,
    listaPost : postsArr
 }
    res.json(oggettoBlog);
}

function show(req, res) {

 res.send('Dettagli del post con id ' + req.params.id); 

}

function store(req, res) {

res.send('Creazione nuovo post');

}

function update(req, res) {

res.send('Modifica del post con id ' + req.params.id);

}

function destroy(req, res) {

res.send('Eliminazione del post ' + req.params.id);

}

// esportiamo tutto
module.exports = { index, show, store, update, destroy }