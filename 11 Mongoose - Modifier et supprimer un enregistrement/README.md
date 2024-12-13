# Modifier et supprimer les données

## Modifier avec PUT

```js
app.put('/api/film/:id', (req, res, next) => {
  Film.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet modifié !'}))
    .catch(error => res.status(400).json({ error }));
});
```

## Supprimer avec DELETE
```js
app.delete('/api/stuff/:id', (req, res, next) => {
  Film.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
    .catch(error => res.status(400).json({ error }));
});
```