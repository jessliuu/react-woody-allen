import React from "react";

function MoreComponent(props) {
  const overview = props.info.overview;
  const genres = props.info.genres;
  const listGenres = genres.map((genre) => genre.name);

  return (
    <div>
      <p>Overview: {overview}</p>
      <p>Genres: {listGenres}</p>
    </div>
  );
}

export default MoreComponent;
