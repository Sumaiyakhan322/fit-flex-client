import { createContext } from "react";
import app from "../Firebase/firebase_config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
// import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useState } from "react";
import { useEffect } from "react";


export const AuthContext=createContext(null)

const auth=getAuth(app)

const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
    // const axiosPublic=useAxiosPublic();
   

    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(null);
    const createUser=(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
     }
    
     const googleSignIn=()=>{
      setLoading(true);
      return signInWithPopup(auth,provider)
    
     }
     const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
     }
    const logout=()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
           setUser(currentUser)
           setLoading(false)
           console.log(user);
          
          
        })
       return ()=>{
           unsubscribe()
        }
         },[user])
         const authInfo={user,loading,createUser,signIn,logout,googleSignIn}
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;