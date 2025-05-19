import React, { useEffect, useState } from 'react'
import AuthContex from './AuthContext'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from '../Firebase/firebase.init';


export default function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const loginUser = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    

    useEffect(()=>{
        const unSubscribed = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            console.log("current user : ",currentUser);
            setLoading(false);
        });
        return ()=>{
            unSubscribed();
        }
        
    },[])

    const userInfo = {
        user,
        setUser,
        createUser,
        loginUser,
        logOut
    }

    return (
        <AuthContex.Provider value={userInfo}>
            {children}
        </AuthContex.Provider>
    )
}
