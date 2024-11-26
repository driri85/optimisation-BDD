# L'opérateur Spread

## Problématique
```js
    const p1 = { prenom: 'Brad', nom: 'PITT' };
    const p2 = p1;
    p2.nom = 'CRUISE';
    console.log(p1);
    console.log(p2);
```
## p1 et p2 sont le même objet
```js
p1 = { prenom: 'Brad', nom: 'CRUISE' };
p2 = { prenom: 'Brad', nom: 'CRUISE' };
```

## Mise en place du clonage avec spread
```js
const p3 = { prenom: 'Brad', nom: 'PITT' };
    const p5 = { age: 18, taille: 1.8 }
    //const p4 = {...p3};
    const p4 = { ...p3, ...p5 };
    p4.nom = 'CRUISE';
    console.log(p3);
    console.log(p4);
```

## p3 et p4 sont 2 objets différents
```js
p3 = { prenom: 'Brad', nom: 'PITT' };
p4 = { prenom: 'Brad', nom: 'CRUISE' };
```
## Le spread sur les tableaux
```js
const tab1 = ['pomme', 'poire', 'kiwi'];
const tab2 = [...tab1, 'banane'];
console.log(tab2);
 // tab2 = ['pomme', 'poire', 'kiwi','banane'];
```
   
# L'opérateur REST
```js
 const trouverKiwi=(...args)=>{
        return args.filter (el => el =='kiwi');
    }
    const tab = trouverKiwi('pomme','poire','cerise','kiwi');
    // tab =['kiwi']
    console.log (tab);
```

```js
// autre demo
const ajouterCouleur=(...args)=>{
    const tab=[]
    args.map (el => tab.push(el));
    return tab;
}
const couleurs =  ajouterCouleur('rouge','vert','bleu');
// couleurs = ['rouge','vert','bleu']
console.log(couleurs);
```