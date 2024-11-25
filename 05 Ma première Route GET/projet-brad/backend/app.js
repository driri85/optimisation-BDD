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
        imageUrl: 'https://cdn.pixabay.com/photo/2013/07/18/20/24/brad-pitt-164880_1280.jpg'
       
      };
    res.status(200).json(data);
  });

  module.exports = app;