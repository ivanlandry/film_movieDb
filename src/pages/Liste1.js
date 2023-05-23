import { useEffect, useState } from "react";
import Menu from "../composants/Menu";
import CardFilm from "../composants/CardFilm";

function Liste1() {
  const key_api = "fc46e3cea6d7520ef6014bb08931f307";

  const [items, setItems] = useState([0]);

  useEffect(() => {
    const url =
      "https://api.themoviedb.org/3/trending/all/day?api_key=" + key_api;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setItems(data.results);
        console.log(data);
      });
  }, []);

  const [film, setFilm] = useState("");

  const handleChangeInput = (event) => {
    setFilm(event);
    console.log(items);
  };

  return (
    <div className="container">
      <Menu onInputChange={handleChangeInput}></Menu>
      <div className="row mt-4">
        {items?.map(
          (item, index) =>
            (item.title?.toLowerCase().includes(film.toLowerCase()) ||
              item.name?.toLowerCase().includes(film.toLowerCase())) && (
              <CardFilm item={item} key={item.id}></CardFilm>
            )
        )}
      </div>
    </div>
  );
}

export default Liste1;
