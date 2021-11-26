import React, { useEffect, useState } from 'react';
import initializeAuthentication from '../Components/Firebase/firebase.init';
import { getAuth, signInWithPopup, onAuthStateChanged, GoogleAuthProvider, signOut } from "firebase/auth";
initializeAuthentication();
const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {

            if (user) {

                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribe()
    }, []);

    const singInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    };

    const logOut = () => {
        console.log("logouttttt");
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            // An error happened.
        });
    };

    return {
        user,
        setUser,
        singInWithGoogle,
        isLoading, setIsLoading,
        logOut
    }
};

export default useFirebase;