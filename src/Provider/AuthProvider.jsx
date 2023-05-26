import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';
export const AuthContext = createContext(null);

//google adn github provider 
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    // create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Sign in user
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // Log out
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    // signInWithPopup google
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // signInWithPopup git hub
    const signInWithGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    // Observer User logging or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
            if (loggedUser) {
                // console.log(loggedUser);
                setUser(loggedUser);
                setLoading(false);
            } else {
                setUser(null);
                setLoading(false);
            }
        });
        return () => {
            unsubscribe();
        };
    }, [])


    // update profile
    const updateUserProfile = (name, photo) => {
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        }).then(() => {
            // Profile updated!
            // ...
            console.log("Profile updated!");
        }).catch((error) => {
            // An error occurred
            // ...
            setErrorMessage(error.message);
        });
    }
    // get current logged in user
    const currentLoggedUser = auth.currentUser;
    if (currentLoggedUser !== null) {
        // The user object has basic properties such as display name, email, etc.
        const displayName = currentLoggedUser.displayName;
        const email = currentLoggedUser.email;
        const photoURL = currentLoggedUser.photoURL;
        const emailVerified = currentLoggedUser.emailVerified;
        const uid = currentLoggedUser.uid;
        // console.log(displayName, email,photoURL, uid);
    }



    const authInfo = {
        user,
        createUser,
        loginUser,
        signInWithGoogle,
        signInWithGithub,
        logOut,
        updateUserProfile,
        loading,
        setLoading,
        success,
        setSuccess,
        errorMessage,
        setErrorMessage,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;