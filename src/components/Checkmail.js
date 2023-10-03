import React from 'react'
import logo from "./TechlanceLogo.png";
import image from "./image 17.png";
import image2 from "./image 16.png";
import { Link } from 'react-router-dom';

const Checkmail = () => {
  return (
    <div className="container">
        <div className="createAccImg">
        <Link to={'/sign-in'}><img src={logo} width="150" id="techlance" alt='image'/></Link>
            <br/>
            <img src={image} id="guy" alt='guy'/>
            <h2 className="leftText">We make transitioning from learning to building seamless</h2>
        </div>

        <div className="createAcc verifyEmail">
            <img src="Techlance Logo.png"  id="techlanceOter" alt='logo'/>
            <div className="headings resetPassword">
                <h1 className="createAccText">Please check your email</h1>
                <h3 className="createAccText" id="checkEmail">A password reset link was sent to your email.
                    Click to retrieve your details
                </h3>
                <br/>
                <input type="button" value="Request Password" class="createAccountIP emailVerify" id="signup"/>
                <br/><br/><br/>
                <p className="signupTxt">Didn't recieve the email?</p><a href="resetPassword.html" className="signupbtn">Click here to resend.</a>
            </div>
        </div>
    </div>
  )
}

export default Checkmail