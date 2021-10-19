import {getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {useEffect, useState} from "react";
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const signUpWithEmail = (name, email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signUpWithGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    }

    const signInWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        })
        return () => unsubscribed;
    }, [])
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }
    return {
        user,
        isLoading,
        setUser,
        setIsLoading,
        signUpWithEmail,
        signUpWithGoogle,
        signInWithEmail,
        logOut
    }
}
export default useFirebase;