import './App.css'
import {useState} from 'react';
function App() {
  //let message = 'debut'; // NE MARCHE PAS
  // nom + le setter la fonction qui modifie message
  const [message,setMessage]= useState('');
  const [valeur,setValeur]= useState('');


  const affiche = (e) => {
    e.preventDefault(); // empeche d'appeler une autre page
    const prenom = e.target.prenom.value;
    const nom = e.target.nom.value;

    console.log(prenom);
    console.log(nom);
    //e.target.prenom.value=''
    e.target.reset(); // vider les champs input
   // message = prenom + ' ' + nom; NE MARCHE PAS
   setMessage( prenom + ' ' + nom);
  }
  return (
    <>
      <form method="post" onSubmit={affiche} >
        <input name="prenom" className="test" placeholder="Prénom" />
        <br /><br />
        <input name="nom" placeholder="Nom" />
        <button type="submit">GO</button>
      </form>
      <h2>{message}</h2>
    </>

  )
}

export default App
