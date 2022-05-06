import React from 'react';
import './Register.css'

const Register = () => {
    return (
        <div className='register'>
           <h3>Please Register now!!</h3>
           <form action="">
                <input type="text" placeholder='Write your name' />
                <br />
                <input type="email" name="" id="" placeholder='Write your email' />
                <br />
                <input type="password" name="" id="" placeholder='Your password' />
                <br />
                <input type="submit" value="Register" />
            
            </form> 
        </div>
    );
};

export default Register;