# Correction

## Partie 1
```html
<input id="litre" placeholder="Litres" value="50">
<br><br>
<input id="km" placeholder="Kilomètres" value="1000">
<br><br>
<button onclick="calcul()">GO</button>
<h1 id="conso"></h1>
<h2 id ="conseil"></h2>
<script src="tp-alpha-1.js"></script>
```

le code js
```js
function calcul(){
    // lire le dom
    const km = document.getElementById('km').value
    const litre = document.getElementById('litre').value
    document.getElementById('km').value =''
    document.getElementById('litre').value=''
    const conso = (litre *100)/km
    // afficher dans le DOM
    document.getElementById('conso').innerHTML=conso.toFixed(1) + 'l/100km'
    let tranche =''
    if ( conso <7){
        tranche = 'normal'
    }else if (conso < 9){// 7 <conso< 9
        tranche ='gourmand'
    } else{
        tranche='SUV de luxe'
    }
    document.getElementById('conseil').innerHTML =tranche;
}
```