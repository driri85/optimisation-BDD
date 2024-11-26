import { useState, useEffect  } from 'react'
import '../App.css'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { useParams, useNavigate } from 'react-router-dom'
import {getGuest, updateGuest} from '../services/api.js'

export default function Detail() {
  const {id} = useParams();
  const [personne, setPersonne] = useState([])

  let navigate = useNavigate();

  useEffect(()=>{
    recupererInvite();
  },[]);

  const recupererInvite = async () => {
    const invite = await getGuest(id);

    if (invite) {
      setPersonne({
        id: id,
        nom: invite.nom,
        prenom: invite.prenom,
        present: invite.present,
      });
    }
    else {
      navigate("/error");
    }
  }

  const modifierPersonne = async (e) => {
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

    await updateGuest(id, {
      prenom : prenom, 
      nom: nom
    });

    navigate("/builder");
  }

  return (
    <>
      <Nav active='Builder' />
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="bg-gris p-4">
              <form method="post" onSubmit={modifierPersonne}>
                <div className="row">
                  <div className="col-4">
                    <input
                      aria-label="Prenom"
                      className="form-control"
                      placeholder="Prenom"
                      name="prenom"
                      defaultValue={personne.prenom}
                    />
                  </div>
                  <div className="col-4">
                    <input
                      aria-label="Nom"
                      className="form-control"
                      placeholder="Nom"
                      name="nom"
                      defaultValue={personne.nom}
                    />
                  </div>
                  <div className="col-1">
                    <button className="btn btn-primary" type="submit">
                      <i className="fa fa-floppy-disk"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
