import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar-wrapper'>
            <div className='navbar-logo'>
                <Link to='/'>
                    <h4 className='navbar-logo-line'>| &nbsp;</h4> 
                    <h4>Vladislav Tsoy</h4>
                </Link>
            </div>
            <ul className='navbar-links'>
                <Link to='/projects'><li>Projects</li></Link>
                <Link to='/about'><li>About</li></Link>
                <Link to='/contact'><li>Contact</li></Link>
            </ul>
        </div>
    );
};

export default Navbar;