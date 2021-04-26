import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import logo from '../../../images/logo/brand4.png'
import google from '../../../images/google.png';
import "firebase/auth";
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import {
    initializeLoginFramework,
    handleGoogleSignIn,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from './LoginManager';
const Login = () => {

 // Initialize Firebase
 initializeLoginFramework();

 //Handle New User:
 const [newUser, SetNewUSer] = useState(false);
 const [user, setUser] = useState({
   isSignedIn: false,
   name: '',
   email: '',
   success: false,
 });

// Error Message:
const [error, setError] = useState("")

// Context from app.js
 const [loggedInUser, setLoggedInUser] = useContext(UserContext);
const [display ,setDisplay] = useState(false)
// Redirecting to home/ taskRegistration Component if signed In successfully
 const history = useHistory();
 const location = useLocation();

 const { from } = location.state || {
   from: { pathname: '/' },
 };

 // Google Sign In
 const googleSignIn = () => {
   handleGoogleSignIn().then((res) => handleResponse(res, true));
 };
 

// Handle Response
 const handleResponse = (res, redirect) => { 
   //console.log(res.error)
   if (res.error) {
     newUser && setError(res.error)
     !newUser && setError(res.error)
   } else {
       setUser(res);
       setLoggedInUser(res)
       redirect && history.replace(from);
       newUser && setError("")
       !newUser && setError("")
   }
}



 // Validate user signIn/ SignUp form
 const handleBlur = (e) => {
   // debugger;
   let isFieldValid = true;
   // console.log(e.target.name, e.target.value);
   if (e.target.name === 'email') {
     isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
   }

   // Password with at least 1 number
   if (e.target.name === 'password') {
     const isPasswordValid = e.target.value.length >= 6;
     const passwordHasNumber = /\d{1}/.test(e.target.value);
     isFieldValid = isPasswordValid && passwordHasNumber;
   }

   if (isFieldValid) {
     const newUserInfo = { ...user };
     newUserInfo[e.target.name] = e.target.value;
     setUser(newUserInfo);
   }
   
 };

// When form submitted:
 const handleUserSubmit = () => {
   if(newUser && user.email && user.password){
     createUserWithEmailAndPassword(user.name, user.email, user.password)
     .then(res => {
       handleResponse(res, true);
       console.log(res)
     })
   }

   if(!newUser && user.email && user.password){
     signInWithEmailAndPassword(user.email, user.password)
     .then(res => {
       handleResponse(res, true);
       console.log(res)
     })
   }
   
 }

 // React hook form for extra form validation and error message
 const { register, handleSubmit, watch, errors } = useForm();
    return (
        <section className='container'>
            <div className='d-flex justify-content-center flex-column align-items-center'>
                <div className='row'>
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
                    {
                        !display ?
                            (
                                <div className="card-body d-flex justify-content-center align-items-center flex-column">

                                    <span>Create an account</span>{' '}
                                    <Form style={{ minWidth: '100%', maxWidth: '100%' }} onSubmit={handleSubmit(handleUserSubmit)}>
                                        <Form.Group>
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control name="email" type='text' ref={register({ required: true })} />
                                        </Form.Group>
                                        {errors.email && (
                                            <span className='error'>Email is required</span>
                                        )}
                                        <Form.Group>
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control name="password" type='password' ref={register({ required: true })} />
                                        </Form.Group>
                                        {errors.confirmPassword && (
                  <span className='error'>Password don't match</span>
                )}
                                        <div className="align-items-center text-center justify-content-center">
                                            <Button className=" rounded-pill" type='submit'>Create Account</Button>
                                        </div>
                                    </Form>
                                    <div className='form-group text-center' id='formForget'>
                                        <span>Don't have an account?</span>{' '}
                                        <span
                                            style={{ cursor: 'pointer', color: '#3F90FC' }}
                                            onClick={() => setDisplay('true')}
                                        >
                                            Sign up
                                        </span>
                                    </div>
                                </div>
                            )
                            :
                            (
                                <div className="card-body d-flex justify-content-center align-items-center flex-column">

                                    <span>Create an account</span>{' '}
                                    <Form style={{ minWidth: '100%', maxWidth: '100%' }} onSubmit={handleSubmit(handleUserSubmit)}>
                                        <Form.Group>
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control name="name" type='text' onBlur={handleBlur} ref={register({ required: true })} />
                                        </Form.Group>
                                        {errors.name && (
                                            <span className='error'>Name is required</span>
                                        )}
                                        <Form.Group>
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control name="email" type='text' onBlur={handleBlur} ref={register({
                                                required: true,
                                            })} />
                                        </Form.Group>
                                        {errors.email && (
                                            <span className='error'>Email is required</span>
                                        )}
                                        <p>{errors.email?.message}</p>
                                        <Form.Group>
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control name="password" type='text' onBlur={handleBlur} ref={register({ required: true, minLength: 6 })} />
                                        </Form.Group>
                                        {errors.password && (
                                            <span className='error'>
                                                6 character with at least 1 digit is required
                                            </span>
                                        )}
                                        <Form.Group>
                                            <Form.Label>Confirm Password</Form.Label>
                                            <Form.Control name="cpassword" type='text' onBlur={handleBlur}
                                                ref={register({ validate: (value) => value === watch('password') })} />
                                        </Form.Group>
                                        {errors.cpassword && (
                                            <span className='error'>Confirm password is required</span>
                                        )}
                                        <div className="align-items-center text-center justify-content-center">
                                            <Button className=" rounded-pill" type='submit'>Create Account</Button>
                                        </div>
                                    </Form>
                                    <div className='form-group text-center' id='formForget'>
                                        <span>Already registered?</span>{' '}
                                        <span
                                            style={{ cursor: 'pointer', color: '#3F90FC' }}
                                            onClick={() => setDisplay(false)}
                                        >
                                            Sign in
                                        </span>
                                    </div>
                                </div>
                            )
                    }

                    <div className='card-body d-flex justify-content-center align-items-center flex-column'>
                        <h4 className='card-title text-center'>Login With</h4>
                        <div className='social-login'>
                            <button className='btn' onClick={googleSignIn}>
                                <img src={google} alt='google icon' />{' '}
                                <span>Continue with Google</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;