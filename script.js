
// login page

// SHOW/HIDE functions
function showSignup() {
  document.getElementById("signin-form").style.display = "none";
  document.getElementById("signup-form").style.display = "block";
}

function showSignin() {
  document.getElementById("signin-form").style.display = "block";
  document.getElementById("signup-form").style.display = "none";
}

// Firebase Configuration (yours)
const firebaseConfig = {
  apiKey: "AIzaSyAKOo2kcb0607PCC-0eTYPUBCPy4891Cs8",
  authDomain: "signinsignup-8e44b.firebaseapp.com",
  projectId: "signinsignup-8e44b",
  storageBucket: "signinsignup-8e44b.appspot.com",
  messagingSenderId: "503024675139",
  appId: "1:503024675139:web:f67f7dd2480c94c74627f6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// SIGNUP Function
function signupUser() {
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const mobile = document.getElementById('mobile-number').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
          const user = userCredential.user;

          // Store extra details in Firestore
          return db.collection('users').doc(user.uid).set({
              firstName: firstName,
              lastName: lastName,
              mobile: mobile,
              email: email
          });
      })
      .then(() => {
          alert('Signup Successful!');
          showSignin();
      })
      .catch((error) => {
          alert(error.message);
      });
}

// SIGNIN Function
function signinUser() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert('Login Successful!');
      window.location.href = 'index1.html';
    })
    .catch((error) => {
      console.error('Error Code:', error.code);
      console.error('Error Message:', error.message);
      alert(`Login failed: ${error.message}`);
    });

}
//Forgot BUtton
// Show the Forgot Password modal
function showForgotPassword() {
  document.getElementById("signin-form").style.display = "none";
  document.getElementById("forgot-password-modal").style.display = "block";
}

// Hide the Forgot Password modal and go back to sign in
function hideForgotPassword() {
  document.getElementById("signin-form").style.display = "block";
  document.getElementById("forgot-password-modal").style.display = "none";
}

// Send password reset email
function resetPassword() {
  const email = document.getElementById('forgot-email').value;

  // Firebase Authentication to send password reset email
  firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
      // Email sent successfully
      alert('Check your email to reset your password.');
      hideForgotPassword(); // Hide the modal after success
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
      alert(`Error: ${errorMessage}`);
    });
}





/* ---




-- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
  var menuBtn = document.getElementById("myNavMenu");

  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};

function headerShadow() {
  const navHeader =document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}


/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText",{
  strings : ["AI & ML Enthusiast","ML Engineer","Researcher","Data scientist"],
  loop : true,
  typeSpeed : 100, 
  backSpeed : 80,
  backDelay : 2000
})


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true     
})

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
origin: 'left',
distance: '80px',
duration: 2000,
reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
origin: 'right',
distance: '80px',
duration: 2000,
reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
const scrollY = window.scrollY;

sections.forEach(current =>{
  const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute('id')

  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

  }  else {

    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

  }
})
}

window.addEventListener('scroll', scrollActive)



