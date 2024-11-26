document.getElementById('btnAjouter').onclick = function () {
    const fruit = document.getElementById('fruit').value;
    
    var tbodyRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];
    var newRow = tbodyRef.insertRow();
    var newCell = newRow.insertCell();
    let newText = document.createTextNode(fruit);
    
    newCell.appendChild(newText);

    document.getElementById('fruit').value = '';

    newCell = newRow.insertCell();
    newCell.innerHTML = '<button class="btn btn-danger" onclick="remove(this)"><i class="fa fa-trash"></i></button>';
  };
  function remove(el) {
    if(!confirm(`Are you sure you want to delete?`)) return;
    el.parentNode.parentNode.parentNode.remove(el.parentNode.parentNode.rowIndex);
}