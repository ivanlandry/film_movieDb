import { useState } from "react";
import Menu from "../composants/Menu";

function Home() {
  const [email, setEmail] = useState("");
  const [nom, setNom] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorNom, setErrorNom] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nom.length > 0 || email.length > 0) {
      if (email.includes("@")) {
        setErrorEmail("");
        setErrorNom("");
        console.log("inscription reusssie");
      } else {
        setErrorEmail("l'adresse courriel est invalide");
      }
    } else {
      if (nom.length < 0) setErrorNom("le nom  est requis");
      else setErrorEmail("l'email  est requis");
    }
  };

  return (
    <div className="container mt-1">
      <Menu></Menu>
      <div className="row">
        <div className="col-md-12">
          <img
            className="w-100 h-75 mt-1"
            src="https://i.ytimg.com/vi/BRb4U99OU80/maxresdefault.jpg"
            alt="oups"
          />
        </div>
      </div>
      <div className="row video">
        <iframe
          className="w-750 h-100 col-md-4"
          src="https://www.youtube.com/embed/K_zyVZYImKE"
          title="film 1"
        ></iframe>
        <iframe
          className="w-750 h-100 col-md-4"
          src="https://www.youtube.com/embed/JN7Wm_gYISs"
          title="film 2"
        ></iframe>
        <iframe
          className="w-750 h-100 col-md-4"
          src="https://www.youtube.com/embed/35HKBVJpAGg"
          title="film 3"
        ></iframe>
      </div>
      <div className="row p-4 mt-2 news">
        <div className="col-md-4">
          <h3 className="text-center text-white">S'inscrire aux nouvelles</h3>
        </div>
        <form
          method="post"
          className="col-md-7 offset-md-1 d-flex justify-content-between h-100"
        >
          <div className="form-group">
            <input
              placeholder="Votre email"
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <div className="text-danger">{errorEmail}</div>
          </div>
          <div className="form-group has-validation">
            <input
              placeholder="votre nom"
              type="text"
              className="form-control"
              value={nom}
              onChange={(e) => {
                setNom(e.target.value);
              }}
            />
            <div className="text-danger">{errorNom}</div>
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Home;
