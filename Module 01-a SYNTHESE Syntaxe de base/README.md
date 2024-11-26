# SYNTAXE DE BASE

## Déclaration des variables

- <code>let</code> : Permet de déclarer une variable dont la valeur peut être modifiée.

```js
// on attribue la valeur 25 à la variable "age" //
let age = 25;

// on attribue une nouvelle valeur à notre variable //
age = 26;
```

- <code>const</code> : Permet de déclarer une constante, c'est-à-dire une variable dont la valeur ne peut pas être modifiée après sa déclaration.

```js
const pi = 3.14159;

// pi = 3.14; // cette ligne déclencherais une erreur, une constant ne pouvant être modifiée //
```

- <code>var</code> : Ancienne méthode pour déclarer une variable. Elle est maintenant déconseillée car elle présente des comportements inattendus, notamment au niveau de la portée (scope) de la variable.

```js
// on pourra trouver var dans du code "ancien" //
var nom = "Alice";
```

## Les opérateurs en programmation

Les opérateurs en programmation sont des symboles permettant d’effectuer des opérations sur des valeurs ou des variables. Ils peuvent être classés en différentes catégories en fonction de leur fonction et de l’opération qu'ils réalisent.

### Opérateurs de calcul

Les opérateurs de calcul sont utilisés pour modifier la valeur d'une variable à l’aide d’opérations mathématiques de base.

| Symbole | Description                 |
| ------- | --------------------------- |
| `+`     | Opérateur d'addition        |
| `-`     | Opérateur de soustraction   |
| `*`     | Opérateur de multiplication |
| `/`     | Opérateur de division       |
| `%`     | Opérateur modulo            |

### Opérateurs d'affectation

Les opérateurs d'affectation permettent d'attribuer des valeurs à des variables. Ces opérateurs utilisent une expression à droite et appliquent l’opération correspondante avant de stocker le résultat dans la variable située à gauche.

| Symbole | Description                   |
| ------- | ----------------------------- |
| `=`     | Affectation simple            |
| `+=`    | Addition et affectation       |
| `-=`    | Soustraction et affectation   |
| `*=`    | Multiplication et affectation |
| `/=`    | Division et affectation       |

### Opérateurs d'incrémentation et de décrémentation

Les opérateurs d'incrémentation et de décrémentation permettent de modifier la valeur d’une variable de manière incrémentale, généralement en l'augmentant ou en la diminuant d'une unité.

| Symbole | Description                                       |
| ------- | ------------------------------------------------- |
| `++`    | Incrémentation de la variable (augmentation de 1) |
| `--`    | Décrémentation de la variable (diminution de 1)   |

### Opérateurs de comparaison

Les opérateurs de comparaison sont utilisés pour comparer deux valeurs entre elles et retourner un résultat booléen (vrai ou faux). Ils sont essentiels pour les conditions et les structures de contrôle de flux.

| Symbole | Description                          |
| ------- | ------------------------------------ |
| `==`    | Opérateur d'égalité                  |
| `===`   | Opérateur d'identité                 |
| `!=`    | Opérateur de différence              |
| `!==`   | Opérateur de non-identité            |
| `<`     | Opérateur d'infériorité stricte      |
| `<=`    | Opérateur d'infériorité non stricte  |
| `>`     | Opérateur de supériorité stricte     |
| `>=`    | Opérateur de supériorité non stricte |

### Opérateurs logiques

Les opérateurs logiques sont utilisés pour combiner des expressions booléennes ou pour inverser leur valeur. Ils permettent de vérifier la validité de plusieurs conditions en même temps.

| Symbole | Description             |
| ------- | ----------------------- |
| `\|\|`  | Opérateur logique "OU"  |
| `&&`    | Opérateur logique "ET"  |
| `!`     | Opérateur logique "NON" |

## Structures de contrôle

Les structures de contrôle (ou structures conditionnelles) sont des blocs qui permettent de tester des conditions et de diriger l'exécution du programme en fonction du résultat de ces tests.

### if ... else

Cette structure permet de tester une condition avant d'exécuter un bloc de code. Si la condition est vraie, le premier bloc de code est exécuté, sinon, le deuxième bloc de code (celui du else) est exécuté.

```js
let age = 25;

// si j'ai plus de 18 ans ou 18 juste //
if (age >= 18) {
  console.log("Vous êtes majeur.");
}
// sinon ... //
else {
  console.log("Vous êtes mineur.");
}
```

```js
let note = 13;

// si ma note est supérieure ou égale à 15 //
if (note >= 15) {
  console.log("Excellent");
}
// sinon si elle est supérieure ou égale à 10 //
else if (note >= 10) {
  console.log("Bon");
}
// dans tous les autres cas ... //
else {
  console.log("Insuffisant");
}
```

### Opérateur ternaire

L'opérateur ternaire est une version abrégée de la structure if...else. Il est souvent utilisé pour retourner une valeur booléenne ou pour effectuer des affectations conditionnelles simples.

```js
condition ? valeur_si_vrai : valeur_si_faux;
```

```js
let age = 25;
let statut = age >= 18 ? "Vous êtes majeur." : "Vous êtes mineur.";
```

### switch ... case

La structure switch permet de tester plusieurs cas possibles pour une même variable. C’est une alternative plus claire et plus concise à une série de if...else if imbriqués.

```js
let jour = 3;

// on test la valeur de "jour" //
switch (jour) {
  // si jour === 1 //
  case 1:
    console.log("Lundi");
    // permet de na pas lire les instructions suivantes, cf "break" un peu plus bas //
    break;
  // si jour === 2 //
  case 2:
    console.log("Mardi");
    break;
  // etc ... //
  case 3:
    console.log("Mercredi");
    break;
  case 4:
    console.log("Jeudi");
    break;
  case 5:
    console.log("Vendredi");
    break;
  // si jour à une valeur imprévue, on met en place un comportement par défaut //
  default:
    console.log("Week-end");
}
```

### Boucle for

La structure for permet d’exécuter un même bloc d'instructions plusieurs fois, tout en ayant la possibilité de contrôler le nombre d'itérations à l’aide d’un compteur, d’une valeur finale et d’un pas d'incrémentation.

```js
// pour chaque "index" en commençant à 0, en finissant à 10 (non compris) et en incrémentant mon index de 1 à chaque itération //
for (let index = 0; index < 10; index++) {
  console.log(index);
}
```

### Boucle while

La structure while permet également de répéter un bloc de code tant qu'une condition est vraie. La différence avec la boucle for est qu'ici, la condition est testée avant chaque itération, et le compteur n’est pas implicitement géré par la structure.

```js
// ne pas oublier de créer un compteur lors de l'utilisation de while //
let index = 0;

// tant que index est inferieur à 5 ... //
while (index < 5) {
  console.log(index);
  // on n'oublie pas non plus d'incrémenter notre index à l'interieur de la boucle pour éviter les boucles infinies //
  i++;
}
```

### Boucle do ... while

L'instruction do...while crée une boucle qui exécute une instruction jusqu'à ce qu'une condition de test ne soit plus vérifiée. La condition est testée après que l'instruction soit exécutée, le bloc d'instructions défini dans la boucle est donc exécuté au moins une fois.

```js
let resultat = "";
let index = 0;

// exécute ce code ... //
do {
  index++;
  result += index;
} while (
  // ... tant que index est inferieur à 5 //
  index < 5
);

// affiche "12345" //
console.log(result);
```

### Mot clef break

L'instruction break permet d’interrompre immédiatement une boucle ou une structure de contrôle, même si la condition n’a pas encore été remplie. Elle est souvent utilisée pour sortir prématurément d’une boucle for ou while.

```js
for (let index = 0; index < 10; index++) {
  if (index === 5) {
    // si mon index est egale à 5, je sort de la boucle en cours sans attendre d'atteindre la valeure maximale //
    break;
  }

  console.log(index);
}
```

### Mot clef continue

L’instruction continue permet de sauter l’itération courante d’une boucle et de passer directement à l’itération suivante, sans exécuter le reste du code dans le bloc de la boucle pour l’itération en cours.

```js
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    // ici, je saute l'affichage des nombres paires //
    continue;
  }

  console.log(i);
}
```

## LES FONCTIONS

### Définition

Une fonction est un bloc de code réutilisable qui peut être appelé à plusieurs reprises au sein d'un programme. Elle permet d'effectuer une tâche spécifique et de retourner un résultat, en fonction des arguments qu'on lui fournit. En JavaScript, les fonctions sont des objets de première classe, ce qui signifie qu'elles peuvent être affectées à des variables, passées en argument et retournées par d'autres fonctions.

### Déclaration

La déclaration d'une fonction permet de définir son comportement. Il existe deux manières principales de déclarer une fonction en JavaScript : la déclaration classique (ou fonction nommée) et l'expression de fonction.

- Déclaration classique
  Une fonction est déclarée en utilisant le mot-clé function, suivi du nom de la fonction, des paramètres entre parenthèses, puis du bloc d'instructions entre accolades.

```js
function addition(a, b) {
  return a + b;
}

// affiche 7 //
console.log(addition(3, 4));
```

- Expression de fonction
  Une fonction peut aussi être définie de manière anonyme et assignée à une variable. Cela est souvent utilisé pour les fonctions temporaires ou lorsqu'elles sont passées en argument.

```js
const multiplication = function (a, b) {
  return a * b;
};

// affiche 12 //
console.log(multiplication(3, 4));
```

### Arguments

Les arguments d'une fonction sont des valeurs passées à la fonction au moment de son appel. Les fonctions en JavaScript sont faiblement typées, ce qui signifie que les arguments peuvent être de n'importe quel type, et ces types peuvent changer à l'exécution. En outre, JavaScript permet de passer un nombre variable d'arguments à une fonction.

- Arguments positionnels : Ils sont définis dans la déclaration de la fonction.

```js
function soustraction(a, b) {
  return a - b;
}

// affiche 5 //
console.log(soustraction(10, 5));
```

- Arguments rest (...args) : Si une fonction prend un nombre variable d'arguments, on peut utiliser le paramètre rest pour récupérer tous les arguments sous forme de tableau.

```js
function additionMultiple(...args) {
  // j'initialise mon total à 0 //
  let total = 0;

  // pour chaque argument envoyé dans la fonction ... //
  for (const arg of args) {
    // je l'ajoute à mon total //
    total += arg;
  }

  return total;
}

// affiche 10 //
console.log(additionMultiple(1, 2, 3, 4));
```

### Valeur de retour

Une fonction peut retourner une valeur en utilisant le mot-clé return. Lorsque l'exécution atteint une instruction return, la fonction s'arrête immédiatement et retourne la valeur spécifiée. Si aucune valeur n'est retournée, la fonction retourne undefined par défaut.

```js
function carre(x) {
  return x * x;
}

// affiche 25 //
console.log(carre(5));
```

Si la fonction ne contient pas de return, elle retourne implicitement undefined.

```js
function afficherMessage(message) {
  console.log(message);
}

const result = afficherMessage("Bonjour");

// affiche undefined //
console.log(result);
```

### Portée (scope)

La portée d'une fonction définit l'accessibilité des variables à l'intérieur de cette fonction. JavaScript utilise des portées locales (au sein de la fonction) et globales (à l'extérieur de toute fonction). Cela signifie que les variables définies à l'intérieur d'une fonction ne sont accessibles qu'à l'intérieur de cette fonction, à moins qu'elles ne soient explicitement retournées ou accessibles par d'autres moyens (comme via des closures).

- Portée locale : Une variable déclarée dans une fonction est uniquement accessible dans cette fonction.

```js
function calculer() {
  // la variable x est locale à la fonction //
  let x = 10;
  return x;
}

// affiche 10 (la valeur est retournée) //
console.log(calculer());

// Erreur, x n'est pas définie à l'exterieur de la fonction //
console.log(x);
```

- Portée globale : Les variables définies en dehors de toute fonction sont accessibles partout dans le code.

```js
// la variable y est accessible depuis tout le programme //
let y = 20;

function afficherY() {
  // on peut donc y accéder depuis l'interieur d'une fonction //
  console.log(y);
}

// aff  iche 20 //
afficherY();

// et depuis l'exterieur bien entendu //
console.log(y);
```

### Fonctions anonymes

Les fonctions anonymes sont des fonctions sans nom, généralement utilisées comme expressions de fonction ou passées en argument à d'autres fonctions (callback). Elles sont souvent utilisées dans des contextes temporaires ou lorsque la fonction ne sera appelée qu'une seule fois.

```js
// la fonction ne sera appelée que dans le context du timeout, inutile de la nommer //
setTimeout(function () {
  console.log("Ceci est une fonction anonyme.");
}, 1000);
```

### Fonctions fléchées

Les fonctions fléchées sont une syntaxe plus concise pour déclarer des fonctions. Elles ont également des particularités de comportement, notamment concernant la gestion de la portée du mot-clé this. Elles sont souvent utilisées dans des expressions de fonction courtes, notamment pour des callbacks.

```js
const addition = (a, b) => a + b;
```

```js
const somme = (a, b) => {
  return a + b;
};

// affiche 8 //
console.log(somme(3, 5));
```

```js
setTimeout(
  () => console.log("Ceci est une fonction anonyme et fléchée."),
  1000
);
```

Les fonctions fléchées ne possèdent pas leur propre contexte pour le mot-clé this, elles héritent de celui de leur environnement lexical, ce qui les rend utiles dans des situations où le comportement classique du this pose problème, notamment dans des callbacks.
