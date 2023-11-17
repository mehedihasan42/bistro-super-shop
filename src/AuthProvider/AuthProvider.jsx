import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const [loader,setLoader] = useState(true)

    const signUp = (email,password) =>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logIn = (email,password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        setLoader(true)
        return signOut(auth)
    }

    const updateUser = (name)=>{
        return updateProfile(auth.currentUser,{
              displayName: name
        })
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            console.log('current user',currentUser)
            setLoader(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])

    const authInfo = {
        user,
        loader,
        signUp,
        logIn,
        logOut,
        updateUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;