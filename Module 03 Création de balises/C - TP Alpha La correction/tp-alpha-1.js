function calcul(){
    // lire le dom
    const km = document.getElementById('km').value
    const litre = document.getElementById('litre').value
    document.getElementById('km').value =''
    document.getElementById('litre').value=''
    const conso = (litre *100)/km
    // afficher dans le DOM
    document.getElementById('conso').innerHTML=conso.toFixed(1) + 'l/100km'
    let tranche =''
    if ( conso <7){
        tranche = 'normal'
    }else if (conso < 9){// 7 <conso< 9
        tranche ='gourmand'
    } else{
        tranche='SUV de luxe'
    }
    document.getElementById('conseil').innerHTML =tranche;
}