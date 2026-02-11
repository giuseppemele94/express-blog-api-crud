function notFound(req, res, next) {
    // forziano il code di risposta corretto
    res.status(404)
    //   risposta all'errore
    res.json({
        error: "Not Found",
        message: "Pagina non trovata "
    });
};

module.exports = notFound;