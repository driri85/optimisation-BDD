const http = require('http');
// on vient importer notre application
// export <=> import
const app = require('./app');
// on vient definir le port d'express
app.set('port', process.env.PORT || 3000);
const server = http.createServer(app);
// si l'envorement me revoit un port à utiliser
// sinon par defaut une utilise le port 3000
server.listen(process.env.PORT || 3000);