import React, { useContext } from 'react';
import AuthContex from '../context/AuthContext';

const Google = () => {

    const {loginWithGoogle} = useContext(AuthContex);

    const handleGoogleLogin=()=>{
        loginWithGoogle()
        .then(result=>{
            console.log(result.user)
        })
        .then(error=>{
            console.log(error.message)
        })
    }

    return (
        <div>          
            <button onClick={handleGoogleLogin} className='btn'>Login With Google</button>
        </div>
    );
};

export default Google;