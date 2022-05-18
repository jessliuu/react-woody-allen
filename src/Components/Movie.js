import React from "react";
import { Card, Col } from "react-bootstrap";

function Movie(props) {
  const title = props.info.original_title;
  const releaseDate = props.info.release_date;
  const year = releaseDate.slice(0, 4);
  const image = "https://image.tmdb.org/t/p/w500/" + props.info.poster_path;

  //   const style = { color: "red", backgroundColor: "blue"  };

  return (
    <Col className="d-flex justify-content-center">
      <Card style={{ width: "18rem", border: "none" }}>
        <Card.Img variant="top" src={image} />
        <Card.Title>
          {title} ({year})
        </Card.Title>
        {/* <Card.Title style={style}>{title}</Card.Title> */}
      </Card>
    </Col>
  );
}

export default Movie;
