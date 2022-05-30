import React, { useContext } from "react";
import { MovieContext } from "../Contexts/MovieContext";
import { useLocation, useParams } from "react-router-dom";
import { Card, Container } from "react-bootstrap";
import MyButton from "../Components/buttons/MyButton.js";

function More() {
  // console.log(props);
  const params = useParams();
  const paramsNumber = parseInt(params.title);
  console.log(typeof paramsNumber);

  // Option 1: useLocation
  // const location = useLocation();
  // console.log(location);
  // const title = location.state.original_title;
  // const overview = location.state.overview;
  // const genres = location.state.genres;
  // const backdrop =
  //     "https://image.tmdb.org/t/p/w500/" + location.state.backdrop_path;
  //   const runtime = location.state.runtime;

  // Option 2: useContext
  const { movies } = useContext(MovieContext);

  console.log(movies);
  let result = {};
  const selectedMovie = movies
    .filter((movie) => {
      return movie.id === paramsNumber;
    })
    .map((e) => {
      result = e;
    });

  const title = result.original_title;
  const genres = result.genres;
  const listGenres = genres.map((genre) => ` • ${genre.name}`);
  const backdrop = "https://image.tmdb.org/t/p/w500/" + result.backdrop_path;
  const overview = result.overview;
  const runtime = result.runtime;

  return (
    <Container className="fluid mt-2">
      <h2>{selectedMovie}</h2>
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
