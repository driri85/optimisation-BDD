interface IpropsSearch{
    f:any;
    indice:number;
    ajouter:(indice:number)=>void;
}
export default function TrSearch(props:IpropsSearch) {
  return (
    <tr>
      <td>{props.f.Title}</td>
      <td>{props.f.Year}</td>
      <td>
        <img
          src={props.f.Poster}
          alt={props.f.Title}
          width="80"
        />
      </td>
      <td className="align-middle">
        <button 
        onClick={()=>props.ajouter(props.indice)}
        className="btn btn-outline-secondary">
          <i className="fa fa-plus"></i>
        </button>
      </td>
    </tr>
  );
}
