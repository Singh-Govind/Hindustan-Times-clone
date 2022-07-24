import React from "react";
import { useState, createContext, useContext } from "react";
import {
  GoogleAuthProvider,
  signInWithRedirect,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  // const navigate = useNavigate();

  function googleSignIn() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  }

  const logOut = () => {
    signOut(auth);
    setIsAuthenticated(false);
    setUser({});
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const handleAuthentication = (value) => {
    setIsAuthenticated(value);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        handleAuthentication,
        googleSignIn,
        user,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const UserAuth = () => {
  return useContext(AuthContext);
};
