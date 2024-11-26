
# Personne.ts
```ts
export default class Personne{
    // 3 constructor
    constructor(public prenom?:string,public nom?:string){
    // this.prenom = prenom;
    // this.nom = nom;     
    }
}
```

# App.tsx
```tsx
import PersonneComponent from "./components/PersonneComponent";
import Personne from "./models/Personne.ts"

export default function App() {
 const personnes:Personne[] =[
  {prenom:'Brad',nom:'PITT'},
  {prenom:'Nicolas',nom:'CAGE'}
 ]
 const qui=(indice:number):void=>{
  console.log(indice);
  console.log(personnes[indice]);
 } 
  return (
    <>
    { personnes.map((p:Personne,indice:number)=> <PersonneComponent 
    key={indice}
    p={p}
    indice={indice}
    qui={qui}
    />)}
   
   
    </>

  )
}
```

# PersonneComponent.tsx
```tsx
import Personne from "../models/Personne";

interface IpropsPersonne{
    p:Personne;
    indice:number;
    qui:(indice:number)=> void;
}


export default function PersonneComponent(props:IpropsPersonne){
    return (
        <>
        <h1>Je suis {props.p.prenom} {props.p.nom}</h1>
        <button onClick={()=> props.qui(props.indice)}>Qui ?</button>
        </>
    );
}
```