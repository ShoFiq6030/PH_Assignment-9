import React, { createContext, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../utils/firebaseConfig";

export const AuthContext = createContext();

const auth = getAuth(app);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
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

  const authData = { createUser, user, setUser };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
}
