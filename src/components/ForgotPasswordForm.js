import React, { useState } from 'react';
import logo from "./TechlanceLogo.png";
import image from "./image 17.png";
import { Link } from 'react-router-dom';


function ForgotPasswordForm() {
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
        <div className='container'>
            <div class="createAccImg">
                <Link to={'/sign-in'}><img src={logo} width="150" id="techlance" alt='foto' /></Link>
                <br />
                <img src={image} id="guy" alt='file' />
                <h2 class="leftText">We make transitioning from learning to building seamless</h2>
            </div>
            <div className='headings resetPassword'>
                <img src={logo} id="techlanceOter" alt='man' />
                <div class="headings resetPassword">
                    <h1 class="createAccText">Forgot Password?</h1>
                    <h3 class="createAccText" id="resetPassword">Don't panic, we'll send you reset instructions.
                    </h3>
                    <br />
                    <form onSubmit={handleSubmit} action='/reset-password'>

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
                        <br />


                        <input
                            type="submit"
                            value="Request Password" class="createAccountIP"
                            id="emailVerify"
                        />
                    </form>
                    <br /><br /><br />
                    <p
                        class="signupTxt">
                        Remember password?
                    </p>
                    <Link
                        to={'/sign-in'}
                        className="signupbtn new">
                        Log in.
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ForgotPasswordForm;
