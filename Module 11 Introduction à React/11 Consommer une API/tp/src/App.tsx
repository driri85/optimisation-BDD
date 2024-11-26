import { useEffect, useState } from "react";
import TrSearch from "./components/TrSearch";
import TrFav from "./components/TrFav";

export default function App() {
  const [series, setSeries] = useState<any[]>([]);
  const [favories, setFavories] = useState<any[]>([]);
  const [image, setImage] = useState("");
  useEffect(()=>{
    if (localStorage.getItem('films')){
      const tab = localStorage.getItem('films');
      setFavories(JSON.parse(tab))
    }
  },[]);
  const recherche = async (e) => {
    e.preventDefault();
    const serie = e.target.serie.value;
    e.target.reset();
    const key: string = "efdc2275";
    const nom: string = "Star Wars";
    const url: string = `http://www.omdbapi.com/?apikey=${key}&s=${serie}&type=series`;
    const response = await fetch(url);
    const liste = await response.json();
    setSeries(liste.Search);
  };
  const ajouter = async (indice: number): void => {
    const key: string = "efdc2275";
    const id: string = series[indice].imdbID;
    const url: string = `http://www.omdbapi.com/?apikey=${key}&i=${id}&type=series`;
    const response = await fetch(url);
    const film = await response.json();
    favories.push(film);
    series.splice(indice, 1);
    setSeries([...series]);
    setFavories([...favories]);
    localStorage.setItem('films',JSON.stringify(favories));
  };
  const enlever = (indice: number): void => {
    favories.splice(indice, 1);
    setFavories([...favories]);
    localStorage.setItem('films',JSON.stringify(favories));
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <i className="fa-solid fa-rocket me-4"></i>
            Mes séries
          </a>
        </div>
      </nav>
      <div className="container mt-4" data-info="88zzefdc2275">
        <div className="row">
          <div className="col-4">
            <form method="post" onSubmit={recherche}>
              <div className="row">
                <div className="col-10">
                  <input
                    type="text"
                    name="serie"
                    className="form-control"
                    placeholder="Nom de la série"
                  />
                </div>
                <div className="col-2">
                  <button type="submit" className="btn btn-success">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </div>
              </div>
            </form>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Séries</th>
                  <th>Année</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {series.map((f: any, indice: number) => (
                  <TrSearch
                    key={indice}
                    f={f}
                    indice={indice}
                    ajouter={ajouter}
                  />
                ))}
              </tbody>
            </table>
          </div>
          <div className="offset-3 col-4">
            <h1>Séries à regarder :</h1>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Séries</th>
                  <th>Année</th>
                  <th>rating</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {favories.map((f: any, indice: number) => (
                  <TrFav key={indice} f={f} indice={indice} enlever={enlever} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <footer className="py-5 bg-dark">
        <div className="container px-4 px-lg-5">
          <p className="m-0 text-center text-white">
            Copyright &copy; Seven Valley 2023
          </p>
        </div>
      </footer>
    </>
  );
}
