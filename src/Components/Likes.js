import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import Button from "@mui/material/Button";
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
import React, { useContext, useEffect, useState } from "react";
import { db } from "../config";
import { AuthContext } from "../Contexts/AuthContext";

function Likes(props) {
  const info = props.info;
  const id = props.info.id;
  const [like, setLike] = useState(false);
  const [isFav, setIsFav] = useState(false);
  const { user, register } = useContext(AuthContext);

  const getLikes = () => {
    const q = query(
      collection(db, "users"),
      where(documentId(), "==", user.uid)
    );
    onSnapshot(q, (querySnapshot) => {
      const myLikes = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.data().favorites);
        myLikes.push(doc.data().favorites);
        if (myLikes.includes(id)) {
          setIsFav(true);
        }
      });
    });
  };

  useEffect(() => {
    getLikes();
  }, [like]);

  const handleClickLike = () => {
    console.log(id);
    if (!like) {
      setLike(true);
      setIsFav(true);
    } else {
      setLike(false);
      setIsFav(false);
    }
  };

  const createLikes = async () => {
    if (!like) {
      await updateDoc(doc(db, "users", user.uid), {
        favorites: arrayRemove(id),
        action: "remove",
      });
    } else {
      await updateDoc(doc(db, "users", user.uid), {
        favorites: arrayUnion(id),
        action: "add",
      });
    }
  };

  useEffect(() => {
    createLikes();
  }, [like]);

  return (
    <div>
      <Button onClick={() => handleClickLike()}>
        {isFav === false ? <ThumbUpIcon color="disabled" /> : <ThumbUpIcon />}
      </Button>
    </div>
  );
}

export default Likes;
