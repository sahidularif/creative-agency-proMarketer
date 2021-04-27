import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

export const initializeLoginFramework = () => {
  if(firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
  }
}

// Google Sign In Handler
export const handleGoogleSignIn = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
    .then( (res) =>{
      const { displayName, email } = res.user;
      const signedInUser = { name: displayName, email: email, success:true };
      return signedInUser;
    })
    .catch(function (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};



// Sign Out handler:
export const handleSignOut = () => {
  return firebase.auth().signOut()
  .then(res => {
    const signedOutUser = {
      isSignedIn: false,
      name: '',
      email: '',
      error: '',
      success: false
    }
    return signedOutUser;
  }).catch(err => {
    const errorMessage = err.message;
      console.log(errorMessage);
  });
}


// Create user with email and password
export const createUserWithEmailAndPassword = (name, email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
  .then( res => {
    const newUserInfo = res.user;
    newUserInfo.error = '';
    newUserInfo.success = true;
    updateUserName(name);
    verifyEmail();
    return newUserInfo;
  })
  .catch( error => {
    console.log('dukeno killai');
    const newUserInfo = {};
    newUserInfo.error = error.message;
    newUserInfo.success = false;
    return newUserInfo;
  });
}


// // sign in with email and password
export const signInWithEmailAndPassword = (email, password) =>{
  return firebase.auth().signInWithEmailAndPassword(email, password)
  .then(res => {
    const { displayName, email } = res.user;
      const signInUser = { name: displayName, email: email, success: true, error: '' };
    return signInUser;
  })
  .catch(function(error) {
    const signInUser = {};
    signInUser.error = error.message;
    signInUser.success = false;
    return signInUser;
  });
}


// Update user name
const updateUserName = name =>{
  const user = firebase.auth().currentUser;

  user.updateProfile({
    displayName: name
  }).then(function() {
    console.log('user name updated successfully')
  }).catch(function(error) {
    console.log(error)
  });
}

const verifyEmail = () => {
  const userVerify = firebase.auth().currentUser;
  userVerify
    .sendEmailVerification()
    .then(function () {
      // Email sent.
    })
    .catch(function (error) {
      console.log(error);
    });
};

