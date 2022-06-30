import * as React from 'react';
import './NutritionPage.css'
import { Navigate } from 'react-router-dom';
import AuthContext from 'components/contexts/auth';

export default function NutritionPage() {
    const { loggedIn } = React.useContext(AuthContext);

    return (
        <div>
            {!loggedIn && <Navigate to="/login" replace={true} />}
            <h1> This is the nutrition page </h1>
        </div>
    )
}