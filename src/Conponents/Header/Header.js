import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css';

const Header = () => {
    const {user, handelSignout} = useFirebase();
    return (
        <div className='header'>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/Shops'>Shops</Link>
                <Link to='/about'>About</Link>
                <Link to='/registerd'>Registerd</Link>
                <span>{user?.displayName && user.displayName}</span>
                {
                    user?.uid ?
                    <button onClick={handelSignout}>sign out</button>
                    :
                    <Link to='/login'>LogIn</Link>
                    
                }
            </nav>
            
        </div>
    );
};

export default Header;