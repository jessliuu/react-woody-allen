import React, { useEffect, useContext } from "react";
import Movie from "../Components/Movie";
import { Row, Button } from "react-bootstrap";
import { MovieContext } from "../Contexts/MovieContext";

const Browse = () => {
  const { movies, fetchMovies } = useContext(MovieContext);

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <Row className="gx-0 gy-0 " xs={1} md={4} style={{ marginTop: 20 }}>
        {movies &&
          movies.map((movie) => {
            // const { original_title, id  } = movie;

            return <Movie info={movie} />;
          })}
      </Row>
    </>
  );
};

export default Browse;
