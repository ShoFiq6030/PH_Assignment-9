import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../utils/firebaseConfig";

export const AuthContext = createContext();

const auth = getAuth(app);

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
  const createUser = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // console.log("User created:", userCredential.user);
      setUser(userCredential.user);
      return userCredential.user;
    } catch (error) {
      console.error("Error creating user:", error.code, error.message);
    }
  };

  // login user with email and password

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout
  const logout = () => {
    return signOut(auth);
  };

  const authData = { createUser, user, setUser, login, logout };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
}
