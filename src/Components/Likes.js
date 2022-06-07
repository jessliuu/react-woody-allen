import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import Button from "@mui/material/Button";
import {
  doc,
  setDoc,
  getDoc,
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
// import { FavContext } from "../Contexts/FavContext";

function Likes(props) {
  const info = props.info;
  const id = props.info.id;

  const [isFav, setIsFav] = useState(false);
  const { user, register } = useContext(AuthContext);
  const isLiked = props.isLiked;

  const initialIsFav = () => {
    if (isLiked) {
      setIsFav(true);
    } else {
      setIsFav(false);
    }
  };

  useEffect(() => {
    initialIsFav();
  }, []);

  console.log("props.isLiked", props.isLiked);
  const handleClickLike = async () => {
    if (!isFav) {
      // setIsLiked(true);
      // await updateDoc(doc(db, "users", user.uid), {
      //   favorites: arrayUnion(id),
      // action: "add",
      // userEmail: user.email,
      // });

      const docRef = doc(db, "likes", id.toString());
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        if (!docSnap.data().userId.includes(user.uid)) {
          setIsFav(true);
          await updateDoc(doc(db, "likes", id.toString()), {
            userId: arrayUnion(user.uid),
            userEmail: arrayUnion(user.email),
          });
        } else {
          // setIsLiked(true);
          // await updateDoc(doc(db, "users", user.uid), {
          //   favorites: arrayRemove(id),
          // action: "remove",
          // userEmail: user.email,
          // });
          setIsFav(false);
          await updateDoc(doc(db, "likes", id.toString()), {
            userId: arrayRemove(user.uid),
            userEmail: arrayRemove(user.email),
          });
        }
      } else {
        await setDoc(doc(db, "likes", id.toString()), {
          userId: [user.uid],
          userEmail: [user.email],
        });
      }
    }
  };

  return (
    <div>
      <Button onClick={() => handleClickLike()}>
        {props.isLiked === true || isFav === true ? (
          <ThumbUpIcon />
        ) : (
          <ThumbUpIcon color="disabled" />
        )}
      </Button>
    </div>
  );
}

export default Likes;
