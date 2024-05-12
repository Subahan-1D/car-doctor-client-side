import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProviders = ({ children }) => {
const [user,setUser] = useState(null);
const [loading,setLoading] = useState(true); 


const createUser = (email,password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth ,email,password)
}
//sign in 

const singIn = (email,password) =>{
    setLoading(true)
   return signInWithEmailAndPassword (auth,email,password)

}


 useEffect(()=>{
   const unSubscribe = onAuthStateChanged(auth,currentUser =>{
        if(currentUser){
            setUser(currentUser);
            console.log('Current User ', currentUser);
            setLoading(false)
        }
    });
    return () =>{
        return unSubscribe;
    }
 },[])

    const authInfo = {
        user,
        loading,
        createUser,
        singIn

    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;