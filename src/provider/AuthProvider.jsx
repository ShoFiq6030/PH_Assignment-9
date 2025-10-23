import React, { createContext } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../utils/firebaseConfig";

export const AuthContext = createContext();

const auth = getAuth(app);

export default function AuthProvider({ children }) {

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  
  const authData = { createUser };
  return <AuthContext value={authData}>{children}</AuthContext>;
}
