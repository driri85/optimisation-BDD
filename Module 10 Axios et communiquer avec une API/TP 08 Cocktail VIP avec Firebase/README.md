# TP 07 Cocktail VIP avec Firebase

![alt text](firebase-svg.webp)
## Objectifs
![alt text](../tp8.webp)
- Ajouter une personne dans Real Time data base.  
- Afficher la liste de personnnes au démarrage.  
- Enlever la personne de la liste. 
- Modifier l'état de la personne.  

## Problème on récupère les personnes comme ceci
```js
let data= {
    "-OB5oS7whXKqTlbBCZFx" :{nom: "PITT", "prenom": "Brad"},
    "-OB5oSII9wHESMfLsEKC" :{nom: "CAGE", "prenom": "Nicolas"},
    "-OB5oSPEiZ3ut529fo0a" :{nom: "JOLIE", "prenom": "Angelina"}
}
```

## C'est à dire comme cela
```js
let data= {
    "id1" :{nom: "PITT", "prenom": "Brad"},
    "id2" :{nom: "CAGE", "prenom": "Nicolas"},
    "id3" :{nom: "JOLIE", "prenom": "Angelina"}
}
```

## Et on souhaiterais avoir cela
```js
let personnes = [
    {nom: "PITT", "prenom": "Brad", "id1"},
    {nom: "CAGE", "prenom": "Nicolas", "id2"},
    {nom: "JOLIE", "prenom": "Angelina", "id3"}
]
```

## penser à for + in
```js
for (let attribut in data){
    console.log(attribut);
    console.log(data[attribut]);
    
}
```

## Ou bien Object.keys
```js
 Object.keys(data).map( attribut => {
    console.log(attribut);
    console.log(data[attribut]);
   }
```