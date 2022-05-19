import React from "react";
import { useParams } from "react-router-dom";

function More(props) {
  // const overview = props.info.overview;
  // const genres = props.info.genres;
  // const listGenres = genres.map((genre) => genre.name);
  // console.log(props);
  const name = useParams();
  console.log(name);

  return (
    <div>
      {/* <p>Overview: {overview}</p>
      <p>Genres: {listGenres}</p> */}
      More
      <p>name: {name.title}</p>
    </div>
  );
}

export default More;
