import * as React from 'react';
import './Navbar.css'
import NavLinks from '../NavLinks/NavLinks'
import logo from "./logo.png"

export default function Navbar({loggedin}) {
    return (
        <nav className="navbar">
            <div className='content'>
                <div className="logo"> 
                    <a href="/">
                        <img src={logo} alt="logo"></img>
                    </a>
                </div>
                <NavLinks loggedin={loggedin} />
            </div>
        </nav>
    )
}