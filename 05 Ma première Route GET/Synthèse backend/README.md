Créez un projet node 
```
npm init
```
Installez nodemon
```
npm i nodemon
```
Installez express
```
npm i express
```

**server.js**
```js
const http = require('http');
const app = require('./app');
// attention pas de verif du port
app.set('port', 3000);
console.log('go BraaaaAaaaad !!!');
// attention pas de gestion des erreurs
const server = http.createServer(app);

server.listen(3000);
```

**app.js**
```js
const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use('/api/brad', (req, res, next) => {
    const data = 
      {
       
        title: 'Brad PITT',
        description: 'Les infos de mon Brad objet',
        imageUrl: 'https://pixabay.com/photos/brad-pitt-wax-figure-actor-artist-164880/'
       
      };
    res.status(200).json(data);
  });

  module.exports = app;
```


