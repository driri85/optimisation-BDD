# Module 04 - Création de balises HTML (element)
![alt text](m4-t.webp)

## 1 - Enlever une une balise
<code>remove()</code> permet d'enlever une balise
```html
<button id="btnEnlever">ENLEVER</button>
<div id="demo">TEST</div>
<script>
    document.getElementById('btnEnlever').onclick = (event) =>{
        document.getElementById('demo').remove();
    }
</script>
```
## 2 - Enlever un bouton
<code>.event.target</code> met le sélecteur sur le boutton

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

## 3 - Enlever plusieurs boutons
<code>bouton.onclick=</code> Il est possible de mettre une fonction lors de la création de la balise **button**  


```html
<button id="btnAjouter">Ajouter</button>
<div id="demo"></div>

<script>
let i=0;
document.getElementById('btnAjouter').onclick = ()=>{
    i++;
    const bouton = document.createElement('button'); // <button><button>
    bouton.innerHTML = 'Effacer '+i;  // <button>Effacer 1<button>
    
    bouton.onclick=(event)=>{
        event.target.remove();
    }
    document.getElementById('demo').appendChild(bouton);
}
</script>
```

## 4 - Naviguez dans le dom 
- <code>parentElement</code> : Permet de naviguez dans le DOM.  
 1 - premier <code>.parentElement</code> je remonte au <code>td</code>    
 2 - deuxième <code>.parentElement</code> je remonte au <code>tr</code>    
  
```html
<button id="btnAjouter">Ajouter</button>
<table>
    <tbody>
        <tr>
            <td> John</td>
            <td><button id="btnEnlever">Enlever</button></td>
        </tr>
    </tbody>
</table>

<script>
document.getElementById('btnEnlever').onclick = (event)=>{
    const tr = event.target.parentElement.parentElement;
    tr.remove();
}
</script>
```

## 5 - Naviguez dans le dom
- <code>closest()</code> : Permet de naviguez dans le DOM.  
Avec  <code>closest()</code> il est possible de remonter de plusieurs balises  
  
```html
<button id="btnAjouter">Ajouter</button>
<table>
    <tbody>
        <tr>
            <td> John</td>
            <td><button id="btnEnlever">Enlever</button></td>
        </tr>
    </tbody>
</table>

<script>
document.getElementById('btnEnlever').onclick = (event)=>{
    const tr = event.target.closest('tr');
    tr.remove();
}
</script>
```
