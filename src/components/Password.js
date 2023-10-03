import React from 'react'
import logo from "./TechlanceLogo.png";
import image from "./image 17.png";
import image2 from "./image 16.png";
import {Link, useNavigate } from 'react-router-dom';

const Password = () => {
  return (
    
    <div className="container">
        <div className="createAccImg">
        <Link to={'/sign-in'}><img src={logo} width="150" id="techlance" alt='image'/></Link>
            <br/>
            <img src={image} id="guy" alt='image'/>
            <h2 className="leftText">We make transitioning from learning to building seamless</h2>
        </div>

        <div className="createAcc verifyEmail">
            <img src={logo}  id="techlanceOter" alt='image'/>
            <div className="headings resetPassword">
                <h1 className="createAccText">Password Reset Successful</h1>
                <h3 className="createAccText" id="resetPassword">You have successfuly changed your password.
                    Continue to sign in
                </h3>
                <br/>
               
                <br/><br/><br/>
                <Link to={'/sign-in'} className="signupbtn new">Sign In</Link>

        </div>


        </div>
    </div>
  )
}

export default Password