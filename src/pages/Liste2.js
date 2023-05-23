import { useEffect, useState } from "react";
import Menu from "../composants/Menu";
import CardActeur from "../composants/CardActeur";

function Liste2() {
  const [items, setItems] = useState([0]);
  const key_api = "fc46e3cea6d7520ef6014bb08931f307";
  useEffect(() => {
    const url =
      "https://api.themoviedb.org/3/person/popular?api_key=" +
      key_api +
      "&language=en-US&page=1%22";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setItems(data.results);
      });
  }, []);

  const [acteur, setActeur] = useState("");

  const handleChangeInput = (event) => {
    setActeur(event);
  };

  return (
    <div className="container">
      <Menu onInputChange={handleChangeInput}></Menu>
      <div className="row mt-4">
        {items?.map(
          (item, index) =>
            item.name?.toLowerCase().includes(acteur.toLowerCase()) && (
              <CardActeur item={item} key={item.id}></CardActeur>
            )
        )}
      </div>
    </div>
  );
}

export default Liste2;
