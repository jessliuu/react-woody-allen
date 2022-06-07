import {
  collection,
  documentId,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { createContext, useContext, useState } from "react";
import { db } from "../config";
import { AuthContext } from "./AuthContext";

export const FavContext = createContext();

export const FavContextProvider = (props) => {
  const { user, register } = useContext(AuthContext);
  const [isFav, setIsFav] = useState(false);

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

  return (
    <FavContext.Provider
      value={{
        getLikes,
        isFav,
        setIsFav,
      }}
    >
      {props.children}
    </FavContext.Provider>
  );
};

// Movies
const getLikes = () => {
  const q = query(
    collection(db, "likes"),
    where(documentId(), "==", id.toString())
  );
  onSnapshot(q, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log("doc.data()", doc.data());
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

// Likes
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
    // await updateDoc(doc(db, "users", user.uid), {
    //   favorites: arrayUnion(id),
    //   action: "add",
    //   userEmail: user.email,
    // });

    const docRef = doc(db, "likes", id.toString());
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      if (!docSnap.data().userId.includes(user.uid)) {
        setIsFav(true);
        await updateDoc(doc(db, "likes", id.toString()), {
          userId: arrayUnion(user.uid),
          userEmail: arrayUnion(user.email),
        });
      } else {
        await updateDoc(doc(db, "likes", id.toString()), {
          userId: arrayRemove(user.uid),
          userEmail: arrayRemove(user.email),
        });
        setIsFav(false);
      }
    } else {
      // doc.data() will be undefined in this case
      await setDoc(doc(db, "likes", id.toString()), {
        userId: [user.uid],
        userEmail: [user.email],
      });
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
