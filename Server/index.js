const server = require('./src/server');
const { database } = require('./src/DB_connection');

//const PORT = process.env.PORT || 3001;

database
  .sync({ alter: true })
  .then(() => {
    server.listen('3001', () => {
      console.log('Server listening on port: ' + 3001);
    });
  })
  .catch(err => console.log(err));
