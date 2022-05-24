import React, { useState, useEffect } from "react";
import Movie from "../Components/Movie";
import { Row, Button } from "react-bootstrap";

const Browse = () => {
  const [movies, setMovies] = useState();

  const urls = [
    "https://api.themoviedb.org/3/movie/8217?api_key=a8ba99c690b00811c8c588b3b76b46f4",
    "https://api.themoviedb.org/3/movie/19200?api_key=a8ba99c690b00811c8c588b3b76b46f4",
    "https://api.themoviedb.org/3/movie/28384?api_key=a8ba99c690b00811c8c588b3b76b46f4",
    "https://api.themoviedb.org/3/movie/10440?api_key=a8ba99c690b00811c8c588b3b76b46f4",
    "https://api.themoviedb.org/3/movie/11382?api_key=a8ba99c690b00811c8c588b3b76b46f4",
    "https://api.themoviedb.org/3/movie/10462?api_key=a8ba99c690b00811c8c588b3b76b46f4",
    "https://api.themoviedb.org/3/movie/11448?api_key=a8ba99c690b00811c8c588b3b76b46f4",
    "https://api.themoviedb.org/3/movie/9716?api_key=a8ba99c690b00811c8c588b3b76b46f4",
    "https://api.themoviedb.org/3/movie/2639?api_key=a8ba99c690b00811c8c588b3b76b46f4",
    "https://api.themoviedb.org/3/movie/9466?api_key=a8ba99c690b00811c8c588b3b76b46f4",
    "https://api.themoviedb.org/3/movie/9684?api_key=a8ba99c690b00811c8c588b3b76b46f4",
    "https://api.themoviedb.org/3/movie/10569?api_key=a8ba99c690b00811c8c588b3b76b46f4",
    "https://api.themoviedb.org/3/movie/2779?api_key=a8ba99c690b00811c8c588b3b76b46f4",
    "https://api.themoviedb.org/3/movie/48208?api_key=a8ba99c690b00811c8c588b3b76b46f4",
    "https://api.themoviedb.org/3/movie/9689?api_key=a8ba99c690b00811c8c588b3b76b46f4",
  ];
  const fetchMovies = async () => {
    try {
      const responses = await Promise.all(urls.map((url) => fetch(url)));
      const data = await Promise.all(responses.map((r) => r.json()));
      setMovies(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

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
