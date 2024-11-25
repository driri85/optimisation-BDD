# 09 MongoDB -Enregistrez et récupérez des données
## Installez mongoose
<img src="../img/9/mongoose.webp" width="250">

```
npm i mongoose
```

Une fois l'installation terminée, importez <code>mongoose</code> dans votre fichier <code>app.js</code> 
```js
const mongoose = require('mongoose');
```
  

Juste en dessous de votre déclaration de constante app,ajoutez la ligne suivante.  
   
Veillez à remplacer la base @**cluster0-pme76.mongodb.net** par la vôtre, et la chaîne <PASSWORD> par votre mot de passe utilisateur MongoDB :

```js
mongoose.connect('mongodb+srv://augure:<PASSWORD>@cluster0-pme76.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
```

## les schemas de données
Utilisez mongoose c'est la possibilité de créer des schémas de données.  

Les schemas vont permettre de respecter modèle de données.
Cel apermet d'avoir un code plus robuste.

## Création de notre premier schema
```
|-- projets-node
        |-- projet-6-mongo-db
            |-- frontend
            |-- backend
                |-- models
                    |-- Film.js
```
Création du répertoire <code>models</code>   
Création du fichier <code>Film.js</code>  
    
**Films.js**
```js
const mongoose = require('mongoose');

const filmSchema = mongoose.Schema({
  _id:{ type: String, required: false },
  title: { type: String, required: true },
  imageUrl: { type: String, required: true },
  note: { type: Number, required: true },
});

module.exports = mongoose.model('Film', filmSchema);
```
# Insertion des données
# Utilisation du schémas dans app.js

On vient importer le model créer ci-dessus.  

```js
const Film = require('./models/Film');
```

```js
app.post('/api/film', (req, res, next) => {
  delete req.body._id;
  const thing = new Film({
    ...req.body
  });
  thing.save()
    .then(() => res.status(201).json({ message: 'Film saved !'}))
    .catch(error => res.status(400).json({ error }));
});
```
L'opérateur spread ... est utilisé pour faire une copie de tous les éléments de <code>req.body</code>   
```
{title:req.body.title}
```
Le code complet de <code>app.js</code>
```js
const express = require('express');
const app = express();
const mongoose = require('mongoose');
//--------
const Film = require('./models/Film');
//--------

mongoose.connect('mongodb+srv://augure:votre_mot_de_passe@cluster0.ytemn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  app.post('/api/film', (req, res, next) => {
   // delete req.body._id;
    const thing = new Film({
      ...req.body
    });
    thing.save()
      .then(() => res.status(201).json({ message: 'Film saved !'}))
      .catch(error => res.status(400).json({ error }));
  });

  module.exports = app;
```

# Lecture des données
Nous utilisons la méthode <code>find()</code> dans notre modèle Mongoose 
afin de renvoyer un tableau contenant tous les <code>Film<code> dans notre base de données.
```js
app.use('/api/film', (req, res, next) => {
    Film.find()
      .then(films => res.status(200).json(films))
      .catch(error => res.status(400).json({ error }));
  });
```

```js
app.get('/api/filmtuff/:id', (req, res, next) => {
  Thing.findOne({ _id: req.params.id })
    .then(film => res.status(200).json(film))
    .catch(error => res.status(404).json({ error }));
});
```

