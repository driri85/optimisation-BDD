# Module 06 - Utiliser le template
![alt text](m5.webp) 

Plutot que de créer des balises,  
Utiliser un **template** va plus vite!  
Nous allons alors le clonner  
  
https://developer.mozilla.org/fr/docs/Web/HTML/Element/template
  
# 1 - Création du template
Nous allons le mettre juste avant la fermeture de la balise **body**
```html
    <!-- [...] -->
    <button id="btnAjouter">Ajouter</button>
    <div id="demo"></div>
    
    <!-- [...] -->
    <template id="info">
        <div>Test</div>
    </template>
</body>

<script>
document.getElementById('btnAjouter').onclick = ()=>{
    // mettre un selecteur sur le template
    const template = document.getElementById('info');
    // cloner le template
    const clone = template.content.cloneNode(true);
    // ajouter le template cloner dans un autre balise
    document.getElementById('demo').appendChild(clone);  
}
</script>
```

# 2 - Deux nouveaux Selecteurs
:one: Le <code>querySelector</code> slectionne 1 seule element ( 1 seule balise)
```js

document.getElementById('demo').innerHTML = 'ola';
// la même avec un selecteur CSS
document.querySelector('#demo').innerHTML ='ola';

// autre possiblité de sélecteurs CSS
document.querySelector('p').innerHTML ='hi';
document.querySelector('.rouge').innerHTML ='hello';

```
:two: Le <code>querySelectorAll</code> slectionne un tableau   
```html
<p>rouge</p>
<p>vert</p>
<p>bleu</p>
<script>
    document.querySelectorAll('p')[0].innerHTML = 'Brad';
    document.querySelectorAll('p')[1].innerHTML = 'Tom';
</script>   
```
Résultat HTML :  
**avant**  
```html
<p>rouge</p>
<p>vert</p>
<p>bleu</p>
```
**après**
```html
<p>Brad</p>
<p>Tom</p>
<p>bleu</p>
```
# 3 - Modifier le contenu du template
Avec le sélecteur <code>querySelector</code>  
Selectionner une balise  
ou **la première trouvée**  
```html
<button id="btnAjouter">Ajouter</button>
<div id="demo"></div>

<template id="info">
    <div>
        <p>Test<p>
    </div>
</template>

<script>
document.getElementById('btnAjouter').onclick = ()=>{
    // mettre un selecteur sur le template
    const template = document.getElementById('info');
    // cloner le template
    const clone = template.content.cloneNode(true);
    // modifier le contenu du template
    clone.querySelector('p').innerHTML = 'Brad PITT';
    // ajouter le template cloner dans un autre balise
    document.getElementById('demo').appendChild(clone);  
}
</script>
```

# 4 - Modifier plusieurs Balises dans le template
Avec le sélecteur <code>querySelectorAll</code>
```html
<button id="btnAjouter">Ajouter</button>
<div id="demo"></div>

<template id="info">
    <div>
        <p>rouge<p>
        <p>vert<p>
    </div>
</template>

<script>
document.getElementById('btnAjouter').onclick = ()=>{
    // mettre un selecteur sur le template
    const template = document.getElementById('info');
    // cloner le template
    const clone = template.content.cloneNode(true);
    // modifier le contenu du template
    clone.querySelectorAll('p')[0].innerHTML = 'un';
    clone.querySelectorAll('p')[1].innerHTML = 'deux';
    // ajouter le template cloner dans un autre balise
    document.getElementById('demo').appendChild(clone);  
}
</script>
```

# 5 - Mettre un bouton dans le Template
```html
<button id="btnAjouter">Ajouter</button>
<div id="demo"></div>

<template id="info">
    <button>Effacer</button>
</template>

<script>
let i=0;
document.getElementById('btnAjouter').onclick = ()=>{
    i++;
    // mettre un selecteur sur le template
    const template = document.getElementById('info');
    // cloner le template
    const clone = template.content.cloneNode(true);
    clone.querySelector('button').innerHTML = 'Effacer '+i
    // modifier le contenu du template
    clone.querySelector('button').onclick =(event)=>{
       console.log(event.target.innerHTML)
    };

    // ajouter le template cloner dans un autre balise
    document.getElementById('demo').appendChild(clone);  
}
</script>
```

# 6 - Créer  boutons avec plusieurs actions
Quand je clique sur chaque bouton : il s'efface
```html
<button id="btnAjouter">Ajouter</button>
<div id="demo"></div>

<template id="info">
    <button>Effacer</button>
</template>

<script>
let i=0;
document.getElementById('btnAjouter').onclick = ()=>{
    i++;
    // mettre un selecteur sur le template
    const template = document.getElementById('info');
    // cloner le template
    const clone = template.content.cloneNode(true);
    clone.querySelector('button').innerHTML = 'Effacer '+i
    // modifier le contenu du template
    clone.querySelector('button').onclick =(event)=>{
         event.target.closest('div').remove();
    };

    // ajouter le template cloner dans un autre balise
    document.getElementById('demo').appendChild(clone);  
}
</script>
```