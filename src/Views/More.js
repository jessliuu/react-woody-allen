import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { Card, Container } from "react-bootstrap";
import MyButton from "../Components/MyButton/MyButton";

function More(props) {
  // console.log(props);
  // const params = useParams();
  // console.log(params);
  const location = useLocation();
  // const { from } = location.state;
  console.log(location);
  const title = location.state.original_title;
  const overview = location.state.overview;
  const genres = location.state.genres;
  const listGenres = genres.map((genre) => ` • ${genre.name}`);
  const backdrop =
    "https://image.tmdb.org/t/p/w500/" + location.state.backdrop_path;
  const runtime = location.state.runtime;

  return (
    <Container className="fluid mt-2">
      <h2>{title}</h2>
      <Card.Img variant="top" src={backdrop} />
      <p>
        Overview: &#160;{overview} &#160;&#40;{runtime}&#160;mins&#41;
      </p>
      <p style={{ fontSize: "medium" }}>{listGenres}</p>
      <MyButton message="Back to browse" />
    </Container>
  );
}

export default More;
