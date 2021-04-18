import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";

import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import firebaseConfig from './firebase.config';
import google from './Group 573.png'
import Navbar from '../Home/Navbar/Navbar';


const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }




  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        const { displayName, email, photoURL } = result.user;
        const signInUser = { name: displayName, email, photoURL }
        console.log(signInUser)
        setLoggedInUser(signInUser)
        history.replace(from)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  }
  return (
    <div>
      <Navbar></Navbar>
      <div class="card text-center m-5">
        <div class="card-header">
          {loggedInUser.name}
        </div>
        <div class="card-body ">
          <h5 class="card-title"> Verifying who are you  </h5>
          <p class="card-text">Please sign in with Google</p>

          <button className="btn btn-outline-success" onClick={handleGoogleSignIn}>  <img src={google} style={{ width: '30px' }} alt="" /> Continue with Google</button>
        </div>

        <div class="card-footer text-muted">
          <p>&#128512;</p>
        </div>
      </div>
    </div>
  );
};

export default Login;