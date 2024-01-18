import React from "react";
import { useContext } from "react";
import AuthContext from "../context/AuthProviderDash";

const UseAuthDash = () => {
  return useContext(AuthContext);
};

export default UseAuthDash;
