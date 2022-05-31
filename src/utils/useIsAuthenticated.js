import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";

const useIsAuthenticated = () => {
  const { user } = useContext(AuthContext);
  const isAuthenticated = user !== null ? true : false;
  return isAuthenticated;
};

export default useIsAuthenticated;
