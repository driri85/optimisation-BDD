document.getElementById('btnCalcul').onclick =()=>{
    // lire le dom
    const km = document.getElementById('km').value
    const litre = document.getElementById('litre').value
    document.getElementById('km').value =''
    document.getElementById('litre').value=''
    const conso = (litre *100)/km
    // afficher dans le DOM
    //document.getElementById('resultat').innerHTML=conso.toFixed(1)
    let tranche =''
    let classe=''
    if ( conso <7){
        tranche = 'normal'
        classe='alert-success'
    }else if (conso < 9){// 7 <conso< 9
        tranche ='gourmand'
        classe='alert-warning'
    } else{
        tranche='SUV de luxe'
        classe='alert-danger'
    }
//     <div class="alert alert-success mt-4" role="alert">
//          <h3>Conso : <b id="resultat">6.5</b> Litres/100km</h3>
//          <p id="tranche">Normal</p>
//      </div>
    const depot = document.getElementById('depot')
    depot.innerHTML =''
    const div = document.createElement('div')

    div.classList.add('alert', classe, 'mt-4');
    const h3 = document.createElement('h3');
    // h3.innerHTML= 'Conso : <b>'+conso+'</b> Litres/100km'
    h3.innerHTML= `Conso : <b>${conso.toFixed(1)}</b> Litres/100km`
    const p = document.createElement('p');
    p.textContent = tranche;
    div.appendChild(h3);
    div.appendChild(p);
    depot.appendChild(div)
   
}