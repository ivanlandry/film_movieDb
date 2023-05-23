import { Link } from "react-router-dom";

function CardFilm(props) {
  const url = "https://image.tmdb.org/t/p/w500/" + props.item.backdrop_path;

  return (
    <div className="col-md-4 mb-1">
      <Link
        to={`/zoom1/${props.item.id}`}
        state={{ film: props.item, path: url }}
        className="link"
      >
        <div className="card">
          <img
            className="img-fluid w-100 h-100"
            src={url}
            alt={props.item.title ? props.item.title : props.item.name}
          />
          <div className="card-body">
            <strong>
              {props.item.title ? props.item.title : props.item.name}
            </strong>
            <p className="card-text mt-1">{props.item.overview}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CardFilm;
