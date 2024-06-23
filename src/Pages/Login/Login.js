import { useState } from 'react';
import React from 'react';
import './Login.css'
import user_icon from './assets/person.png'
import email_icon from './assets/email.png'
import password_icon from './assets/password.png'

export const Login = () => {
  const [action,setAction]=useState("Login");
  return (

    <div  className='wrapper'>

<div className={action === "Login" ? 'photo login-photo' : 'photo signup-photo'}>
{action === "Login" ? "Login Get access to your Orders, Wishlist and Recommendations" : "Sign up  with your Email Id to get started"}
</div>
    <div className='loginContainer'>
      <div className='loginHeader'>
        <div className='loginText'>{action}</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        {
          action==="Login"?<div></div>:<div className='input'>
          <img src={user_icon} alt=''/>
          <input type='text' placeholder='Name'/>
        </div>
        }
        
        <div className='input'>
          <img src={email_icon} alt=''/>
          <input type='email' placeholder='Email Id'/>
        </div>
        <div className='input'>
          <img src={password_icon}alt=''/>
          <input type='password' placeholder='Password'/>
        </div>
      </div>
      {
        action==="Sign Up"?<div></div>:  <div className='forgot-password'>forgot password?<span>Click Here!</span></div>
      }
    
      <div className='submit-container'>
      <div className={action==="Login"?"submit gray":"submit"}onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
      </div>




    
    </div>

    </div> 
    
  )
}
