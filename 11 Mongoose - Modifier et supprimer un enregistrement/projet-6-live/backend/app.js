const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Film = require('./models/Film.js');
app.use(express.json()); // body parser
mongoose.connect('mongodb+srv://augure:ldJKDUXNxvMsmwaZ@cluster0.ytemn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
console.log('abc');
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  app.post('/api/film', (req, res, next) => {
   // delete req.body._id;
   console.log(req.body);
    const film = new Film({
      ...req.body
    });
    film.save()
      .then(() => res.status(201).json({ message: 'Film saved !'}))
      .catch(error => res.status(400).json({ error }));
  });

  app.get('/api/film', (req, res, next) => {
    Film.find()
      .then(films => res.status(200).json(films))
      .catch(error => res.status(400).json({ error }));
  });

  app.delete('/api/film/:id', (req, res, next) => {
    Film.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
      .catch(error => res.status(400).json({ error }));
  });

  app.put('/api/film/:id', (req, res, next) => {
    Film.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet modifié !'}))
      .catch(error => res.status(400).json({ error }));
  });

  module.exports = app;