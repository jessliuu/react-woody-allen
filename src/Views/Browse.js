import React, { useEffect, useContext } from "react";
import Movie from "../Components/Movie/Movie";
import { Row, Button } from "react-bootstrap";
import { MovieContext } from "../Contexts/MovieContext";
import { AuthContext } from "../Contexts/AuthContext";

const Browse = () => {
  const { movies, fetchMovies } = useContext(MovieContext);
  const { user } = useContext(AuthContext);

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
