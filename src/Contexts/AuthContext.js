import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../config";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);
  console.log("context");
  // const register = async (email, password) => {
  //   try {
  //     const userCredential = await createUserWithEmailAndPassword(
  //       auth,
  //       email,
  //       password
  //     );
  //     console.log(userCredential);
  //   } catch (error) {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //   }
  // };

  const register = async (email, password) => {
    console.log(email);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("userCredential", userCredential);
      // setUser(userCredential.user);
      // redirectTo("/");
    } catch (error) {
      console.log(error);
      // setUser(null);
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, register }}>
      {props.children}
    </AuthContext.Provider>
  );
};
