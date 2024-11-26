# TP  01 IMC
  
- Saisir le poids en kg
- Saisir la taille en m
  
imc = poids / (taille*taille)
  
80kg / (1.8m* 1.8m) = 25
  
Si imc < 18.5 je suis en tranche maigreur      
Si 18.5 <imc < 25  je suis en tranche normal  
Si 25 <imc < 30  je suis en tranche surpoids  
Si 30 <imc < 35  je suis en tranche obésité  
Si 35 <imc < 40  je suis en tranche obésité massive    
Si  > 40  je suis en tranche obésité sévère 
  
changer les couleur className en fonction de l'imc
  
Afficher le poids à atteindre
Afficher le nombre de kg à perdre
  
https://fr.wikipedia.org/wiki/Indice_de_masse_corporelle

```jsx
import { useState } from "react";
export default function App() {
  const [info, setInfo] = useState({
    imc:0,
    tranche:''
  });
  const calcul = (e) => {
    e.preventDefault();
    const poids = e.target.poids.value;
    const taille = e.target.taille.value;
    let imc = poids/(taille*taille);
    console.log(imc);
    let tranche = '';
    let couleur='';
    let poids2 = 0;
    let kilo = 0;
    if (imc < 18.5){
      tranche ='maigreur';
      couleur='alert-warning';
      poids2 = (18.5 * taille * taille).toFixed(1);
      kilo = ((poids - poids2)*-1).toFixed(1);

    }else if ( imc <25){
      tranche ='normal';
      couleur='alert-success';
      poids2=0;
    }else if (imc < 30){
      tranche ='surpoids';
      couleur='alert-danger';
      poids2 = (25 * taille * taille).toFixed(1);
      kilo = ((poids2 - poids)).toFixed(1);

    }else if (imc < 35){
      tranche ='obesité';
      couleur='alert-warning';
      poids2 = (25 * taille * taille).toFixed(1);
      kilo = ((poids2 - poids)).toFixed(1);
  }else if (imc < 40){
    tranche ='obesité massive';
    couleur='alert-secondary';
    poids2 = (25 * taille * taille).toFixed(1);
    kilo = ((poids2 - poids)).toFixed(1);
  }else if (imc  > 40){
    tranche ='obesité sévère';
    couleur='alert-dark';
    poids2 = (25 * taille * taille).toFixed(1);
    kilo = ((poids2 - poids)).toFixed(1);
  }
  let info ={};
  info.imc = imc.toFixed(1);
  info.tranche = tranche; 
  info.class = couleur;
  info.poids2 = poids2;
  info.kilo = kilo;
  setInfo(info); // ... parfois spread est necessaire

  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <i className="fa-solid fa-weight-scale me-3"></i>
            Calcul IMC
          </a>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-4 pt-4">
            <h1 className="h3">Calculer votre IMC</h1>
            <form method="post" onSubmit={calcul}>
            <input
              aria-label="Poids"
              name="poids"
              className="form-control"
              placeholder="Poids en kg."
            />

            <input
              aria-label="Taille"
              className="form-control mt-3"
              name="taille"
              placeholder="taille en m."
            />

            <button type="submit" className="btn btn-success my-3 col-12">
              <i className="fa-solid fa-weight-scale"></i>
            </button>
            </form>
            { info.imc > 0 &&
            <div className={`alert  mt-4 ${info.class}`} role="alert">
              <h3>IMC : {info.imc}</h3>
              <p>{info.tranche}</p>
              { info.poids2 > 0  &&
              <span>
              <p>objectif {info.poids2}</p>
              <p>nb kilo {info.kilo}</p>
              </span>}
             
            </div>
            }
            
          </div>
        </div>
      </div>

      <footer className="py-5 bg-dark">
        <div className="container px-4 px-lg-5">
          <p className="m-0 text-center text-white">
            Copyright &copy; Seven Valley 2023
          </p>
        </div>
      </footer>
    </>
  );
}
```