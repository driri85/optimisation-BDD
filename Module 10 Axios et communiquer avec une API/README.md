# Module 10 - Communiquer avec une API

- Lire un/des enregistrement(s) avec la méthode **GET**  
- Ajouter un enregistrement avec la méthode **POST**  
- Modifier un enregistrement avec la méthode **PUT**  
- Modifier un enregistrement avec la méthode **PATCH**  
- Enlever un enregistrement avec la méthode **DELETE**  

# 1 - Mise en place de Axios
![axios](Axios.webp)  
https://axios-http.com/docs/intro


## le CDN de axios
```html
<script 
src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.7.7/axios.min.js" 
integrity="sha512-DdX/YwF5e41Ok+AI81HI8f5/5UsoxCVT9GKYZRIzpLxb8Twz4ZwPPX+jQMwMhNQ9b5+zDEefc+dcvQoPWGNZ3g==" 
crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

## Définir l'url de l'API
```js
const dbFire = 'https://alpha-javascript-default-rtdb.europe-west1.firebasedatabase.app/';
const noeud = 'films';
```

## 11 - Axios & GET  Lires les enregistrements
```js
axios.get(url)
```
```js
const url = `${dbFire}${noeud}.json`;
const response = await axios.get(url);
console.log(response.data);
```

## 12 - Axios & POST  Ajouter un enregistrement
```js
axios.post(url, objet)
```
```js
const url = `${dbFire}${noeud}.json`;
const film = { name: "The Matrix", year: "1999" };
const response = await axios.post(url, film);
console.log(response.data);
```
## 13 - Axios & PUT   Modifier un enregistrement
```js
axios.put(url, objet)
```
On vient modifier tout l'objet / tous les attributs  
```js
const id = "-OB5neA070M-9UiT_0bZ";
const url = `${dbFire}${noeud}/${id}.json`;
const film = { name: "STAR WARS", year: "1977" };
const response = await axios.put(url, film);
console.log(response.data);
```
## 14 - Axios & PATCH   Modifier un enregistrement
On vient modifier certains attributs  
```js
axios.patch(url, objet)
```
```js
const id = "-OB5neA070M-9UiT_0bZ";
const url = `${dbFire}${noeud}/${id}.json`;
const film = { year: "1901" };
const response = await axios.patch(url, film);
console.log(response.data);
```
## 15 - Axios & DELETE   Modifier un enregistrement
```js
axios.delete(url)
```
```js
const id = "-OB5neA070M-9UiT_0bZ";
const url = `${dbFire}${noeud}/${id}.json`;
const response = await axios.delete(url);
console.log(response.data);
```
    

## 16 - Axios & Comment gérer les erreures ?
```js
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

# 2 - Fetch
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
## 21 - Fetch & GET  Lires les enregistrements
```js
fetch(url)
```
```js
const url = `${dbFire}${noeud}.json`;
const response = await fetch(url);
const info = await response.json();
console.log(info);
```

## 22 - Fetch & POST  Ajouter un enregistrement
```js
fetch(url,params)
```
```js
const url = `${dbFire}${noeud}.json`;
const film = { name: "The Matrix", year: "1999" };
const response = await fetch(url, {
    method: "POST",
    headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    },
    body: JSON.stringify(film),
});
const info = await response.json();
console.log(info);
```


## 23 - Fetch & PUT   Modifier un enregistrement
```js
fetch(url,params)
```
```js
const id = "-OB61hz-EJ8b3Ig7KrdG";
const url = `${dbFire}${noeud}/${id}.json`;
const film = { name: "STAR WARS", year: "1977" };
const response = await fetch(url, {
    method: "PUT",
    headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    },
    body: JSON.stringify(film),
});
const info = await response.json();
console.log(info);
```
## 24 - Fetch & PATCH   Modifier un enregistrement
```js
fetch(url,params)
```
```js
const id = "-OB61hz-EJ8b3Ig7KrdG";
const url = `${dbFire}${noeud}/${id}.json`;
const film = { year: "1901" };
const response = await fetch(url, {
    method: "PATCH",
    headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    },
    body: JSON.stringify(film),
});
const info = await response.json();
console.log(info);
```
## 25 - Fetch & DELETE   Modifier un enregistrement
```js
fetch(url,params)
```
```js
const id = "-OB61hz-EJ8b3Ig7KrdG";
const url = `${dbFire}${noeud}/${id}.json`;
const film = { year: "1901" };
const response = await fetch(url, {method: "DELETE"});
const info = await response.json();
console.log(info);
```
# 3 Parcourir un JSON
```js
let data= {
    "id1" :{nom: "PITT", "prenom": "Brad"},
    "id2" :{nom: "CAGE", "prenom": "Nicolas"},
    "id3" :{nom: "JOLIE", "prenom": "Angelina"}
}
```
## 31 - Première possibilité :
```js
for (let attribut in data){
    console.log(attribut); // affiche id1 ... id2
    console.log(attribut[data]); // affiche l'objet : {nom: "JOLIE", "prenom": "Angelina"}
}
```

## 32 - Deuxième possibilité :
```js
Object.keys(data).map( attribut => {
  console.log(attribut) // affiche id1 ... id2
  console.log(data[attribut]); // affiche l'objet : {nom: "JOLIE", "prenom": "Angelina"}
});
```


