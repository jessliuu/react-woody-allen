import React, { useContext, useEffect, useState } from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Likes from "./Likes";
import { AuthContext } from "../Contexts/AuthContext";
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
import { db } from "../config";
function Movie(props) {
  const info = props.info;
  const id = props.info.id;
  const title = props.info.original_title;
  const image = "https://image.tmdb.org/t/p/w500/" + props.info.poster_path;
  const vote = props.info.vote_average;
  const [isLiked, setIsLiked] = useState(false);
  const { user } = useContext(AuthContext);
  const getLikes = () => {
    const q = query(
      collection(db, "likes"),
      where(documentId(), "==", id.toString())
    );
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.data().userId.includes(user.uid)) {
          console.log("is liked");
          setIsLiked(true);
        } else {
          console.log("not liked");
          setIsLiked(false);
        }
      });
    });
  };

  useEffect(() => {
    getLikes();
  }, [user]);

  // function Score(props) {
  //   // console.log(props);
  //   switch (true) {
  //     case props.vote < 2:
  //       return <p>&#9733;&#9734;&#9734;&#9734;&#9734;</p>;

  //     case props.vote >= 2 && props.vote < 4:
  //       return <p>&#9733;&#9733;&#9734;&#9734;&#9734;</p>;

  //     case props.vote >= 4 && props.vote < 6:
  //       return <p>&#9733;&#9733;&#9733;&#9734;&#9734;</p>;
  //     case props.vote >= 6 && props.vote < 8:
  //       return <p>&#9733;&#9733;&#9733;&#9733;&#9734;</p>;

  //     case props.vote >= 8:
  //       return <p>&#9733;&#9733;&#9733;&#9733;&#9733;</p>;

  //     default:
  //       return <p>no rating</p>;
  //   }
  // }
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <Col className="d-flex justify-content-center ">
        <Card
          style={{ width: "18rem", border: "none" }}
          className="shadow-sm p-3 mb-5 bg-white rounded d-flex justify-content-between"
          onMouseOver={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          <div>
            <Card.Img variant="top" src={image} />
            {/* {isShown && (
              <div className="overlay">
                <Link to={`/browse/${id}`} state={info}>
                  <Button variant="light">Read More</Button>
                </Link>
              </div>
            )} */}
          </div>
          {user && <Likes info={info} isLiked={isLiked} />}
        </Card>
      </Col>
    </>
  );
}

export default Movie;
