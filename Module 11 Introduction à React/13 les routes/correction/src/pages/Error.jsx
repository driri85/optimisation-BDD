import '../App.css'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'

export default function Error() {
  return (
    <>
      <Nav active={false} />
      <div className="container">
          <div className="row">
            <div className="col-4 my-5">
              La page que vous demandez n'existe pas !
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}