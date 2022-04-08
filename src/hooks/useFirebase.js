import { useEffect, useState } from "react"

import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../firebase.init';

const auth = getAuth(app);

const provider = new GoogleAuthProvider();


const useFirebase = () => {
    const [user, setUser] = useState({});


    const signWithGoogle = () => {
        signInWithPopup(auth, provider)
        .then( result => {
            const user = result.user;
            setUser(user);
            console.log(user);
        })
        
    }

    const handelSignout = () =>{
        signOut(auth)
        .then( () => {})
    }

    useEffect( () => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        })
    } ,[])

    return {user, handelSignout, signWithGoogle}
}

export default useFirebase;