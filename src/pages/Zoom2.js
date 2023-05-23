import Menu from "../composants/Menu";
import { useLocation } from "react-router-dom";

function Zoom2(props) {
  const location = useLocation();

  return (
    <div className="container">
      <Menu></Menu>
      <div className="d-flex align-items-center justify-content-around mt-4 zoom">
        <img
          className="img-fluid"
          src={location.state.path}
          alt={location.state.acteur.name}
        />

        <div>
          <h2>{location.state.acteur.name}</h2>
          <h5>{location.state.acteur.overview}</h5>

          <h5>
            Films pour personnes{" "}
            {location.state.acteur.adult === false ? "normales" : "adultes"}
          </h5>

          {location.state.acteur.known_for_department && (
            <h5>Departement {location.state.acteur.known_for_department}</h5>
          )}

          {location.state.acteur.popularity && (
            <h5>Cote de popularité {location.state.acteur.popularity}</h5>
          )}
        </div>
      </div>
    </div>
  );
}

export default Zoom2;
