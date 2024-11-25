# 03 Le Framework express
<img src="../img/express.svg" width="250">   

```
|-- projets-node
        |-- projet-2
            |-- .gitignore
            |-- backend
                |-- node_modules
                |-- package.json
                |-- serveur.js
                |-- app.js
```



## Installez Express
```
npm install express
```

## Prise ne mains des middleware
**middleware** :  
Des fonctions  qui capture et traite les requêtes envoyer vers le serveur  
Permettant de controller comment notre serveur réagit à chaque type de requêtes  


Création du fichier app.js
**app.js**
```js
const express = require('express');
// on appelle la méthode express
// pour créer une apllication express
const app = express();

app.use((req, res) => {
   res.json({ message: 'Votre requête a bien été reçue !' }); 
});
// on va exporter cette application
// pour server.js
module.exports = app;
```


**server.js**
```js
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
```




## Prise en main de next
La fonction <code>next</code> permet de renvoyer
qui permet à chaque middleware de  renvoyer l'exécution au middleware suivant

**app.js**  
```js
const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('Requête reçue !');
  next();
});

app.use((req, res, next) => {
  res.status(201);
  next();
});

app.use((req, res, next) => {
  res.json({ message: 'Votre requête a bien été reçue !' });
  next();
});

app.use((req, res, next) => {
  console.log('Réponse envoyée avec succès !');
});

module.exports = app;
```

# Modfication de server.js
Maintenant améliorons <code>server.js</code> 
pour le rendre plus stable et approprié pour à la mise en ligne.

```js
const http = require('http');
const app = require('./app');

//-----------------------------------------------------------
const normalizePort = val => {
  const port = parseInt(val, 10);
  // isNanN est Not A Number (Si cela n'est pas un nombre)
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};
//-----------------------------------------------------------
// utilisation de la méthode créer plus haut  :normalizePort
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

// gestion des erreurs
//-----------------------------------------------------------
const errorHandler = error => {
    if (error.syscall !== 'listen') {
    throw error;
  }
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
  switch (error.code) {
      case 'EACCES':
          console.error(bind + ' requires elevated privileges.');
      process.exit(1);
      break;
    case 'EADDRINUSE':
        console.error(bind + ' is already in use.');
      process.exit(1);
      break;
    default:
      throw error;
  }
};
//-----------------------------------------------------------

const server = http.createServer(app);
// utilisation de la méthode créer plus haut  :errorHandler
server.on('error', errorHandler);
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Listening on ' + bind);
});

server.listen(port);
```

La fonction **normalizePort** renvoie un port valide, qu'il soit fourni sous la forme d'un numéro ou d'une chaîne ;