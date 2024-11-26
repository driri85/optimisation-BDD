const dbFire =
  "https://alpha-javascript-default-rtdb.europe-west1.firebasedatabase.app/";
const noeud = "personnes";

//affiche();
let data = {};
//---------
class Personne {
  constructor(prenom, nom) {
    this.prenom = prenom;
    this.nom = nom;
    this.status = true;
  }
}
//---------
const saveLocal = () => {
  localStorage.setItem('personnes', JSON.stringify(personnes));
}
//---------
const afficherHTML = () => {
  const tbody = document.getElementById("myTbody");
  // vider le tableau HTML
  tbody.innerHTML = "";
  //for (let p of personnes) {
  Object.keys(data).map(id => {
    console.log(id);
    console.log(data[id]);
    const p = data[id];
    const template = document.getElementById("templateTr");
    // cloner le template
    const clone = template.content.cloneNode(true);
    // querySelectorAll retourne 1 tableau
    let tr = clone.querySelector("tr");
    tr.setAttribute('data-id', id);
    // VIVE le if ternaire !!!
    p.status
      ? tr.classList.add("table-success")
      : tr.classList.add("table-danger");

    let td = clone.querySelectorAll("td");
    td[0].innerHTML = p.prenom;
    td[1].innerHTML = p.nom;
    btnEnlever = clone.querySelector(".btn-danger");
    btnEnlever.onclick = async (evt) => {
      const tr = evt.target.closest("tr");
      const id = tr.dataset.id;
      const url = `${dbFire}${noeud}/${id}.json`;
      const response = await axios.delete(url);
      // effacer un attribur sur mon objet data
      delete data[id];
      //delete data.id;
      afficherHTML();
    };
    btnModifier = clone.querySelector(".btn-warning");
    btnModifier.onclick = async (evt) => {
      let tr = evt.target.closest("tr");
      const id = tr.dataset.id;
      const obj = { status: !data[id].status };
      const url = `${dbFire}${noeud}/${id}.json`;
      const response = await axios.patch(url, obj);
      console.log(response.data);
      data[id].status = !data[id].status;
      afficherHTML();
    }



    if (p.status) {
      tr.classList.remove("table-danger");
      tr.classList.add("table-success");
    } else {
      tr.classList.remove("table-success");
      tr.classList.add("table-danger");
    }

    tbody.appendChild(clone);
    // } // for
  });
};

document.getElementById("btnAjouter").onclick = async () => {
  let prenom = document.getElementById("prenom").value;
  let nom = document.getElementById("nom").value;
  document.getElementById("prenom").value = ""; // vider input
  document.getElementById("nom").value = "";
  const p = new Personne(prenom, nom);
  const url = `${dbFire}${noeud}.json`;

  const response = await axios.post(url, p);
  const id = response.data.name;
  console.log(id)
  // comment rajouter sur l'objet data ???
  data[id] = p;
  afficherHTML();
};

const loadFire = async () => {
  const url = `${dbFire}${noeud}.json`;
  const response = await axios.get(url);
  data = response.data;
  afficherHTML();
}

loadFire();
//----------------
// const data = localStorage.getItem('personnes');
// if (data) {
//   personnes = JSON.parse(data);
//   afficherHTML();
// }
