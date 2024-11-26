document.getElementById('btnCalculer').onclick = function () {
  const resultat = document.getElementById('resultat'); // Le selecteur

  const div = document.createElement('div');
  div.classList.add('alert');
  div.classList.add('my-3');

  // lecture des champs input
  const poids = document.getElementById('poids').value;
  const taille = document.getElementById('taille').value;
  // vider les champs input
  document.getElementById('poids').value = '';
  document.getElementById('taille').value = '';
  const imc = poids / (taille * taille);
  if (imc < 18.5) {
    let poids2 = 18.5 * taille * taille;
    let poidsObjectif = poids2 - poids;
    conseil = 'Objectif : '+ poids2.toFixed(1)+'kg (+' + poidsObjectif.toFixed(1) + ' kg)';
  } else if (imc < 25) {
    conseil = 'Ne changez rien';
  } else {
    let poids2 = 25 * taille * taille;
    let poidsObjectif = poids - poids2;
    conseil = 'Objectif : '+ poids2.toFixed(1)+'kg (-' + poidsObjectif.toFixed(1) + ' kg)';
  }
  let tranche = '';
  if (imc < 18.5) {
    tranche = 'maigreur';
    div.classList.add('alert-danger');
  } else if (imc < 25) {
    tranche = 'normal';
    div.classList.add('alert-success');
  } else if (imc < 30) {
    tranche = 'surpoids';
    div.classList.add('alert-warning');
  } else if (imc < 35) {
    tranche = 'obésité';
    div.classList.add('alert-danger');
  } else if (imc < 40) {
    tranche = 'obésité sévère';
    div.classList.add('alert-secondary');
  } else if (imc >= 40) {
    tranche = 'obésité morbide';
    div.classList.add('alert-primary');
  }
  const div1 = document.createElement('div');
  div1.innerHTML = 'IMC : ' + imc.toFixed(1);
  div.appendChild(div1);

  const div2 = document.createElement('div');
  div2.innerHTML =  tranche;
  div.appendChild(div2);

  const div3 = document.createElement('div');
  div3.innerHTML = conseil;
  div.appendChild(div3);

  resultat.innerHTML = ''; // je vide la balise
  resultat.appendChild(div);
};
