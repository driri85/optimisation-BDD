# MANIPULATION DU DOM EN JAVASCRIPT

Le DOM (Document Object Model) est une interface qui permet de représenter les éléments d'une page HTML sous forme d'objets JavaScript. La manipulation de ce dernier avec JavaScript est un aspect fondamental du développement web. Elle permet d'interagir dynamiquement avec la structure d'une page, de modifier son contenu, de gérer des événements et de rendre les pages web interactives et réactives.

## Accéder au DOM

Avant de pouvoir manipuler un élément du DOM, vous devez d'abord le sélectionner.

- <code>document.getElementById()</code> : Permet de sélectionner un élément par son identifiant (ID).

```js
// je séléctionne l'élément HTML possédant l'id "title" //
const title = document.getElementById("title");
```

- <code>document.getElementsByClassName()</code> : Permet de sélectionner tous les éléments ayant une classe donnée (retourne une collection d'objets).

```js
// je séléctionne tous les éléments HTML possédant la classe "paraph" //
const paraphs = document.getElementsByClassName("paraph");
```

- <code>document.getElementsByTagName()</code> : Permet de sélectionner tous les éléments d'un certain type (retourne une collection d'objets).

```js
// je séléctionne tous les éléments HTML de type <button> //
const buttons = document.getElementsByTagName("button");
```

- <code>document.querySelector()</code> :Permet de sélectionner le premier élément correspondant à un sélecteur CSS.

```js
// je séléctionne le premier élément HTML possédant la classe "link" //
const link = document.querySelector(".link");
```

- <code>document.querySelectorAll()()</code> : Permet de sélectionner tous les éléments correspondant à un sélecteur CSS (retourne une NodeList).

```js
// je séléctionne tous les éléments HTML de type <h2> //
const headings = document.querySelectorAll("h2");
```

## Accéder aux propriétés de l'élément

Une fois que vous avez sélectionné un ou plusieurs éléments, vous pouvez y accéder et les manipuler.

Voici quelques propriétés utiles :

- <code>innerHTML</code> : Permet d'obtenir ou de modifier le contenu HTML d'un élément (y compris les balises HTML).

```js
// je séléctionne l'élément possedant l'id "title" //
const title = document.querySelector("#title");
// je modifie son contenue, j'ajoute en passant de nouvelles balises HTML //
title.innerHTML = "Voici mon <strong>nouveau</strong> titre";
```

- <code>innerText</code> : Permet d'obtenir ou de modifier le contenu text d'un élément (balises non comprises).

```js
// je séléctionne le premier élément HTML possédant la classe "link" //
const link = document.querySelector(".link");
// affiche le texte de mon élément, par exemple : "Je suis un lien hypertext !" //
console.log(link.innerText);
```

- <code>value</code>:Permet de récupérer ou de modifier la valeur d'un champ de formulaire (input, button, ...).

```js
// je séléctionne le premier élément HTML de type <input> //
const input = document.querySelector("input");
// je récupère la valeur saisie par l'utilisateur //
const value = input.value;
// j'affiche cette valeur dans la console //
console.log("Valeur saisie : ", value);
```

## Modifier le structure du DOM

- Créer un nouvel élément :
  Vous pouvez créer un nouvel élément HTML. Il est nécessaire de l'insérer dans la page ensuite.

```js
// je créer un nouvel élément HTML de type <p> //
const paraph = document.createElement("p");
// je lui ajoute un texte personnalisé //
paraph.innerText = "Je suis un nouveau paragraphe";
// je séléctionne l'élément HTML destiné à devenir parent de mon paragraphe //
const elementParent = document.querySelector("#parent");
// j'insère mon paragraphe dans la page //
parent.appendChild(paraph);
```

- <code>appendChild</code> permet aussi de déplacer un élément dans le DOM : un élément HTML ne pouvant pas avoir plusieurs éléments "parent" directs en même temps, c'est le dernier attribué qui est conservé.

```js
// je séléctionne le paragraphe créé précedement //
const paraph = document.querySelector("p");
// je séléctionne son nouvel élément parent //
const nouveauParent = document.querySelector("#nouveauParent");
// je déplace dans le DOM //
nouveauParent.appendChild(paraph);
```

- Supprimer un élément :
  Pour supprimer un élément du DOM, vous utilisez la méthode .remove.

```js
// je séléctionne l'élément que je souhaite supprimer ... //
let elementASupprimer = document.querySelector("elementASupprimer");
// ... et le supprime définitivement du DOM //
elementASupprimer.remove();
```

## Modifier les attributs des éléments

Vous pouvez aussi modifier les attributs des éléments du DOM, tels que les classes, les IDs, ou encore les sources d'images.

- <code>setAttribute()</code> : Modifie un attribut ou en ajoute un nouveau à un élément.

```js
const image = document.querySelector("img");
// je modifie la source de mon image //
img.setAttribute("src", "nouvelleImage.jpg");
```

- <code>getAttribute()</code> : Récupère la valeur d'un attribut d'un élément.

```js
const imageSrc = document.querySelector("img").getAttribute("src");
// j'affiche dans la console la source actuelle de mon image //
console.log(imageSrc);
```

- <code>classList</code> : Permet de manipuler les classes CSS d'un élément.
  - <code>add()</code> : Ajoute une classe à l'élément.
  - <code>remove()</code> : Supprime une classe de l'élément.
  - <code>toggle()</code> : Ajoute ou supprime une classe (si elle existe déjà, elle est supprimée).

```js
const bouton = document.querySelector(".monBouton");
// j'ajoute la classe "active" à mon bouton //
bouton.classList.add("active");
// je supprime la classe "disabled" de mon bouton //
bouton.classList.remove("disabled"); // Supprime la classe "disabled"
```

## Gestion des évenements

Les événements permettent d'interagir avec les utilisateurs, comme réagir à un clic, à une saisie de texte, etc. JavaScript permet d'ajouter des écouteurs d'événements sur les éléments du DOM.

- Ajouter un écouteur d'événement :
  Utilisez addEventListener() pour ajouter un écouteur d'événement à un élément.

```js
const bouton = document.querySelector(".monBouton");

// lorsque l'évenement "click" est capté depuis mon bouton, je déclenche la fonction suivante //
bouton.addEventListener("click", function () {
  alert("Le bouton a été cliqué !");
});
```

- Types d'événements courants :
  Voici quelques événements courants que vous pouvez écouter :

  - click : Se déclenche lorsqu'un élément est cliqué.
  - mouseover : Se déclenche lorsqu'un élément est survolé par la souris.
  - keydown / keyup : Se déclenche lorsqu'une touche du clavier est enfoncée ou relâchée.
  - submit : Se déclenche lors de la soumission d'un formulaire.

```js
const formulaire = document.querySelector("form");

// lorsque l'évenement "submit" est capté depuis mon formulaire, je déclenche la fonction suivante //
formulaire.addEventListener("submit", function (event) {
  // je prévient le comportement par défaut du formulaire : il est envoyé vers le serveur et la page est rechargée //
  event.preventDefault();
  console.log("Formulaire soumis !");
});
```
