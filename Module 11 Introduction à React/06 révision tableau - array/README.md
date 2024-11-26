# Les Tableaux

## Initialiser un tableau
```js
 let tableau =[ 12,23,54];
console.log(tableau);
// console.table(tableau);
let fruits = ['pomme','poire','cerise'];
fruits.push('kiwi'); // fruits[3]='kiwi';
```
## Afficher ou parcourir un tableau
```js
// afficher un tableau
for(let i =0; i<fruits.length;i++){
    console.log(fruits[i]);
}
console.log('----');
for (let f of fruits){
    console.log(f);
}
// indice => string
for (let indice in fruits){
    console.log(fruits[parseInt(indice)]);
}
console.log('----');
```
## Pourquoi la boucle for & in let attribut est un string ?
```js
// JSON
let personne = {prenom:'Brad',nom:'PITT'};
for (let attribut in personne){
    // console.log(attribut);
    // recupérer le contenu de l'attribut prenom
    if (attribut =='prenom'){
        // un objet c'est aussi un tableau
        console.log(personne[attribut]);            
    }
    
}
console.log('----');
```
## Effacer un élément
```js
// effacer 'cerise' indice 2
//delete fruits[2]; // NE PAS UTILISER
//fruits.splice(2,1); //indice,nb element à enlever

// slice = echantilloné un tableau
let tableau2 = fruits.slice(2,4);
console.log(fruits);
console.log(tableau2);
```
## Les tableaux d'objets
```js
// des tableau d'objet
let personne2 = {prenom:'George',nom:'Cloney'}

let personnes =[];
personnes.push(personne);
personnes.push(personne2);
console.log(personnes);

let personne3 ={};
personne3.prenom = 'Nicolas';
personne3.nom = 'CAGE';
personnes.push(personne3);

let p4 ={prenom:'Tom',nom:'CRUISE'};
personnes.push(p4);

class Personne{
    constructor(prenom,nom){
        this.prenom = prenom;
        this.nom = nom;
    }
}
let p5 = new Personne('Angelina','JOLIE');
personnes.push(p5);
p4.age = 18;
console.log(personnes);
for (let p of personnes){
    console.log(p.prenom+' '+p.nom);
}
console.log('----');
personnes.map((p) => {console.log(p.prenom+' '+p.nom);});
```