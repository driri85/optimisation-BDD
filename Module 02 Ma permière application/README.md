# Module 02 - Ma première application

![alt text](m2.webp)

## 11 - Les variables
On oublie le **var** !
```js
 const pi= 3.14;
 const personne ={nom:'Brad',prenom:'PITT'};
 const fruits =['pomme','poire','cerise'];
 let x = 2;
```
## 12 - La portée limitée du let
Quand on sort du **if** ou du **for** la variable n'existe plus !
```js
let age = 18
 if (age >18){
    let info ='ok';
 }
 console.log(info);
 for (let i=0;i < 3;i++){
    console.log(i);
 }
 console.log(i);
```


## 13 - Lecture dans le DOM
Avant de pouvoir manipuler un élément du DOM, vous devez d'abord le sélectionner.

- <code>document.getElementById()</code> : Permet de sélectionner un élément par son identifiant (ID).
- <code>innerHTML</code> : Permet d'obtenir ou de modifier le contenu HTML d'un élément (y compris les balises HTML).

```html
<div id="demo">Ola</div>

<script>
    // lecture
    const str = document.getElementById('demo').innerHTML;
    console.log(str);
</script>
```

## 14 - Ecriture dans le DOM
Il est possible de modifier le contenu de la balise
```html
<div id="demo">Ola</div>

<script>
    // ecriture
    document.getElementById('demo').innerHTML = 'Coucou !!!';
</script>
```

## 15 -  Le trigger ou le bouton 
```html
<button onclick="afficher()">GO</button>
<script>
function afficher(){
   console.log('afficher');
}
</script>
```
###  Le trigger ou le bouton :heart_eyes:
**Bonne pratique**  : Il est préférable d’utiliser les fonctions fléchées : **arrow function**
```html
<button onclick="afficher()">GO</button>
<script>
const afficher=()=>{
   console.log('afficher');
}
</script>
```

###  Le trigger ou le bouton :heart_eyes::heart_eyes:
**Bonne pratique 2**  : Il est préférable de mettre un id au bouton pour bien séparer le code javaScript de la partie HTML 
```html
<button id="btnAfficher">GO</button>
<script>
document.getElementById('btnAfficher').onclick = () =>{
   console.log('afficher');
}
</script>
```

## 16 - Lecture de la saisie utilisateur
```html
<input id="nom" placeholder="Votre Nom ICI">
<br><br>
<button onclick="afficher()">GO</button>
<script>
function afficher(){
    // lecture
    let info = document.getElementById('nom').value;
    console.log(info);
}
</script>
```
## 17 - Une application qui affiche le nom en MAJUSULE !
```html
<input id="nom" placeholder="Votre Nom ICI">
<br><br>
<button onclick="afficher()">GO</button>
<br><br>
<h1 id="titre1"></h1>
<script>
function afficher(){
    // lecture
    let info = document.getElementById('nom').value;
    // vider le champ input
    document.getElementById('nom').value='';
    // traitement
    info = info.toUpperCase();
    // afficher
    document.getElementById('titre1').innerHTML = info;
}
</script>
```

