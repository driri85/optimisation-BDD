# Ma première route GET
Mais qui est Brad ?  
<img src="../img/brad.webp" width="80">
```
|-- projets-node
        |-- projet-3
            |-- .gitignore
            |-- frontend
            |-- backend
```

**Le frontend** :
```
|-- projets-node
        |-- projet-3
            |-- .gitignore
            |-- frontend
                |-- node_modules
                |-- package.json
                |-- index.html
            |-- backend

```
**Le backend** :
```
|-- projets-node
        |-- projet-3
            |-- .gitignore
            |-- frontend
            |-- backend
                |-- node_modules
                |-- package.json
                |-- serveur.js
                |-- app.js
```
1 - <code>app.use()</code>
La méthode app.use() permet d'attribuer un middleware à une route spécifique de votre application.

2 - **CORS**
Le CORS définit comment les serveurs et les navigateurs interagissent,  
 en spécifiant quelles ressources peuvent être demandées de manière légitime – par défaut, les requêtes AJAX sont interdites.

Pour permettre des requêtes cross-origin (et empêcher des erreurs CORS), des headers spécifiques de contrôle d'accès doivent être précisés.


```js
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
```
Nous allons afficher un JSON en retour.  
**app.js** :
```js
// url : http://localhost:3000/api/brad
app.use('/api/brad', (req, res, next) => {
  const data = 
      {
       
        title: 'Brad PITT',
        description: 'Les infos de mon premier objet',
        imageUrl: 'https://pixabay.com/photos/brad-pitt-wax-figure-actor-artist-164880/',
       
      };
  res.status(200).json(data);
});
```

**CORS** signifie « Cross Origin Resource Sharing ». Il s'agit d'un système de sécurité qui, par défaut, bloque les appels HTTP entre des serveurs différents, ce qui empêche donc les requêtes malveillantes d'accéder à des ressources sensibles. Dans notre cas, nous avons deux origines : <code>localhost:3000</code> et <code>localhost:5000</code> , et nous souhaiterions qu'elles puissent communiquer entre elles. Pour cela, nous devons ajouter des headers à notre objet  response .


## Le fichier app.js complet
```js
const express = require('express');
const app = express();
//  Dénition des headers pour le problème CORS
//----------------------------------------------------------------
// Mise en place du middle ware pour proposer des headers
//----------------------------------------------------------------
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
//----------------------------------------------------------------

app.use('/api/stuff', (req, res, next) => {
    const data = 
      {
        title: 'Brad PITT',
        description: 'Les infos de mon premier objet',
        imageUrl: 'https://pixabay.com/photos/brad-pitt-wax-figure-actor-artist-164880/',
       
      };
    res.status(200).json(data);
  });
```