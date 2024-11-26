# GESTION DE L'ASYNCHRONE EN JAVASCRIPT

La gestion de l’asynchrone est essentielle pour écrire des applications JavaScript modernes. En effet, le JavaScript, qui fonctionne sur un modèle de thread unique (appelé event loop), a besoin de mécanismes pour effectuer des opérations longues (comme les appels API, les lectures de fichiers ou les temporisations) sans bloquer l'exécution du code. C'est ici que les mécanismes asynchrones entrent en jeu.

## INTRODUCTION AUX OPÉRATIONS ASYNCHRONES

Une opération asynchrone est une opération qui s'exécute indépendamment du fil principal d'exécution du programme, sans bloquer l'exécution du reste du code.

Lors de l'exécution d'une opération lourde (comme la lecture de fichier ou une requête HTTP), le thread principal n'a pas à attendre la fin de son exécution avant de continuer le programme, ce qui rend l'application JavaScript plus réactive et rapide.

## LES PROMISES

Les Promises (promesses) sont un mécanisme clé pour gérer l’asynchrone en JavaScript. Une promise est un objet représentant la valeur d'une opération qui peut être complétée à un moment donné dans le futur (ou qui peut échouer).

### Syntaxe d'une Promise

Une Promise est un objet qui va prendre un certain temps pour se résoudre ou rejeter. Elle a trois états possibles :

- pending (en attente) : L'opération asynchrone est toujours en cours.
- fulfilled (résolue) : L'opération asynchrone a réussi.
- rejected (rejetée) : L'opération asynchrone a échoué.

### Création d'une Promise :

- <code>resolve()</code> : Méthode appelée lorsque l'opération asynchrone réussit.
- <code>reject()</code> : Méthode appelée lorsqu'une erreur survient pendant l'opération asynchrone.

```js
const promesse = new Promise(function (resolve, reject) {
  // on simule une opération asynchrone //
  const succes = true;

  if (succes) {
    resolve("Opération réussie !");
  } else {
    reject("L'opération à échouée !");
  }
});
```

### Manipulation des résultats de la Promise

Les méthodes principales utilisées avec une Promise sont .then() et .catch().

- <code>then()</code> : Permet de gérer une Promise résolue.
- <code>catch()</code>: Permet de gérer une Promise qui à échouée.

```js
promesse
  .then(function (resultat) {
    // affiche "Opération réussie !"
    console.log(resultat);
  })
  .catch(function (resultat) {
    // affiche "L'opération à échouée !"
    console.log(resultat);
  });
```

## ASYNC / AWAIT

Les mots-clés async et await sont introduits pour simplifier le travail avec les Promises en permettant d'écrire du code asynchrone de manière plus lisible et ressemblant à du code synchrone.

### Syntaxe de async et await

- <code>async</code> : Le mot clef <code>async</code> est ajouté avant la déclaration <code>function</code> pour la rendre asynchrone. Cela permet à la fonction de contenir des appels à await.
- <code>await</code> : On peut maintenant utiliser le mot clef <code>await</code> pour attendre qu'une Promise soit résolue ou rejetée avant de continuer l'exécution du code.

```js
// le fonction est déclarée asynchrone //
async function recupererDesDonnees() {
  // on attend que la Promise soit résolue //
  const resultat = await new Promise((resolve, reject) => {
    const succes = true;

    // on simule le temps d'exécution d'une requête HTTP //
    setTimeout(() => {
      if (succes) {
        resolve("Données récupérées !");
      } else {
        reject("Erreur lors de la récupération.");
      }
    }, 2000);
  });

  // affiche "Données récupérées !" une fois le délai écoulé //
  console.log(resultat);
}

// appel de la fonction //
recupererDesDonnees();
```

## Gérer les erreurs avec try / catch

Lorsque vous utilisez await dans une fonction async, il est important d'entourer le code qui peut échouer avec un bloc try / catch pour capturer et gérer les erreurs.

```js
// le fonction est déclarée asynchrone //
async function recupererDesDonnees() {
  try {
    const resultat = await new Promise((resolve, reject) => {
      // la requête échoue cette fois ci //
      const succes = false;

      // on simule le temps d'exécution d'une requête HTTP //
      setTimeout(() => {
        if (succes) {
          resolve("Données récupérées !");
        } else {
          reject("Erreur lors de la récupération.");
        }
      }, 2000);
    });

    // la Promise qui réussi permet d'exécuter la suite du bloc try //
    console.log(`Succes : ${resultat}`);
  } catch (error) {
    // la Promise qui échoue est récupérée dans le bloc catch //
    console.log(`Message : ${error}`);
  }
}

// appel de la fonction //
recupererDesDonnees();
```

## Combinaison de plusieurs Promises : Promise.all() et Promise.race()

Lorsque vous devez gérer plusieurs Promises simultanément, il existe plusieurs méthodes qui permettent de les combiner.

### Promise.all()

<code>Promise.all()</code> prend un tableau de Promises et renvoie une nouvelle Promise qui sera résolue quand toutes les Promises passées en entrée sont résolues.

```js
const promesse1 = new Promise((resolve) =>
  setTimeout(resolve, 1000, "Résultat 1")
);
const promesse2 = new Promise((resolve) =>
  setTimeout(resolve, 2000, "Résultat 2")
);
const promesse3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 3000, "Résultat 3")
);

Promise.all([promesse1, promesse2, promesse3])
  .then(function (resultats) {
    // affiche ["Résultat 1", "Résultat 2", "Résultat 3"]
    console.log(resultats);
  })
  .catch(function (error) {
    // affiche l'erreur dès qu' une des Promise échoue //
    console.log(error);
  });
```

### Promise.race()

<code>Promise.race()</code> prend également un tableau de Promises, mais la nouvelle Promise renvoyée est résolue dès que la première des Promises passées en entrée est résolue (ou rejetée).

```js
const promesse1 = new Promise((resolve) =>
  setTimeout(resolve, 1000, "Résultat 1")
);
const promesse2 = new Promise((resolve) =>
  setTimeout(resolve, 2000, "Résultat 2")
);
const promesse3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 3000, "Résultat 3")
);

Promise.race([promesse1, promesse2, promesse3])
  .then(function (resultats) {
    // affiche "Résultat 1" car c'est la première Promise à être résolue //
    console.log(resultats);
  })
  .catch(function (error) {
    // affiche l'erreur si une des Promise échoue //
    console.log(error);
  });
```
