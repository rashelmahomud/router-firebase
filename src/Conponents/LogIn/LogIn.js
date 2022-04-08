import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const LogIn = () => {
    const {signWithGoogle} = useFirebase();
    return (
        <div>
            <h2>log in page this.</h2>
            <button onClick={signWithGoogle}>Sign with Google</button>
            <form>
              
                <input type="email" placeholder='Enter your Mail:' /> <br /> 
                <input type="password"  placeholder='Needs your passWorld'/>   <br />
                <input type="button" value="LogIn" />

            </form>
        </div>
    );
};

export default LogIn;