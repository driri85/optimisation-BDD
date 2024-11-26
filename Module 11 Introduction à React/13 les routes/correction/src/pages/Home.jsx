import { useState, useEffect  } from 'react'
import '../App.css'
import Personne from '../components/Personne.jsx'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import {getGuests} from '../services/api.js'

export default function Home() {
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
      personnesAJour.push({
        id: id,
        nom: personne.nom,
        prenom: personne.prenom,
        present: personne.present,
      });
    }
    setPersonnes(personnesAJour);
  }

  return (
    <>
      <Nav active={'Home'} />
      <div className="container">
          <div className="row">
            <div className="col-4">

              <table className="table table-striped mt-4">
                <tbody>
                  <tr>
                    <th>Prénom</th>
                    <th>Nom</th>
                  </tr>

                  {
                    personnes.map((p, ind) => <Personne 
                      p = {p}
                      readOnly = {true}
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