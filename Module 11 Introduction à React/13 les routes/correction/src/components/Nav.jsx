import {Link} from 'react-router-dom'

export default function Nav(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
            
            <a className="navbar-brand" href="#">
                <i className="fa-solid fa-martini-glass-citrus me-4"></i>
                VIP Cocktail</a>
            
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={`/`} className={`nav-link ${ props.active == 'Home' ? 'active' :'' }`}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/builder`} className={`nav-link ${ props.active == 'Builder' ? 'active' : '' }`}>Builder</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
  }
  