import React from 'react'
import {auth,provider} from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const nagivate = useNavigate();

    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth,provider);
        console.log(result);
        nagivate("/");  
    };
    
  return (
    <div>
        <p>Sign In With Google To Continue</p>
        <button onClick={signInWithGoogle} >Sign In With Google</button>
    </div>
  )
}

export default Login
