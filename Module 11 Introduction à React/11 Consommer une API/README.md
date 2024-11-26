# Exemple OmdbAPI et fetc
```jsx
import { useState } from "react";

export default function App() {
 const [image,setImage] = useState('') ;
 
 const afficher1 =async ()=>{
  const key:string = 'efdc2275';
  const nom:string = 'Star Wars'
  const url:string = `http://www.omdbapi.com/?apikey=${key}&t=${nom}`; 
  const response = await fetch(url);
  const film = await response.json();
  console.log(film);
  setImage(film.Poster)
 }

 const afficher2 =async ()=>{
  const key:string = 'efdc2275';
  const nom:string = 'Star Wars'
  const url:string = `http://www.omdbapi.com/?apikey=${key}&s=${nom}`; 
  const response = await fetch(url);
  const films = await response.json();
  console.log(films);
 }
 
 const afficher3 =async ()=>{
  const key:string = 'efdc2275';
  const url:string = `http://www.omdbapi.com/?apikey=${key}&i=tt0080684`; 
  const response = await fetch(url);
  const film = await response.json();
  console.log(film);
 }
  return (
    <>
      <button onClick={afficher1}> Afficher Star Wars</button>
      {image && <img src={image} alt="st" />}
      <br />
      <button onClick={afficher2}> liste Star Wars</button>
      <br />
      <button onClick={afficher3}> Film avec ID</button>
    </>
  )
}



```

# objectif 
- afficher des series dans le moteur de recherches
- ajouter une série à la liste ( à droite) de favoris
- création Component TrFav.jsx et TrSearch.jsx

# Emmet
table>thead>tr>th*3 
tbody>tr*3>td*3 