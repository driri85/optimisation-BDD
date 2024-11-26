# Module 07 LocalStorage et SessionStorage
![alt text](m7.webp)
![alt text](db.webp)

- Local Storage ne stocke que des chaînes de caractères
- La taille est de **20 Mo** (1 octet = caractères) 20millions de caractères
- Si je redémarre l’ordinateur les données sont toujours là.  

- **Session Storage**  
Le **J**son **W**eb **T**oken **jwt** doit être stocker dans session storage  
Session Storage est vidé lorsque l’on ferme l’onglet ou le navigateur


## 1 - Ecrire dans le local Storage
**Basique**
```js
localStorage.couleur ='rouge';
```
**Bonne pratique**
```js
localStorage.setItem('couleur','rouge');
```

## 2 - Lecture du  le local Storage
**Basique**
```js
const data = localStorage.couleur;
if (data){
    const couleur= data;
}
```
**Bonne pratique**
```js
const data = localStorage.getItem('couleur');
if (data){
    const couleur= data;
}
```

## 3 - Ecrire un objet ou un tableau dans le local Storage
Le local Storage ne stoque que des chaînes de caractères  
Il faut donc serialiser avec <code>JSON.stringify()</code>    
```js
const fruits=['pomme','poire','cerise'];
localStorage.setItem('fruits',JSON.stringify(fruits));
```

## 4 - Lire un objet ou un tableau dans le local Storage
Le local Storage ne stoque que des chaînes de caractères 
Il faut donc déserialiser avec <code>JSON.parse()</code>     
```js
const data = localStorage.getItem('fruits');
if (data){
    const fruits= JSON.parse(data);
}
```
## 5 - Enlever du local storage
<code>removeItems()</code> permet d'enlever un item  


```js
const data = localStorage.getItem('couleurs');
if (data){
   localStorage.removeItem('couleurs');
}
```
<code>clear()</code> vide tout 

```js
localStorage.clear(); // efface tout
```
## 6 - ET Session Storage ?
Session storage fonctionne comme local Storage
Il suffit donc de remplacer <code>localStorage</code> par <code>SessionStorage</code>    
Les JSON web token sont à stocker le sessionStorage plutot que localStorage  
**Ecriture**
```js
sessionStorage.setItem('couleur','rouge');
```
**Lecture**
```js
const data = sessionStorage.getItem('couleur');
if (data){
    const couleur= data;
}
```
