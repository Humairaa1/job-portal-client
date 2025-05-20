import React, { useContext } from 'react'
import AuthContex from '../context/AuthContext'
import { Navigate, useLocation } from 'react-router-dom';

export default function PrivateRoute({ children }) {

    const { user,loading } = useContext(AuthContex);
    const location = useLocation();

    if(loading){
        return <span className="loading loading-bars loading-xl"></span>
    }

    if(user){
        return children;
    }

    return <Navigate to={'/login'} state={location?.pathname}></Navigate>
}
