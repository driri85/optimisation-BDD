document.getElementById("btnAjouter").onclick = () => {
    let fruit = document.getElementById('fruit').value;
    document.getElementById('fruit').value=''; // vider input
    // selecteur sur le tableau
    const tbody = document.getElementById("myTbody");
    // selecteur sur le template
    const template = document.getElementById('templateTr');
    // cloner le template
    const clone = template.content.cloneNode(true);
    let td = clone.querySelector("td");
        td.textContent = fruit;
    let btn = clone.querySelector("button");
    btn.onclick =(evt)=>{
            // parentElement 2 fois
            // td puis tr
            if(confirm("Voulez-vous enlever : "+fruit+" ?")){
                evt.target.closest("tr").remove();
            }
            
            
            //evt.target.parentElement.parentElement.parentElement.remove();
        }
    // ajouter le tr cloner ds le tableau html
    tbody.appendChild(clone);  
   
  };