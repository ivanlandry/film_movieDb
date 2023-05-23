import { Link } from "react-router-dom";

function CardFilm2(props) {
  const url = "https://image.tmdb.org/t/p/w500/" + props.item.profile_path;
  return (
    <div className="col-md-4 mb-1">
      <Link
        to={`/zoom2/${props.item.id}`}
        state={{ acteur: props.item, path: url }}
        className="link"
      >
        <div className="card">
          <img
            className="img-fluid"
            src={url}
            alt={props.item.name ? props.item.name : "aucun nom"}
          />
          <div className="card-body text-center">
            <strong>{props.item.name ? props.item.name : "aucun nom"}</strong>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CardFilm2;
