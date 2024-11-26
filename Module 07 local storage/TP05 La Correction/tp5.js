let fruits = [];
//---------
const saveLocal =()=>{
  localStorage.setItem('fruits',JSON.stringify(fruits));
}
//---------
const afficher = () => {
    const tbody = document.getElementById("myTbody");
    tbody.innerHTML='';
  for (let fruit of fruits) {
    console.log(fruits);
    // selecteur sur le tableau
   
    // selecteur sur le template
    const template = document.getElementById("templateTr");
    // cloner le template
    const clone = template.content.cloneNode(true);
    let td = clone.querySelector("td");
    td.textContent = fruit;
    let btn = clone.querySelector("button");
    btn.onclick = (event) => {
      if (confirm("Voulez-vous enlever : " + fruit + " ?")) {
       const indice =  event.target.closest("tr").rowIndex -1;
       fruits.splice(indice,1);
       saveLocal();// ici <--- localStorage
       afficher();
      }
    };
    // ajouter le tr cloner ds le tableau html
    tbody.appendChild(clone);
  }
};
//---------
document.getElementById("btnAjouter").onclick = () => {
  let fruit = document.getElementById("fruit").value;
  document.getElementById("fruit").value = ""; // vider input
  fruits.push(fruit);
  saveLocal(); // ici <--- localStorage
  afficher();
};
//---------
const data = localStorage.getItem('fruits');
if (data){
  fruits= JSON.parse(data);
  afficher();
}