# TP Alpha Conso Voiture
**Live preview**  : 
[Tester le TP Alpha](https://www.sevenvalley.fr/tp-javascript/tpa) 


## Partie 1
![alt text](tp-apha-1.webp) 
- créer un formulaire en javascript
- Afficher le résultat

**Par exemple**
pour 50 litres  
j'ai fait 1000 kilomètres  
ma consommation est de 5 litres/100km  

## Partie 2
![alt text](tp-apha-2.webp) 
- enlever le bouton !

A partir de cet exemple :
```html
<input id="titre">
<h1 id="demo"></h1>
<script>
document.getElementById('titre').onkeyup =()=>{
    const titre = document.getElementById('titre').value;
    document.getElementById('demo').innerHTML = titre.toUpperCase();
}
</script>
```