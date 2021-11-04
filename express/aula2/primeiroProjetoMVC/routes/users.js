var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/rota-criada', function(req, res, next) {
  //controller

  const valor1 = 10;
  const valor2 = 20;
  
  const resultado = valor1 * valor2
  
  res.send('Retornou minha primeira rota'+ resultado);
});

module.exports = router;
