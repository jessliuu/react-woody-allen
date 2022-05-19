import React from "react";
import { useLocation, useParams } from "react-router-dom";

function More(props) {
  // const overview = props.info.overview;
  // const genres = props.info.genres;
  // const listGenres = genres.map((genre) => genre.name);
  // console.log(props);
  //   const name = useParams();
  //   console.log(name);
  const location = useLocation();
  console.log(location);
  const title = location.state.original_title;

  return (
    <div>
      {/* <p>Overview: {overview}</p>
      <p>Genres: {listGenres}</p> */}
      More
      <p>name: {title}</p>
    </div>
  );
}

export default More;
