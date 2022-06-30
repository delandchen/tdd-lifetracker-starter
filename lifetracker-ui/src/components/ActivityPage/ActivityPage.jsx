import * as React from 'react';
import './ActivityPage.css'
import { Navigate } from 'react-router-dom';
import AuthContext from 'components/contexts/auth';

export default function ActivityPage() {
    const { loggedIn } = React.useContext(AuthContext);

    return (
        <div>
            {!loggedIn && <Navigate to="/login" replace={true} />}
            <h1> This is the activity page</h1>
        </div>
    )
}