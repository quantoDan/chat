import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedLinks'
import SignedOutLinks from './SugnedoutLinks'

const Navbar = () => {
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">ChatBoo</Link>
                <SignedInLinks></SignedInLinks>
                <SignedOutLinks></SignedOutLinks>
            </div>
        </nav>
    )
}


export default Navbar