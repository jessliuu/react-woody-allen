import React, { useEffect, useState } from "react";

function Movies2() {
  const [movies, setMovies] = useState("hi");
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

  const fetchData = async () => {
    const responses = await Promise.all(urls.map((url) => fetch(url)));
    const data = await Promise.all(responses.map((res) => res.json()));
    console.log(data);
    setMovies(data);
  };

  // const fetchMovies = async () => {
  //   try {
  //     const responses = await Promise.all(urls.map((url) => fetch(url)));
  //     const data = await Promise.all(responses.map((r) => r.json()));
  //     setMovies(data);
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>Movies2</div>;
}

export default Movies2;
