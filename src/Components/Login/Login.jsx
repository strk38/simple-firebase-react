import React, { useState } from 'react';
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import app from '../../Firebase/firebase.init';


const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [user, setUser] = useState(null);

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser);
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    const handleGoogleSignOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                setUser(null);
                //console.log(user);
            })
            .catch((error) => {
                // An error happened.
                console.log(error);
            });
    }

    return (
        <div>
            {
                user ?
                    <button onClick={handleGoogleSignOut}>Sign Out</button> :
                    <button onClick={handleGoogleSignIn}>Google Login</button>
            }
            {
                user && <div>
                    <h3>user name: {user.displayName}</h3>
                </div>
            }

        </div>
    );
};

export default Login;



