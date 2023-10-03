import React from 'react'
import logo from "./TechlanceLogo.png";
import image from "./image 17.png";
import image2 from "./image 16.png";
import { Link } from 'react-router-dom';

const Verifyemail = () => {
  return (
    <div class="container">
    <div class="createAccImg">
    <Link to={'/sign-in'}><img src={logo} width="150" id="techlance" alt='image'/></Link>
        <br/>
        <img src={image2} id="guy" alt='image'/>
        <h2 class="leftText">We make transitioning from learning to building seamless</h2>
    </div>

    <div class="createAcc verifyEmail">
        <img src={logo}  id="techlanceOter" alt='image'/>
        <div class="headings">
            <h1 class="createAccText">Verify your email</h1>
            <h3 class="createAccText" id="verifyMail">A verification mail has been sent to your email.
                Please check and complete your registration
            </h3>
            <br/>
            <input type="submit" value="Verify Email" class="createAccountIP emailVerify" id="signup"/>
        </div>
        
    </div>
</div>
  )
}

export default Verifyemail
