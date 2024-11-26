const url = 'https://eni-cocktail-vip-xxx-default-rtdb.europe-west1.firebasedatabase.app/';
const noeud = 'personnes';

export const getGuests = async () => {
    let url2 = url + noeud + '.json';
    const response = await axios.get(url2);
    return response.data;
}


export const getGuest = async (id) => {
    let url2 = url + noeud + '/' + id+ '.json';
    const response = await axios.get(url2)
    return response.data;
   
}

export const addGuest = async (prenom, nom) => {
    let url2 = url + noeud +'.json';
    let p = { prenom: prenom, nom: nom, present: true};
    const response = await axios.post(url2, p);
    p.id = response.data.name;
    return p;
}

export const updateGuest = async (id, data) => {
    let url2 = url + noeud+ '/'+id +'/.json' ;
    //let data = { present: true};
    await axios.patch(url2, data);
    return;
}

export const removeGuest = async (id) => {
    let url2 = url + noeud+ '/'+id +'/.json' ;
    await axios.delete(url2);
    return;
}