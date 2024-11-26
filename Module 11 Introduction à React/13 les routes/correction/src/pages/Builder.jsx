import { useState, useEffect  } from 'react'
import '../App.css'
import Personne from '../components/Personne.jsx'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import {getGuests, addGuest, removeGuest, updateGuest} from '../services/api.js'

export default function Builder() {
  const [personnes, setPersonnes] = useState([])

  useEffect(()=>{
    recupererInvites();
  },[]);

  const recupererInvites = async () => {
    const invites = await getGuests();
    let personnesAJour = [];
    for (let id in invites)
    {
      const personne = invites[id];
      personne.id = id;
      // const p = new Personne(personne.prenom,personne.nom)
      
      personnesAJour.push(personne);
      /*
      personnesAJour.push({
        id: id,
        nom: personne.nom,
        prenom: personne.prenom,
        present: personne.present,
      });
      */
    }
    setPersonnes(personnesAJour);
  }

  const ajouterPersonne = async (e) => {
    e.preventDefault();
    
    const prenom = e.target.prenom.value;
    if (!prenom) {
      alert('Merci de renseigner un prénom svp');
      return;
    }
    const nom = e.target.nom.value;
    if (!nom) {
      alert('Merci de renseigner un nom svp');
      return;
    }

    const p = await addGuest(prenom, nom);
    personnes.push(p)
    setPersonnes([...personnes]);

    e.target.reset();
  }

  const supprimer = async (ind, id) => {
    await removeGuest(id);
    personnes.splice(ind, 1);
    setPersonnes([...personnes]);
  }

  const changerEtat = async (ind, id) => {
    await updateGuest(id, {present: !personnes[ind].present});
    personnes[ind].present = !personnes[ind].present;
    setPersonnes([...personnes]);
  }

  return (
    <>
      <Nav active='Builder' />
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="bg-gris p-4">
              <form method="post" onSubmit={ajouterPersonne}>
                <div className="row">
                  <div className="col-4">
                    <input
                      aria-label="Prenom"
                      className="form-control"
                      placeholder="Prenom"
                      name="prenom"
                    />
                  </div>
                  <div className="col-4">
                    <input
                      aria-label="Nom"
                      className="form-control"
                      placeholder="Nom"
                      name="nom"
                    />
                  </div>
                  <div className="col-1">
                    <button className="btn btn-success" type="submit">
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          </div> 
          <div className="row">
            <div className="col-4">

              <table className="table table-striped mt-4">
                <tbody>
                  <tr>
                    <th>Prénom</th>
                    <th>Nom</th>
                    <th colSpan="3">Actions</th>
                  </tr>

                  {
                    personnes.map((p, ind) => <Personne 
                      p = {p}
                      readOnly = {false}
                      supprimer = {supprimer}
                      changerEtat = {changerEtat}
                      ind = {ind} 
                      key = {ind} 
                  />)}

                </tbody>
              </table>
          
          
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
