import React from 'react'
import logo from "./TechlanceLogo.png";
import image from "./image 17.png";
import image2 from "./image 16.png";
import { Link } from 'react-router-dom';

const VerifyPass = () => {
    return (
        <div className="container">
            <div className="createAccImg">
                <Link to={'/sign-in'}><img src={logo} width="150" id="techlance" alt='image' /></Link>
                <br />
                <img src={image2} id="guy" alt='image' />
                <h2 className="leftText">We make transitioning from learning to building seamless</h2>
            </div>

            <div className="createAcc verifyEmail">
                <div className="headings resetPassword">
                    <h1 className="createAccText">Forgot Password?</h1>
                    <h3 className="createAccText" id="resetPassword">Don't panic, we'll send you reset instructions.
                    </h3>
                    <br />
                    <form action="checkMail.html" onsubmit="return resetPassword()">
                        <input type="email" id="resetPasswordIP" className="createAccountIP" placeholder="    Email Address" />
                        <p className='highlight' id="mail2"></p>
                        <br />
                        <br />
                        <input type="submit" value="Request Password" className="createAccountIP emailVerify" id="signup3" />
                    </form>
                    <br /><br /><br />
                    <p className="signupTxt">Remember password?</p><a href="welcomeBack.html" className="signupbtn">Log in.</a>
                </div>

            </div>
        </div>
    )
}

export default VerifyPass

