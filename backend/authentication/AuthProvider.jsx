import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase_config";
import { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "./authContext";

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [signUpError, setSignUpError] = useState(false);
  const [signInError, setSignInError] = useState(false);

  const loginUser = async (email, password) => {
    setIsLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      if (!response) {
        throw new Error("something went wrong...");
      } else {
        setIsLoggedIn(true);
      }
      return response;
    } catch (e) {
      setSignInError(true);
    } finally {
      setIsLoading(false);
    }
  };

  /*
  const createUser = async (email, password) => {
    setIsLoading(true);
    setSignUpError(false);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (!response.user) {
        throw new Error("something went wrong...");
      } else {
        const user = response.user;
        setUser(user);
        return response;
      }
    } catch (e) {
      setSignUpError(true);
    } finally {
      setIsLoading(false);
    }
  };*/

  /*
  const signOutUser = () => {
    setIsLoading(false);
    setUser(null);
    return signOut(auth);
  };*/

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setIsLoggedIn(true);
        setIsLoading(false);
      } else {
        setIsLoggedIn(false);
        setIsLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const authValue = {
    loginUser,
    isLoggedIn,
    isLoading,
    setIsLoggedIn,
    signUpError,
    setSignUpError,
    signInError,
    setSignInError,
  };

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
