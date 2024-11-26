//-----------------------------------------------
function melanger(tab) {
  let tab2 = [];
  for (let i = 0; i < tab.length; i++) {
    do {
      // je genere un nb alea de 0 à taille du tableau
      x = Math.floor(Math.random() * tab.length);
    } while (tab2[x] != undefined);
    // tant que l'emplacement n'est pas vide
    tab2[x] = tab[i];
  }
  return tab2;
}
//-----------------------------------------------

// au démarrage ...
// <div><img src="./img/1.webp"  width="80"></div>

let tableau42 = [];
for (let i = 0; i < 42; i++) {
  tableau42.push(i);
}
tableau42 = melanger(tableau42);
let tab16 = tableau42.slice(0, 16);
let tab32 = tab16.concat(tab16);
tab32 = melanger(tab32);
const depot = document.querySelector(".container");
// afficher les 32 premières
for (let tuile of tab32) {
  let div = document.createElement("div");
  let img = document.createElement("img");
  img.src = "img/" + tuile + ".webp";
  div.appendChild(img);
  depot.appendChild(div);
}
//----------------------------------
let memo = -1;
let win=0;
let date1=new Date();
// tableau de selecteur sur les img
let tuiles = document.querySelectorAll(".container img");
for (let i = 0; i < tuiles.length; i++) {
  tuiles[i].onclick = (evt) => {
    //evt.target.remove();
    if (memo == -1) {
      // si premier click
      memo = i; // on memorise
      // mettre en surbrillance
      evt.target.parentElement.classList.add("green");
    } else {
      // si 2eme click
      tuiles[memo].parentElement.classList.remove("green");
      console.log(i);
      console.log(tab32[memo]);
      console.log(tab32[i]);
      // on vérifie que l'on ne clique pas sur le mm tuile
     if (memo != i) {
        if (tab32[memo] == tab32[i]) {
          tuiles[memo].remove();
          tuiles[i].remove();
          win++;
      }
      }
      if (win == 16){
        let date2=new Date();
        let dif = (date2.getTime() - date1.getTime())/1000;
        alert (dif);
      }
      memo = -1;
    }
  };
}
