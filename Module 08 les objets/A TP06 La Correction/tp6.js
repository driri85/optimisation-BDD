let personnes = [];
//---------
class Personne {
  constructor(prenom, nom) {
    this.prenom = prenom;
    this.nom = nom;
    this.status=true;
  }
}
//---------
const saveLocal =()=>{
  localStorage.setItem('personnes',JSON.stringify(personnes));
}
//---------
const afficherHTML = () => {
  const tbody = document.getElementById("myTbody");
  // vider le tableau HTML
  tbody.innerHTML = "";
  for (let p of personnes) {
    const template = document.getElementById("templateTr");
    // cloner le template
    const clone = template.content.cloneNode(true);
    // querySelectorAll retourne 1 tableau
    let tr = clone.querySelector("tr");
    // if (p.status){
    //   tr.classList.add('table-success');
    // }else{
    //   tr.classList.add('table-danger');
    // }

    // VIVE le if ternaire !!!
    p.status
      ? tr.classList.add("table-success")
      : tr.classList.add("table-danger");

    let td = clone.querySelectorAll("td");
    td[0].innerHTML = p.prenom;
    td[1].innerHTML = p.nom;
    btnEnlever = clone.querySelector(".btn-danger");
    btnEnlever.onclick = (evt) => {
      let tr = evt.target.closest("tr");
      let i = tr.rowIndex -1;
      personnes.splice(i, 1);
      //  tr.remove();
      saveLocal();// ici <--- localStorage
      afficherHTML();
    };
    btnModifier = clone.querySelector(".btn-warning");
    btnModifier.onclick = (evt) => {
      let tr = evt.target.closest("tr");
      let i = tr.rowIndex -1;
     // console.log(i);
      personnes[i].status = !personnes[i].status;
      if (personnes[i].status) {
        tr.classList.remove("table-danger");
        tr.classList.add("table-success");
      } else {
        tr.classList.remove("table-success");
        tr.classList.add("table-danger");
      }
      saveLocal();// ici <--- localStorage
      //afficherHTML();
    };
    
    tbody.appendChild(clone);
  } // for
};

document.getElementById("btnAjouter").onclick = () => {
  let prenom = document.getElementById("prenom").value;
  let nom = document.getElementById("nom").value;
  document.getElementById("prenom").value = ""; // vider input
  document.getElementById("nom").value = "";
  const  p = new Personne(prenom,nom);
  personnes.push(p);
  saveLocal();// ici <--- localStorage
  afficherHTML();
};
//----------------
const data = localStorage.getItem('personnes');
if (data){
  personnes= JSON.parse(data);
  afficherHTML();
}
