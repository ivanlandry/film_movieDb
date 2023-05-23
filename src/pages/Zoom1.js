import { useLocation } from "react-router-dom";
import Menu from "../composants/Menu";

function Zoom1(props) {
  const location = useLocation();

  console.log(location.state.film);
  return (
    <div className="container">
      <Menu></Menu>
      <div className="d-flex justify-content-between align-items-center zoom">
        <img
          className="img-fluid w-100 h-100"
          src={location.state.path}
          alt={location.state.film.title}
        />

        <div>
          <h2>{location.state.film.title}</h2>

          <h5>{location.state.film.overview}</h5>

          <h5>{location.state.film.original_language}</h5>

          {location.state.film.first_air_date && (
            <h5>{location.state.film.first_air_date}</h5>
          )}

          {location.state.film.vote_count && (
            <h5>{location.state.film.vote_count} vues</h5>
          )}
        </div>
      </div>
    </div>
  );
}

export default Zoom1;
