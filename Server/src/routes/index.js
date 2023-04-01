const { Router } = require('express');

//me traigo los controladores que van a ser las callbacks qque necesito
const getCharById = require('../controllers/getCharById');
const getCharDetail = require('../controllers/getCharDetail');
let favs = require('../utils/favs');

const router = Router();

router.get('/onsearch/:id', getCharById);
router.get('/detail/:id', getCharDetail);

router.post('/rickandmorty/fav', (req, res) => {
  favs.push(req.body);
  res.status(200).json({ status: 'Se a creado' });
});

router.get('/rickandmorty/fav', (req, res) => {
  res.status(200).json(favs);
});

router.delete('/rickandmorty/fav/:id', (req, res) => {
  const { id } = req.params;
  favs = favs.filter(char => char.id != id);
  res.status(200).json({ status: 'Eliminado!' });
});

module.exports = router;

//insomnia
//http://localhost:3001/rickandmorty/detail/50
//http://localhost:3001/rickandmorty/onsearch/50

//diferencias
//http://localhost:3001/5 es por param que forma parte de la ruta
//localhost:3001?id=5 es info adicional pero no es parte de la ruta

/*router.get('/loquesea', (req, res) => {
  //con esta cb manejamos la logica de la ruta
  //esta cb dice lo que se tenga que hacer segun la peticion pero no lo hace aca.
  //lo ideal es llamar a  una funcion que haga el llamado a un servicio externo.
});*/

//Express es "UNOPINIONATED"
