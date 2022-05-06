import { getAuth } from 'firebase/auth';
import React from 'react';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';
import './Login.css'


const auth = getAuth(app);
const Login = () => {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.from?.state?.pathname || '/';

  const handleGoogleSignIn = () =>{
      signInWithGoogle()
      .then(()=>{
          navigate(from, {replace:true})
      })
  }
    return (
        <div className='login'>
            <h2>Please Login</h2>
            <div style={{margin:'20px'}}>
                <button onClick={handleGoogleSignIn}>Google sign in</button>
            </div>
            <form action="">
                
                <input type="email" name="" id="" placeholder='Write your email' />
                <br />
                <input type="password" name="" id="" placeholder='Your password' />
                <br />
                <input type="submit" value="Login" />
            
            </form> 
        </div>
    );
};

export default Login;