import {Link} from 'react-router-dom'

export default function Personne(props) {
    return (
        <tr className={props.p.present ? 'table-success' : 'table-danger'}>
            <td>{props.p.prenom}</td>
            <td>{props.p.nom}</td>
            { !props.readOnly && 
                <>
                    <td>
                        <button className="btn btn-danger" onClick={() => props.supprimer(props.ind, props.p.id)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                    <td>
                        <button className="btn btn-warning" onClick={() => props.changerEtat(props.ind, props.p.id)}>
                            <i className="fa fa-check"></i>
                        </button>
                    </td>
                    <td>
                        <Link to={`/detail/${props.p.id}`} className="btn btn-primary">
                            <i className="fa fa-edit"></i>
                        </Link>
                    </td>
                </>
            }
        </tr>
    )
  }