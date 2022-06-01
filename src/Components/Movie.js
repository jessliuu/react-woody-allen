import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Likes from "./Likes";

function Movie(props) {
  // console.log(props);

  const info = props.info;
  const id = props.info.id;
  const title = props.info.original_title;
  const releaseDate = props.info.release_date;
  const year = releaseDate.slice(0, 4);
  const image = "https://image.tmdb.org/t/p/w500/" + props.info.poster_path;
  const vote = props.info.vote_average;

  function Score(props) {
    // console.log(props);
    switch (true) {
      case props.vote < 4:
        return <p>bad</p>;

      case props.vote >= 4 && props.vote < 7:
        return <p>meh</p>;

      case props.vote >= 7:
        return <p>great</p>;

      default:
        return <p>no rating</p>;
    }
  }

  return (
    <>
      <Col className="d-flex justify-content-center ">
        <Card
          style={{ width: "18rem", border: "none" }}
          className="shadow-sm p-3 mb-5 bg-white rounded d-flex justify-content-between"
        >
          <Link to={`${id}`} state={info}>
            <Card.Img variant="top" src={image} />
          </Link>
          {/* <Card.Title style={{ fontWeight: 200, paddingTop: 5 }}>
            {title} ({year}){<score vote={5} />}
          </Card.Title> */}
          <Likes />
          {/* <Score vote={vote} /> */}
        </Card>
      </Col>
    </>
  );
}

export default Movie;
