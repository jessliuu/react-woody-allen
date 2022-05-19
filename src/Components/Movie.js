import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Movie(props) {
  // console.log(props);

  const info = props.info;
  const title = props.info.original_title;
  const releaseDate = props.info.release_date;
  const year = releaseDate.slice(0, 4);
  const image = "https://image.tmdb.org/t/p/w500/" + props.info.poster_path;

  //   const style = { color: "red", backgroundColor: "blue"  };

  return (
    <>
      <Col className="d-flex justify-content-center ">
        <Card
          style={{ width: "18rem", border: "none" }}
          className="shadow-sm p-3 mb-5 bg-white rounded d-flex justify-content-between"
        >
          <Link to={title} state={info}>
            <Card.Img variant="top" src={image} />
          </Link>
          <Card.Title style={{ fontWeight: 200, paddingTop: 5 }}>
            {title} ({year})
          </Card.Title>
        </Card>
      </Col>
    </>
  );
}

export default Movie;
