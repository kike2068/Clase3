var miRouter = require('express').Router()
var suma_service = require('../services/suma_service');

miRouter.get('/', (req, res) => {
    res.send('Deme valores para sumar')
});

miRouter.get('/:vlr1/:vlr2', (req, res) => {
    var vlr1 = req.params.vlr1;
    var vlr2 = req.params.vlr2;
    var resultado = suma_service.obtenerSumaDeValores(vlr1, vlr2);
    //res.send(JSON.stringify(resultado.toString()));
	res.send(resultado.toString());
});

module.exports = miRouter