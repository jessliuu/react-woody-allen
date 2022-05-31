import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState("");

  const redirectTo = useNavigate();

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("userCredential", userCredential);
      setUser(userCredential.user);
      redirectTo("/");
    } catch (error) {
      console.log(error);
      setUser(null);
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  };

  const register = async (email, password) => {
    console.log(email);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("userCredential", userCredential);
      setUser(userCredential.user);
      redirectTo("/");
    } catch (error) {
      console.log(error);
      setUser(null);
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    }
  };

  const checkIfLoggedIn = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(user);
      } else {
        setUser(null);
      }
    });
  };

  useEffect(() => {
    checkIfLoggedIn();
  }, []);

  const logout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        console.log("loggedoutuserCredential", user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout, register }}>
      {props.children}
    </AuthContext.Provider>
  );
};
