import React, { useContext, useEffect, useState } from "react";
import { Card, Col, Button, Row, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Likes from "../Likes";
import { AuthContext } from "../../Contexts/AuthContext";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import ForumIcon from "@mui/icons-material/Forum";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

import {
  doc,
  setDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  query,
  collection,
  where,
  onSnapshot,
  documentId,
} from "firebase/firestore";
import { db } from "../../config";
import { fontStyle } from "@mui/system";
import "./Movie.css";
import MoreVert from "@mui/icons-material/MoreVert";

function Movie(props) {
  const info = props.info;
  const id = props.info.id;
  const title = props.info.original_title;
  const image = "https://image.tmdb.org/t/p/w500/" + props.info.poster_path;
  const vote = props.info.vote_average;
  // const [isLiked, setIsLiked] = useState(false);
  const { user } = useContext(AuthContext);
  // const getLikes = () => {
  //   const q = query(
  //     collection(db, "likes"),
  //     where(documentId(), "==", id.toString())
  //   );
  //   onSnapshot(q, (querySnapshot) => {
  //     querySnapshot.forEach((doc) => {
  //       if (doc.data().userId.includes(user.uid)) {
  //         console.log("is liked");
  //         setIsLiked(true);
  //       } else {
  //         console.log("not liked");
  //         setIsLiked(false);
  //       }
  //     });
  //   });
  // };

  // useEffect(() => {
  //   getLikes();
  // }, [user]);

  function Score(props) {
    // console.log(props);
    switch (true) {
      case props.vote < 2:
        return (
          <p style={{ color: "orange" }}>&#9733;&#9734;&#9734;&#9734;&#9734;</p>
        );

      case props.vote >= 2 && props.vote < 4:
        return (
          <p style={{ color: "orange" }}>&#9733;&#9733;&#9734;&#9734;&#9734;</p>
        );

      case props.vote >= 4 && props.vote < 6:
        return (
          <p style={{ color: "orange" }}>&#9733;&#9733;&#9733;&#9734;&#9734;</p>
        );
      case props.vote >= 6 && props.vote < 8:
        return (
          <p style={{ color: "orange" }}>&#9733;&#9733;&#9733;&#9733;&#9734;</p>
        );

      case props.vote >= 8:
        return <p>&#9733;&#9733;&#9733;&#9733;&#9733;</p>;

      default:
        return <p>no rating</p>;
    }
  }
  const [isShowModal, setIsShowModal] = useState(false);

  const handleOptionContainerClick = (e) => {
    e.stopPropagation();
    setIsShowModal(true);
  };

  function WhichModal(props) {
    if (isShowModal) {
      if (!user) {
        return (
          <div className="overlay" onClick={() => setIsShowModal(false)}>
            <Link to={`/login`} state={info}>
              <Button variant="light">Log in for more options</Button>
            </Link>
          </div>
        );
      } else {
        return (
          <div className="overlay" onClick={() => setIsShowModal(false)}>
            {/* <Link to={`/discuss`} state={info}>
              <Button variant="light">Go to chat</Button>
            </Link> */}

            <Container
              className="option-container"
              onClick={handleOptionContainerClick}
            >
              <Row>
                <Col xs={2}>
                  <IconButton xs={2}>
                    <BookmarkBorderIcon style={{ color: "red" }} />
                  </IconButton>
                </Col>
                <Col className="d-flex justify-content-start">
                  <p>Add to watchlist</p>
                </Col>
              </Row>

              <Row>
                <Col xs={2}>
                  <IconButton>
                    <ForumIcon />
                  </IconButton>
                </Col>
                <Col className="d-flex justify-content-start">
                  <p>Go to chatroom</p>
                </Col>
              </Row>
            </Container>
          </div>
        );
      }
    }
  }

  return (
    <>
      <Col className="d-flex justify-content-center ">
        <Card
          style={{ width: "18rem", border: "none" }}
          className="shadow-sm p-3 mb-5 bg-white rounded d-flex justify-content-between"
        >
          <Link
            to={`/browse/${id}`}
            state={info}
            style={{ textDecoration: "none" }}
          >
            <Card.Img variant="top" src={image} />
          </Link>
          <div className="more-vert-container">
            <MoreVertIcon onClick={() => setIsShowModal(true)} />
          </div>
          <div>
            <Link
              to={`/browse/${id}`}
              state={info}
              style={{ textDecoration: "none" }}
            >
              <Card.Body className="movie-title">{title}</Card.Body>
            </Link>

            <Row className="likes-container">
              <Col xs={2}>
                <Likes info={info} />
              </Col>
              <Col xs={6}>
                <Score vote={vote}></Score>
              </Col>
            </Row>
          </div>

          <WhichModal />

          {/* {user && <Likes info={info} isLiked={isLiked} />} */}
        </Card>
      </Col>
    </>
  );
}

export default Movie;
