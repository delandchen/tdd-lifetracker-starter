import * as React from 'react';
import './Navbar.css'
import NavLinks from '../NavLinks/NavLinks'
import logo from "./logo.png"
import { Link } from 'react-router-dom';

export default function Navbar({handleSignOut}) {
    return (
        <nav className="navbar">
            <div className='content'>
                <div className="logo"> 
                    <Link to="/">
                        <img src={logo} alt="logo"></img>
                    </Link>
                </div>
                <NavLinks handleSignOut={handleSignOut}/>
            </div>
        </nav>
    )
}