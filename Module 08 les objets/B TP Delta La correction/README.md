# TP Delta Domotique CORRECTION
![alt text](../../c.webp)  

**live preview** :  
[Tester le TP Delta](https://www.sevenvalley.fr/tp-javascript/tpd) 

![alt text](tpd.webp)

## HTML
```html
  <template id="myLi">
    <li class="list-group-item">
      <h4></h4>
      <button class="btn btn-success">ON</button>
      <button class="ml-2 btn btn-danger">OFF</button>
    </li>
  </template>
  <script src="delta.js"></script>
</body>
```

## JAVASCRIPT
```js
//-----------------------------------------------
// Classe Appareil
class Appareil {
  constructor(name){
    this.name = name
    this.status= false
  }
}
//-----------------------------------------------
// btnSwitchAllOn
let appareils = []

const afficherHTML = () => {
  const ul = document.querySelector(".list-group")
  // vider la liste  <ul>
  ul.innerHTML = ""
  let i=0
  for (let a of appareils) {
    const template = document.getElementById("myLi")
    // cloner le template
    const clone = template.content.cloneNode(true)
    // querySelectorAll retourne 1 tableau
    const li = clone.querySelector("li")
    li.setAttribute('data-indice',i)
    // VIVE le if ternaire !!!
    a.status
      ? li.classList.add("list-group-item-success")
      : li.classList.add("list-group-item-danger")

    let h4 = clone.querySelector("h4")
    h4.innerText = a.name
    btnEnlever = clone.querySelector(".btn-danger")
    btnEnlever.onclick = (evt) => {
      const i = evt.target.closest("li").dataset.indice
      appareils[i].status = false
      afficherHTML()
    }
    btnModifier = clone.querySelector(".btn-success")
    btnModifier.onclick = (evt) => {
      const i = evt.target.closest("li").dataset.indice
      appareils[i].status = true
      afficherHTML()
    }
    ul.appendChild(clone)
    i++
  } // for
}

document.getElementById("btnAjouter").onclick = () => {
  let nom = document.getElementById("appareil").value
  document.getElementById("appareil").value = "" // vider input

  const  a = new Appareil(nom)
  appareils.push(a)
  afficherHTML()
}
document.getElementById("btnSwitchAllOn").onclick = () => {
  console.log('a');
  appareils.map(a=> a.status=true)
  afficherHTML()
}
document.getElementById("btnSwitchAllOff").onclick = () => {
  appareils.map(a=> a.status=false)
  afficherHTML()
}


```