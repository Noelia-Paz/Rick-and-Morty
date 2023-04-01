require('dotenv').config();
const express = require('express');
const router = require('./routes');
const morgan = require('morgan');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const server = express();
server.use(express.json());
server.use(morgan('dev'));
server.use(cors());

server.use('/', router);

server.listen(PORT, () => {
  console.log('Server listening on port: ' + PORT);
});

//require("dotenv").config()
//console.log(process.env)
/*var http = require('http');
const getCharById = require('./controllers/getCharById');
const getCharDetail = require('./controllers/getCharDetail');

http
  .createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    const { url } = req;
//http://localhost:3001/onsearch/1 insomnia
    if (url.includes('onsearch')) {
      const id = url.split('/').at(-1);
      getCharById(res, id);
    }
//http://localhost:3001/detail/1 insomnia
    if (url.includes('detail')) {
      const id = url.split('/').at(-1);
      getCharDetail(res, id);
    }
  })
  .listen(3001, 'localhost');*/

/*var http = require('http');
var data = require('./utils/data');

http
  .createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const { url } = req;

    if (url.includes('/rickandmorty/character/')) {
      const id = url.split('/').at(-1);
      const character = data.find(char => char.id == id);
      if (character) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(character));
      } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: 'Character not found' }));
      }
    }
  })
  .listen(3001, 'localhost');*/
