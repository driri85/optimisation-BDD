# Glossaire ou Cheat sheet
## Module 02 - Ma première application
:one: **Le trigger : le boutton** <code>onclick=</code>
```html
<button onclick="afficher()">Afficher</button>
```
```js
function afficher(){
     //...
}
```
Les fonctions fléchées (arrow function) :heart_eyes:
```js
const afficher =()=>{
    //...
}
```

:two: **Lecture du DOM** - lecture d'une balise **input** 
**sélecteur** + <code>.value</code>
```html
<input name="nom" />
```
```js
const nom = document.getElementById('nom').value;
```

:three: **Ecriture dans le DOM**
**sélecteur** + <code>.innerHTML</code>
```html
<div id="demo"></demo>
```
```js
document.getElementById('demo').innerHTML = 'Bonjour';
```

## Module 03 - Création d'une balise
:one: <code>createElement</code> Création de balise 
```js
let p = document.createElement('p');
```
:two:  <code>.appendChild</code> Ajouter une balise dans une balise de la page
```js
document.getElementById('demo').appendChild(p);
```
:three: Ajouter une classe **sélecteur** + <code>classList</code> + <code>add</code>  
```js
 document.getElementById('demo').classList.add('rouge');
```
:four: Ajouter OU Enlver une classe **sélecteur** +  <code>classList</code> + <code>toggle</code>  

```js
 document.getElementById('demo').classList.toggle('rouge');
```
:five: **sélecteur** + <code>setAttribute</code> Ajouter un attribut dans une balise
```js 
document.getElementById('demo').setAttribute('class','rouge');
document.getElementById('demo').setAttribute('data-info','test');  
```

## Module 04 - Enlever une balise
:one: **selecteur** + <code>remove</code> Enlever une balise avec
```js
  document.getElementById('demo').remove();
```
:two: <code>event.target</code> Sélécteur dynamique sur la balise cliquée
```js
document.getElementById('btnEnlever').onclick = (event) =>{
    const selecteur = event.target;
    selecteur.remove();
}
```
:three: <code>parentElement</code> Naviguez dans le DOM
```js
document.getElementById('btnEnlever').onclick = (event)=>{
    const tr = event.target.parentElement.parentElement;
    tr.remove();
}
```
:four: <code>closest()</code> Naviguez dans le DOM
```js
document.getElementById('btnEnlever').onclick = (event)=>{
    const tr = event.target.closest('tr');
    tr.remove();
}
```

## Module 05 - Les tableaux
:one: Créer un tableau et ajouter des valeurs
```js
const couleurs =[];
couleurs.push('rouge');
couleurs.push('vert');
couleurs.push('jaune');
couleurs.push('bleu');
```
:two: Parcourir un tableau
```js
const couleurs =['rouge','vert','jaune','bleu'];
for let ( couleur of couleurs){
    console.log(couleur);
}
```
:three: Enlever une valeur
```js
const couleurs =['rouge','vert','jaune','bleu'];
couleurs.splice(2,1); // enlever jaune
```
## Module 06 - Les templates
:one: La balise template
```html
<template id="info">
    <p>Brad<p>
    <p>PITT<p>
<template>
```
:two: Cloner **sélecteur** + <code>.content.cloneNode(true)</code>
```js
const clone = document.getElementById('info').content.cloneNode(true)
```
:three: <code>querySelector</code> Sélécteur CSS : Séléctionner une seule balise
```js
document.querySelector('.rouge').innerHTML ='hello';
```
:four: <code>querySelectorAll</code> Sélécteur CSS : Séléctionner plusieurs balises
```js
 document.querySelectorAll('p')[0].innerHTML = 'Brad';
```
## Module 07 - Local Storage & Session Storage    
:one: Stocker dans le local storage <code>setItems</code>
```js
const couleurs =['rouge','vert','jaune','bleu'];
localStorage.setItems('couleurs',JSON.stringify(couleurs))
```
:two: Lire depuis le local storage <code>getItems</code>
```js
const tab =[];
const data = localStorage.getItems('couleurs');
if (data){
    tab = JSON.parse(localStorage.getItems('couleurs'));
}
```
:three: Enlever du local storage <code>removeItems</code> <code>clear()</code>
```js
const data = localStorage.getItems('couleurs');
if (data){
   localStorage.removeItems('couleurs');
}
localStorage.clear();// efface tout
```
:four: <code>sessionStorage</code> Il suffit de remplacer localStorage par sessionStorage pour l'utiliser  
```js
sessionStorage.setItems('couleur','rouge');
```

## Module 08 - Les objets
:one: On the fly : A la volée
```js
const personne = {prenom:'Brad',nom:'PITT'};
```

:two: On the fly : A la volée
```js
const personne = {};
personne.prenom = 'Brad';
personne.nom = 'PITT';
```

:three: Avec une classe
```js
class Personne {
  constructor(prenom, nom) {
    this.prenom = prenom;
    this.nom = nom;
  }
}
const personne = new Personne('Brad', 'PITT');
```

## Module 09 - Interroger une API avec fetch

```js
const response = await fetch("https://swapi.dev/api/people/1");
const data = await response.json(); 
```
