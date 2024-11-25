# Une route avec POST
<img src="../img/postman.webp" width="80">  
  
Implémenter une route POST    
Ou comment des données entrantes peuvent être capturée ?  
    

modifier la méthode  <code>use</code>  
- en  <code>get</code>  pour le middleware des requêtes GET 
- en  <code>post</code>  pour le middleware des requêtes POST

**app.js**
```js
//...
app.use(express.json());
//...
app.post('/api/brad', (req, res, next) => {
  console.log(req.body);
  res.status(201).json({
    message: 'Objet créé !'
  });
});
//...
```