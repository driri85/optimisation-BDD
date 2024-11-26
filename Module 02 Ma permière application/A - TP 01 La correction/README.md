# Correction TP 01
![alt text](../../c.webp)  

![alt text](../tp1.webp)  

**HTML :**
```html
<label for="poids">Poids en kg.</label>
<input
    aria-label="Poids"
    class="form-control"
    value="90"
    id="poids"
    placeholder="Poids en kg."
/>

<label for="taille" class="mt-3">Taille en mètre</label>
<input
    value="1.8"
    id="taille"
    aria-label="Taille"
    class="form-control"
    placeholder="taille en m."
/>

<button class="btn btn-success mt-3 col-12" id="btnCalculer">
    <i class="fa-solid fa-weight-scale"></i>
</button>

<div class="alert alert-secondary mt-4" role="alert">
    <h3>IMC : <span id="imc"></span></h3>
    <p><span id="tranche"></span></p>
</div> 
```


**JavaScript :**
```js
document.getElementById('btnCalculer').onclick = function () {
    // lecture des champs input
    let poids = document.getElementById('poids').value;
    let taille = document.getElementById('taille').value;
    // vider les champs input
    document.getElementById('poids').value = '';
    document.getElementById('taille').value = '';
    let imc = poids / (taille * taille);
    // afficher imc;
    document.getElementById('imc').innerHTML = imc.toFixed(1);
    let tranche = '';
    if (imc < 18.5) {
      tranche = 'maigreur';
    } else if (imc < 25) {
      tranche = 'normal';
    } else if (imc < 30) {
      tranche = 'surpoids';
    } else if (imc < 35) {
      tranche = 'obésité';
    } else if (imc < 40) {
      tranche = 'obésité sévère';
    } else if (imc >= 40) {
      tranche = 'obésité morbide';
    }
    document.getElementById('tranche').innerHTML = tranche;
  };
```