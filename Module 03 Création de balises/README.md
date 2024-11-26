# Module 03 - Création de balises HTML (element)

![alt text](m3.webp)
## 1 - Création de balises
```html
<div id="demo"></div>
<button id="btnGo">GO</button>
<script>
document.getElementById('btnGo').onclick = () =>{
    // créer une balise <p></p>
    const p = document.createElement('p'); 
    //<p>Brad PITT</p>
    p.innerHTML = 'Brad PITT';  
    // ajouter une balise dans une autre
    document.getElementById('demo').appendChild(p);
}
</script>
```
### Résultat :
#### Avant :
```html
<div id="demo">
</div>
```
#### Après :
```html
<div id="demo">
    <p>Brad PITT</p>
    <p>Brad PITT</p>
    <p>Brad PITT</p>
</div>
```
## 2 - Ajouter une class à la balise créée
### Ajouter une class
https://www.w3schools.com/howto/howto_js_add_class.asp  
https://developer.mozilla.org/fr/docs/Web/API/Element/classList  
### Ajouter un attribut
https://www.w3schools.com/jsref/met_element_setattribute.asp  
https://developer.mozilla.org/fr/docs/Web/API/Element/setAttribute  
```html
<style>
    .rouge{background-color:tomato}
</style>
<div id="demo"></div>
<button id="btnGo">GO</button>
<script>
document.getElementById('btnGo').onclick = () =>{
    // créer une balise <p></p>
    const p = document.createElement('p'); 
    
    //<p>Brad PITT</p>
    p.innerHTML = 'Brad PITT'; 
    
    // Ajouter un attribut ou une class
    //p.setAttribute('class','rouge'); // autre possiblité 
    p.classList.add("rouge");

    // ajouter une balise dans une autre
    document.getElementById('demo').appendChild(p);
}
</script>
```

### Résultat :
**avant**
```html
<div id="demo">
</div>
```
**après**
```html
<div id="demo">
    <p class="rouge">Brad PITT</p>
    <p class="rouge">Brad PITT</p>
    <p class="rouge">Brad PITT</p>
</div>
```


## 3 - Modifier le css avec l'attribut class
https://www.w3schools.com/jsref/prop_element_classlist.asp
https://developer.mozilla.org/fr/docs/Web/API/Element/classList
```html
<style>
    .rouge{background-color:tomato}
</style>
<div id="demo">test</div>
<button onclick="modifier()"> GO</button>
<script>
function modifier(){
     document.getElementById('demo').classList.add('rouge');
}
</script>
```
### Résultat :
**avant**
```html
<div id="demo">test</div>
```
**après**
```html
<div id="demo" class="rouge">test</div>
```
## 4 - Modifier le css avec toggle
```html
<style>
    .rouge{background-color:tomato}
</style>
<div id="demo">test</div>
<button onclick="modifier()"> GO</button>
<script>
function modifier(){
     document.getElementById('demo').classList.toggle('rouge');
}
</script>
```

### Résultat :
```html
<div id="demo" class="rouge">test</div>
<!-- OU bien : -->
<div id="demo" class="">test</div>
```

## 5 - Enlever une une balise
Avec **remove()**
```html
<button id="btnEnlever">ENLEVER</button>
<div id="demo">TEST</div>
<script>
    document.getElementById('btnEnlever').onclick = (event) =>{
        document.getElementById('demo').remove();
    }
</script>
```
## 6 - Enlever un bouton
Il est possible de mettre le selecteur sur le bouton avec **event.target**
```html
<button id="btnEnlever">ENLEVE moi</button>

<script>
document.getElementById('btnEnlever').onclick = (event) =>{
    const selecteur = event.target;
    selecteur.remove();
    // event.target.remove() // en une ligne
}
</script>
```
## 7 - Enlever plusieurs boutons
Il est possible de mettre une fonction lors de la création de la balise **button**

```html
<button id="btnAjouter">Ajouter</button>
<div id="demo"></div>

<script>
let i=0;
document.getElementById('btnAjouter').onclick = ()=>{
    i++;
    const bouton = document.createElement('button'); // <button><button>
    bouton.innerHTML = 'Effacer '+i;  // <button>Effacer 1<button>
    // modifier le contenu du template 
    bouton.onclick=(event)=>{
        event.target.remove();
    }
    document.getElementById('demo').appendChild(bouton);
}
</script>
```


