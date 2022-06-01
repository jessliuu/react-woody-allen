import { collection, getDocs } from "firebase/firestore";
import React, { useState, useContext, useEffect } from "react";
import { db } from "../config";
import { AuthContext } from "../Contexts/AuthContext";

function Favorites() {
  const [favs, setFavs] = useState();
  const { user } = useContext(AuthContext);

  const getFavorites = async () => {
    const querySnapshot = await getDocs(collection(db, "likes"));
    const myFavs = [];

    querySnapshot.forEach((doc) => {
      if (user.email === doc.data().user) {
        console.log(doc.data());
        myFavs.push(doc.data());
        setFavs(myFavs);
      } else {
        setFavs(null);
      }
    });
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <div>
      You have liked:
      {favs &&
        favs.map((fav) => {
          return <p>{fav.favorites}</p>;
        })}
    </div>
  );
}

export default Favorites;
