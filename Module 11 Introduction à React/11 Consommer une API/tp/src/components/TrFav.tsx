interface IpropsFav{
    f:any;
    indice:number;
    enlever:(indice:number)=>void;
}
export default function TrSearch(props:IpropsFav) {
  return (
    <tr>
      <td>{props.f.Title}</td>
      <td>{props.f.Year}</td>
      <td>{props.f.imdbRating}</td>
      <td>
        <img
          src={props.f.Poster}
          alt={props.f.Title}
          width="80"
        />
      </td>
      <td className="align-middle">
        <button 
        onClick={()=>props.enlever(props.indice)}
        className="btn btn-outline-danger">
          <i className="fa fa-trash"></i>
        </button>
      </td>
    </tr>
  );
}
