import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const _AuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ token: "", user: "" });

  useEffect(() => {
    let user = Cookies.get("auth");

    if (user) {
      setAuth(JSON.parse(user));
    }
  }, []);

  //       https://rescue-three.vercel.app
  axios.defaults.baseURL = "http://93.127.197.218:5001/v1/rescue";
  axios.defaults.headers.common["Cookies"] = auth.token;
  // axios.defaults.withCredentials = true;

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
