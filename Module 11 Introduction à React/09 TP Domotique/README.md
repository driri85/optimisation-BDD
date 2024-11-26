# TP domotique

- créer Appareil.ts la classe BO Business Object
- créer un tableau d'objets appareils
- créer le component AppareilComponent.jsx
- envoyer les élèments du tableau au component Appareil
- changer la couleur du background
- allumer et Eteindre tous les appareils

# Appareils.ts
```ts
export default class Appareil{
    constructor(public name:string,public status:boolean){
    }
}
```

# App.tsx
```tsx
import { useState } from "react";
import AppareilComponent from "./components/AppareilComponent"
import Appareil from "./models/Appareil.ts"
import "./App.css";

function App() {
  const [appareils,setAppareils]= useState<Appareil[]>([
    {name:'TV',status:true},
    {name:'X-box',status:false},
    {name:'Playstation 3',status:true}
  ]);
  
  const switchAll=(status:boolean):void=>{
    appareils.map(a => a.status =status);
    setAppareils([...appareils]);
  }
  const switchOne=(i:number):void=>{
    appareils[i].status = !appareils[i].status;
    setAppareils([...appareils]);
  }
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <h2>Les Appareils</h2>
          <ul className="list-group">
            {
              appareils.map((a:Appareil,indice:number)=>
                <AppareilComponent 
                  key={indice}
                  a={a}
                  indice ={indice}
                  switchOne={switchOne}
                />
              )
            }

           
          </ul>
          <br />
          <button className="btn btn-success me-3" onClick={()=> switchAll(true)} >ALL ON</button>

          <button className="ml-2 btn btn-danger" onClick={()=> switchAll(false)} >ALL OFF</button>
        </div>
      </div>
    </div>
  );
}

export default App;

```

# AppareilComponent.tsx
```tsx
import Appareil from "../models/Appareil"

interface IpropsAppareil{
    a:Appareil;
    indice:number;
    switchOne:(indice:number)=> void;
}
export default function AppareilComponent(props:IpropsAppareil) {
    return(
        <li className={`list-group-item ${props.a.status ? 'list-group-item-success': 'list-group-item-danger'} `}>
        <h4> {props.a.name} -- {props.a.status ? 'Allumé': 'Eteint'}</h4>
        <button className="btn btn-success me-3" onClick={()=> props.switchOne(props.indice)} >ALL ON</button>

<button className="ml-2 btn btn-danger" onClick={()=> props.switchOne(props.indice)} >ALL OFF</button>

      </li>)
}
```