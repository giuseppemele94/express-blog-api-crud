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

 //recupero l'id e lo trasformo in numero
 const idNum = parseInt(req.params.id) 

 //cerco il post tramite id
 const post = postsArr.find(blog => blog.id === idNum)

 //restituisco sotto forma di JSON 
 res.json(post)
}

function store(req, res) {

res.send('Creazione nuovo post');

}

function update(req, res) {

res.send('Modifica del post con id ' + req.params.id);

}

function destroy(req, res) {

//recupero l'id e lo trasformo in numero
 const idNum = parseInt(req.params.id) ;

  //cerco il post tramite id
 const post = postsArr.find(blog => blog.id === idNum)

 //rimuovo il post dal blog 
postsArr.splice(postsArr.indexOf(post), 1);

//risposta 
res.sendStatus(204);

}

// esportiamo tutto
module.exports = { index, show, store, update, destroy }