// --------General Parameters--------//
var alltrue = true;
//-------------Clear Validation----------//
function allclear() {
    firstName.style.border = "";
    lastName.style.border = "";
    thirdIP.style.border = "";
    createpassword.style.border = "";
    confirmPassword.style.border = "";
    passwords.textContent = "";
    agree2.textContent = "";
};
//-------------Clear Validation----------//
function allclear2(){
    forgotPasswordIP1.style.border = "";
    mailText.textContent = "";

};
//-------------Clear Validation----------//
function allclear3(){
    resetPasswordIP1.style.border = "";
    mail2.textContent = "";

};
//-------------Clear Validation----------//
function allclear4(){
    welcomeBackIP1.style.border = "";
    welcomeBackIP2.style.border = "";
    incorrectPassword.textContent = "";
};
// ---------Create Account Input Fields----------- //
const thirdIP = document.getElementById('third');
const createpassword = document.getElementById('fourth');
const confirmPassword = document.getElementById('fifth');
const createAccIP6 = document.getElementById('agreement');
const agree2 = document.getElementById('agree');
const createAccSignup = document.getElementById('signup');
const firstName = document.getElementById('first');
const lastName = document.getElementById('second');
const passwords = document.getElementById('passwords');

// ---------Forgot Password Input Fields----------- //
const forgotPasswordIP2 = document.getElementById('emailVerify');
const forgotPasswordIP1 = document.getElementById('forgotPassword');
const mailText = document.getElementById('mail');

// ---------Welcome Back Input Fields------------- //
const welcomeBackIP1 = document.getElementById('welcomeBackHere');
const welcomeBackIP2 = document.getElementById('welcomeBackEnt');
const incorrectPassword = document.getElementById('incorrectPassword')
const welcomeBackIP3 = document.getElementById('signup2');

// ---------Reset Password Input Fields----------- //
const resetPasswordIP1 = document.getElementById('resetPasswordIP');
const resetPasswordIP2 = document.getElementById('signup3');
const mail2 = document.getElementById('mail2');

// ------------Forgot Password Verification-------------//

function change() {
    allclear2();
    if (forgotPasswordIP1.value == "") {
        forgotPasswordIP1.focus;
        forgotPasswordIP1.style.border = "solid 2px red";
        mailText.textContent = "*Please enter a valid Email address";
        return false;
    };
};
// ------------Create Account Verification-------------//

function createAccount() {
    allclear();
    if (firstName.value == "") {
        firstName.style.border = "solid 2px red";
        alltrue = false;
    };
    if (lastName.value == "") {
        lastName.style.border = "solid 2px red";
        alltrue = false;
    };
    if (thirdIP.value == "") {
        thirdIP.style.border = "solid 2px red";
        alltrue = false;
    };
    if (createpassword.value == "") {
        createpassword.style.border = "solid 2px red";
        alltrue = false;
    };
    if (confirmPassword.value == "") {
        confirmPassword.style.border = "solid 2px red";
        alltrue = false;
    };
    if (confirmPassword.value != createpassword.value) {
        confirmPassword.style.border = "solid 2px red";
        passwords.textContent = "*Passwords do not match";
        alltrue = false;
    };
    return alltrue;
};
// ---------Reset Password Verification-----//

function resetPassword() {
    allclear3();
    if (resetPasswordIP1.value == "") {
        resetPasswordIP1.focus;
        resetPasswordIP1.style.border = "solid 2px red";
        mail2.textContent = "*Please enter a valid Email address";
        return false;
    };
};

// ---------Welcomeback Verification-----//
function welcomeBack(){
    allclear4();
    if (welcomeBackIP1.value == "") {
        welcomeBackIP1.style.border = "solid 2px red";
        alltrue = false;
    };
    if (welcomeBackIP2.value == "") {
        welcomeBackIP2.style.border = "solid 2px red";
        incorrectPassword.textContent = "*Confirm details and try again";
        alltrue = false;
    };
    return alltrue;
};