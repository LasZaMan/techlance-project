import React from 'react'
import logo from "./TechlanceLogo.png";
import image2 from "./image 16.png";
import { Link } from 'react-router-dom';

const Createaccount = () => {
  return (
    <div className="container">
        <div className="createAccImg">
            <Link to={'/sign-in'}><img src={logo} width="150" id="techlance" alt='image'/></Link>
            <br/>
            <img src={image2} id="guy" alt='image'/>
            <h2 className="leftText">We make transitioning from learning to building seamless</h2>
        </div>
         
        <div className="createAcc">
            <img src={logo}  id="techlanceOter" alt='image'/>
            <div className="headings">
                <h1 className="createAccText">Create an account</h1>
                <h3 className="createAccText">Please input your details as specified below</h3>
            </div>
            <form action="/sign-in">
               
                <div className="cont">
                    <input type="text" id="first" className="createAccountIP" placeholder="E.g. Avery"/>
                    <input type="text" id="second" className="createAccountIP" placeholder="E.g. Wilson"/>
                </div>
                <input type="email" id="third" className="createAccountIP" placeholder="E.g. somebody@example.com"/>
                <input type="password" id="fourth" className="createAccountIP"/>
                <input type="password" id="fifth" className="createAccountIP"/>
                <p id="passwords" className='highlight'></p>
                <input type="checkbox" id="agreement" checked />
                <label for="agreement">I agree to the terms and conditions</label>
                <p id="agree" className='highlight'></p>
                <input type="submit" value="Sign Up" className="createAccountIP" id="signup"/>
            </form>
            <div className="others">
                <h4 className="OR">OR</h4>
                <br/>
                <div id="icon">
                    <i className="fa fa-google" aria-hidden="true"></i> 
                    <i className="fa fa-facebook-official" aria-hidden="true"></i>
                </div>
                <i className="fa fa-google" aria-hidden="true"></i><a href="" className="google-signup">Sign-up with
                    Google</a>
                <br/><br/>
                <i className="fa fa-facebook-official" aria-hidden="true"></i><a href="" className="google-signup">Sign-up
                    with Facebook</a>
            </div>
        </div>
    </div>
  )
}

export default Createaccount