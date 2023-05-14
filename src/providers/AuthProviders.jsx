import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProviders = ({ children }) => {
    const[user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
// Register user--------
    const createUser = (email, password)=>{
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
    //loggedUser----------
    const signInUser = (email, password) =>{
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    }
// logOut user----------
    const logOut =() =>{
      setLoading(true);
      return signOut(auth);
    }
    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, loggedUser =>{
        // console.log('logged in user inside ', loggedUser);
        setUser(loggedUser);
        setLoading(false);
      })

      return () =>{
        unsubscribe();
      }

    }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    logOut,
  };
  return(
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>

  );
};

export default AuthProviders;
