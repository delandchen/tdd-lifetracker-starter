import * as React from 'react';
import { Link } from 'react-router-dom'
import './NavLinks.css'
import AuthContext from 'components/contexts/auth';

export default function NavLinks({handleSignOut}) {
    const { initializedContext } = React.useContext(AuthContext);
    const [initialized, setInitialized] = initializedContext;

    return (
        <div className="nav-links">
            <Link className="nav-link" to="/activity"> Activity </Link>
            <Link className="nav-link" to="/nutrition"> Nutrition </Link>
            {(!initialized) ? <Link className="nav-link" to="/login"> Login </Link> : null}
            {(!initialized) ? <Link className="nav-link" to="/register"> Register </Link> : null}
            {(initialized) ? <Link className="nav-link" to="/" onClick={handleSignOut}> Sign out </Link> : null}
        </div>
    )
}