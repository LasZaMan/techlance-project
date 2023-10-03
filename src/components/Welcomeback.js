import React, { useState } from 'react'
import logo from "./TechlanceLogo.png";
import image2 from "./image 16.png";
import { Link } from 'react-router-dom';

const Welcomeback = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const validateEmail = () => {
        if (email.trim() === '' || !email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
            setError('Please enter a valid email address');
            return false;
        }
        setError('');
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateEmail()) {
            // Form submission logic here
            // If valid, you can send a reset password link
        }
    };

    return (
        <div className="container">
            <div className="createAccImg">
                <Link to={'/sign-in'}><img src={logo} width="150" id="techlance" alt='image' /></Link>
                <br />
                <img src={image2} id="guy" alt='image' />
                <h2 className="leftText">We make transitioning from learning to building seamless</h2>
            </div>

            <div className="createAcc welcomeBack">
                <img src={logo} id="techlanceOter" alt='image' />
                <div className="headings">
                    <h1 className="createAccText">Welcome back!</h1>
                    <h3 className="createAccText">Please input your login details</h3>
                </div>
                <form action="" onSubmit={handleSubmit}>
                <input
                            type="email"
                            className='createAccountIP'
                            id='forgotPassword'
                            name="email"
                            value={email}
                            placeholder="   e.g. somebody@example.com"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                         {error && <p id='mail' className="highlight">{error}</p>}
                    
                    <br />
                    <input
                        type="password"
                        id="welcomeBackEnt"
                        className="createAccountIP"
                        placeholder="Password"
                    />
                    <Link
                        to={'/reset-password'}
                        className="forgotPassword"
                    >
                        Forgot password?
                    </Link>
                    <p
                        id="incorrectPassword"
                        className='highlight'>

                    </p>
                    <br />
                    <input
                        type="submit"
                        value="Login"
                        className="createAccountIP"
                        id="signup2"
                    />
                </form>
                <div className="others">
                    <h4 className="OR">OR</h4>
                    <br />
                    <i className="fa fa-google" aria-hidden="true"></i><a href="" className="google-signup">Log in with Google</a>
                    <br /><br />
                    <i className="fa fa-facebook-official" aria-hidden="true"></i><a href="" className="google-signup">Log in with
                        Facebook</a>
                </div>
                <br />
                <br /><br />
                <p className="signupTxt">Don't have an account?</p><Link to={'/sign-up'} className="signupbtn">Sign up.</Link>
            </div>
        </div>
    )
}

export default Welcomeback