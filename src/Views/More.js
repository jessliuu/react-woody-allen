import React, { useContext } from "react";
import { MovieContext } from "../Contexts/MovieContext";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Card, Container, Button } from "react-bootstrap";
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
  const releaseDate = result.release_date;
  const year = releaseDate.slice(0, 4);
  const genres = result.genres;
  const listGenres = genres.map((genre) => ` • ${genre.name}`);
  const backdrop = "https://image.tmdb.org/t/p/w500/" + result.backdrop_path;
  const overview = result.overview;
  const runtime = result.runtime;
  const vote = result.vote_average;
  const redirectTo = useNavigate();
  const handleBackToBrowse = () => redirectTo("/browse");

  function Score(result) {
    console.log("result", result);
    switch (true) {
      case result.vote_average < 2:
        return <p>&#9733;&#9734;&#9734;&#9734;&#9734;</p>;

      case result.vote_average >= 2 && result.vote_average < 4:
        return <p>&#9733;&#9733;&#9734;&#9734;&#9734;</p>;

      case result.vote_average >= 4 && result.vote_average < 6:
        return <p>&#9733;&#9733;&#9733;&#9734;&#9734;</p>;
      case result.vote_average >= 6 && result.vote_average < 8:
        return <p>&#9733;&#9733;&#9733;&#9733;&#9734;</p>;

      case result.vote_average >= 8:
        return <p>&#9733;&#9733;&#9733;&#9733;&#9733;</p>;

      default:
        return <p>no rating</p>;
    }
  }

  return (
    <Container className="fluid mt-2">
      <h2>
        {title} ({year}) {result && <Score vote_average={vote} />}
      </h2>
      <Card.Img variant="top" src={backdrop} />
      <p>
        Overview: &#160;{overview} &#160;&#40;{runtime}&#160;mins&#41;
      </p>
      <p style={{ fontSize: "medium" }}>{listGenres}</p>
      {/* Option 1: use redirectTo as a callback  */}
      {/* <Button
        variant="outline-light"
        onClick={() => redirectTo("/", { replace: true })}
      /> */}

      {/* Option 2: use redirectTo in another function */}
      <Button variant="outline-light" onClick={handleBackToBrowse}>
        Back to browse
      </Button>

      {/* <MyButton message="Back to browse" onClick={redirectTo("/browse")} /> */}
    </Container>
  );
}

export default More;
