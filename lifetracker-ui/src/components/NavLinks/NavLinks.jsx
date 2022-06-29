import * as React from 'react';
import { Link } from 'react-router-dom'
import './NavLinks.css'

export default function NavLinks({loggedin}) {
    return (
        <div className="nav-links">
            <Link className="nav-link" to="/activity"> Activity </Link>
            <Link className="nav-link" to="/nutrition"> Nutrition </Link>
            {(!loggedin) ? <Link className="nav-link" to="/login"> Login </Link> : null}
            {(!loggedin) ? <Link className="nav-link" to="/register"> Register </Link> : null}
            {(loggedin) ? <Link className="nav-link" to="/"> Sign out </Link> : null}
        </div>
    )
}