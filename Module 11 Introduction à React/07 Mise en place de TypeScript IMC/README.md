# Mise en place de Type Script
```jsx
import './App.css'
import {useState} from 'react';

interface Info{
  imc:string;
  tranche:string;
  conseil:string;
}

export default function App() {
  
  const [valeur,setValeur]= useState<Info>({
    imc:'',
    tranche:'',
    conseil:''
  });


  const calcul = (e:React.ChangeEvent<HTMLInputElement> ) => {
    e.preventDefault(); // empeche d'appeler une autre page
   let info:Info={
    imc:'',
    tranche:'',
    conseil:''
  };
    const poids = e.target.poids.value;
    const taille = e.target.taille.value;
    e.target.reset(); // vider les champs input
    const imc = parseFloat(poids)/ (parseFloat(taille)* parseFloat(taille));
    info.imc = imc.toFixed(1);
    //let tranche ='';
    if (imc < 18.5){
      info.tranche ='maigreur';
      let poids = 18.5 * parseFloat(taille) * parseFloat(taille);
      info.conseil = "objectif poids :"+poids.toFixed(1);
    }else if( imc < 25){
      // 18.5 < imc < 25
      info.tranche ='normal';
    }else if( imc < 30){
      info.tranche ='surpoids';
      let poids = 25 * parseFloat(taille) * parseFloat(taille);
      info.conseil = "objectif poids :"+poids.toFixed(1);
    }else if( imc < 35){
      info.tranche ='obesité';
      let poids = 25 * parseFloat(taille) * parseFloat(taille);
      info.conseil = "objectif poids :"+poids.toFixed(1);
    } else if( imc < 40){
      let poids = 25 * parseFloat(taille) * parseFloat(taille);
      info.conseil = "objectif poids :"+poids.toFixed(1);
      info.tranche ='obesité sévère';
    } else {
      let poids = 25 * parseFloat(taille) * parseFloat(taille);
      info.conseil = "objectif poids :"+poids.toFixed(1);
      info.tranche ='obesité massive';
    }
    setValeur(info);
    
  }
  return (
    <div className="container">
      <div className="col-4"> 
      <h1>Calcul</h1>
      <form method="post" onSubmit={calcul} >
        <input name="poids" className="form-control"  placeholder="Poids en kg" />
        <br /><br />
        <input name="taille"  className="form-control" placeholder="Taille en m." />
        <br /><br />
        <button type="submit" className="btn btn-success">
        <i className="fa-solid fa-calculator"></i>
        </button>
      </form>
      
      { valeur.imc>0 &&
      <div>
        <h2>Votre imc : {valeur.imc}</h2>
        <h2>{valeur.tranche}</h2>
        <h2>{valeur.conseil}</h2>
      </div>
      }
      </div>
      </div>

  )
}
```