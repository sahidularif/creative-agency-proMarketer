import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import logo from '../../../images/logo/brand4.png'
import google from '../../../images/google.png';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    //User state
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        success: false,
    });

    // Google sign in
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email, photoURL } = result.user;
                const signedInUser = { name: displayName, email, picture: photoURL };
                setLoggedInUser(signedInUser);
                setUser(result)
                history.replace(from);
                console.log(result)
            }).catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage);
            });
    }


    return (
        <section className='container'>
            <div className='d-flex justify-content-center flex-column align-items-center my-5'>
                <div className='row mb-2'>
                    <Link to='/'>
                        <div className='col-md-12 text-center mb-3'>
                            <img
                                style={{ width: '150px', height: '47px' }}
                                src={logo}
                                alt=''
                            />
                        </div>
                    </Link>
                </div>

                <div className='card login-area rounded'>
                    <div className='card-body d-flex justify-content-center align-items-center flex-column'>
                        <h4 className='card-title text-center mb-4 mt-1'>Login With</h4>
                        <div className='social-login'>
                            <button className='btn' onClick={handleGoogleSignIn}>
                                <img src={google} alt='google icon' />{' '}
                                <span>Continue with Google</span>
                            </button>
                        </div>
                        <div className='form-group text-center mt-3' id='formForget'>
                            <span>Don't have an account?</span>{' '}
                            <span
                                style={{ cursor: 'pointer', color: '#3F90FC' }}
                                onClick={handleGoogleSignIn}
                            >
                                Create an account
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;