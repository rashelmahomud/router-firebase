import React from 'react';

const Registerd = () => {
    return (
        <div>
            <h1>Registerd page!</h1>
            <form>
                <input type="button" value="google sign-in" /> <br />
                <br />
                <input type="text" placeholder='Enter Your Name:' /> <br />
                <input type="email" placeholder='Enter your Mail:' /> <br /> 
                <input type="password"  placeholder='Needs your passWorld'/>   <br />
                <input type="button" value="registerd" />            
            </form>
        </div>
    );
};

export default Registerd;