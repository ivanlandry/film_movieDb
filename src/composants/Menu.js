import { useState } from "react";
import { Link } from "react-router-dom";

function Menu(props) {
  const [rechercher, setRecherche] = useState("");

  const handleChange = (event) => {
    setRecherche(event.target.value);
    props.onInputChange(rechercher);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="menu">
      <Link className="navbar-brand" to="/">
        Accueil
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/liste1">
              Films
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/liste2">
              Acteurs
            </Link>
          </li>
        </ul>
        {window.location.pathname === "/liste1" ||
        window.location.pathname === "/liste2" ? (
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Rechercher"
              aria-label="Search"
              value={rechercher}
              onChange={handleChange}
            />
          </form>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
}

export default Menu;
