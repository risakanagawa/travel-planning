import React from 'react';
import { Link } from 'react-router-dom';

import SignedIn from './SignedIn'
import SignedOut from './SignedOut'

const Navbar = () => {
    return (
        <nav className="nav-wrapper gray darken-3">
        <div className="container">
            <Link to="/" className='brand-logo' >Planning</Link>
            <SignedIn />
            <SignedOut />
        </div>
        </nav>
    )
}

export default Navbar;