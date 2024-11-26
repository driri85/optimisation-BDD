# Module 09 - Interroger une API avec Fetch
![alt text](m9.webp)

# 1 - Présentation des fonctions asynchrone
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/async_function  
  
Avec <code>async</code> et <code>await</code>  
- Une fonction synchrone **async** peut contenir une expression **await** qui interrompt l'exécution de la fonction asynchrone et attend la résolution de la promesse passée Promise.  
La fonction asynchrone reprend ensuite puis renvoie la valeur de résolution.
  
- Le mot-clé **await** est uniquement valide au sein des fonctions asynchrones.  

```js
const go = async ()=>{
    const response = await fetch("https://swapi.dev/api/people/1");
    // on récupère la partie JSON de la response
    const data = await response.json(); 
    console.log(data);
}
go();
```
A chaque fois que je crée une fonction avec <code>await</code>, je préfixe la fonction <code>async</code>
```html
<button id="btnSWAPI">Démo API Basic</button> <br /><br />
<script>
const getPersonne =async(id)=>{
  const response = await fetch("https://swapi.dev/api/people/"+id);
  const data = await response.json();
  return data;
}
document.getElementById("btnSWAPI").onclick = async () => {
  const personne = await getPersonne(1);
  console.log(personne);
};
</script>
```

## 12 Les promesses
Attendre  5 secondes  
**setTimeout** https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout
```js
setTimeout({console.log ('ok')},5000);
```
  
Une Promise est un objet qui va prendre un certain temps pour se résoudre ou rejeter.
```js
const  repondApresDeuxSeconde= () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('ok');
    }, 2000);
  });
}

const go= async()=> {
  const result = await repondApresDeuxSeconde();
  console.log(result); // affiche : ok
}

go();
```
Mise en place du **then** si besoin
```js
<script>
const  repondApresDeuxSeconde= () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('ok');
    }, 2000);
  });
}

const go= async()=> {
  repondApresDeuxSeconde().then (info => {console.log(info)});
}

go();

</script>
```

Avant on utiliser **then** avec Fetch  
Maintenant on préconise **await**
```js
const response =  fetch('https://swapi.dev/api/people/1')
.then(response => response.json() )
.then(data => console.log(data));
```
# 2 - Présentation du ${} Template literals 
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Template_literals  
**Template literals** : Les littéraux de gabarits  
Plutôt que la concaténation 
On utilise **${}**
```js
const age =18;
console.log (`Votre age ${age}`);
// avec un if ternaire
console.log (`Votre age ${age} statut :${age >= 18? 'ok':'interdit'}`);
```

# 4 - Utilisation de Fetch
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
```js
const response = await fetch("https://swapi.dev/api/people/1");
// on récupère la partie JSON de la response
const data = await response.json(); 
console.log(data);
```

# 5 - Gestion des erreures avec try catch
```js
const getData= async () => {
  const url = "https://example.org/products.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}
```

# 6 - Lecture d'un film avec omdbAPI
Utiliser **t=...** **t=star wars** Le titre du film
```js
const key = "efdc2275";
const url = `http://www.omdbapi.com/?apikey=${key}`;
 
const nom = "Star Wars";
const url2 = `${url}&t=${nom}`; // t= pour récupérer 1 film
const response = await fetch(url2);
const film = await response.json();
console.log(film);
```  

# 7 - Lecture d'un film avec omdbAPI
Utiliser **i=...** **i=tt0080684** L'ID du film **ImdbID**
```js
const key = "efdc2275";
const url = `http://www.omdbapi.com/?apikey=${key}`;
 
const imdbID = 'tt0080684';
const url2 = `${url}&i=${imdbID}`; // t= pour récupérer 1 film
const response = await fetch(url2);
const film = await response.json();
console.log(film);
```  

# 8 - Afficher les 10 premier films avec  s=star wars
Utiliser **s=...** **s=star wars**
```js
const key = "efdc2275";
const url = `http://www.omdbapi.com/?apikey=${key}`;

const nom = "Star Wars";
const imdbID = 'tt0080684';
const url2 = `${url}&s=${nom}`; // s= pour récupérer 10 films
const response = await fetch(url2);
const film = await response.json();
console.log(film);
```  