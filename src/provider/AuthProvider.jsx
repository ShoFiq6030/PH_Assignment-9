import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";

import app from "../utils/firebaseConfig";

export const AuthContext = createContext();

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  //  observer function to keep user state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // create user with email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user with email and password

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout
  const logout = () => {
    return signOut(auth);
  };

  // google signin
  const googleSignin = () => {
    return signInWithPopup(auth, provider);
  };

  // update useInfo
  const updateProfileInfo = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };

  // password reset
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const authData = {
    createUser,
    user,
    setUser,
    login,
    logout,
    googleSignin,
    updateProfileInfo,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
}
