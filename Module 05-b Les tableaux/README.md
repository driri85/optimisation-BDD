# Module 05 - Les tableaux : Array en anglais
![alt text](m4.webp)
## 1 Initialiser et remplir un tableau
```js
const tableau =[];
tableau[0]=42;
tableau[1]=51;
tableau.push(78); // tableau[2]=78

// créer un tableau prérempli
const tableau2 =[12,23,54];

console.log(tableau);
console.table(tableau);
```
### Tableau de chaînes de caractères
```js
// tableau de chaînes de caractères
const fruits = ['pomme','poire','cerise'];
fruits.push('kiwi'); // fruits[3]='kiwi';

const couleurs =[];
couleurs.push('rouge');
couleurs.push('vert');
```

## 2 Afficher ou parcourir un tableau
### 21 la boucle for "à Papa" (boucle for classique)
```js
const fruits = ['pomme','poire','cerise'];

// afficher un tableau : boucle for classique
for(let i =0; i<fruits.length;i++){
    console.log(fruits[i]);
}
```
### 22 la boucle for each : simple et pratique  :heart_eyes:
Très utilisée et simple à écrire.  

```js
const fruits = ['pomme','poire','cerise'];

// afficher un tableau : boucle for each
for (let f of fruits){
    console.log(f);
}
```
### 23 la boucle map , très utilisé avec React
```js
const fruits = ['pomme','poire','cerise'];
// le map
fruits.map (f => {console.log(f)});
// le map avec indice
fruits.map ((f,i) => {console.log(fruits[i])});
```
### 24 la boucle for avec in
Plutot utiliser pour pracourir les objets.  
Et oui un objet , c'est aussi un tableau en Javascript !!  
```js
const fruits = ['pomme','poire','cerise'];
// indice => string
// En effet cette boucle sert aussi à parcourir un objet
for (let indice in fruits){
    console.log(fruits[parseInt(indice)]);
}

```
### 25 Pourquoi la boucle for avec in let attribut est un string ?
En effet cette boucle sert surtout à parcourir un objet.  
```js
// JSON
let personne = {prenom:'Brad',nom:'PITT'};
for (let attribut in personne){
    console.log(attribut); // prenom ... nom
}
```
## 4 Effacer un élément

### INTERDIT !
:rage: :broken_heart:
**Interdit** car Le delete fait des trous sur un tableau

```js
const fruits = ['pomme','poire','cerise','kiwi'];
// effacer 'cerise' indice 2
delete fruits[2]; // NE PAS UTILISER !!
```
  

Le **delete** est utilisé sur les objets pour enlever des attribus
```js
const personne = {prenom:'Brad',nom:'PITT',age:18};
delete personne['age']; // Et oui un objet est aussi un tableau !!
//personne = {prenom:'Brad',nom:'PITT'};
```
### Bonne pratique pour effacer :heart_eyes:
Le **splice** avec un **p**
```js
const fruits = ['pomme','poire','cerise','kiwi'];
fruits.splice(2,1); // 2 = indice  ; 1 = nb eléments à effacer
```
**Attention** Les indices sont réalouer

## 5 Echantilloné
```js
const fruits = ['pomme','poire','cerise','kiwi'];
// slice = echantilloné un tableau
let tableau2 = fruits.slice(2,4); // 2 = indice de depart ; 4 = indice de fin
// le premier tableau reste intacte
console.log(fruits); // fruits = ['pomme','poire','cerise','kiwi'];
console.log(tableau2); // tableau2 = ['cerise','kiwi'];
```


