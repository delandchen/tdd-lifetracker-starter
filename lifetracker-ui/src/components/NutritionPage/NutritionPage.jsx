import * as React from 'react';
import './NutritionPage.css'
import { Navigate } from 'react-router-dom';
import AuthContext from 'components/contexts/auth';
import {Route, Routes, Link} from 'react-router-dom';

export default function NutritionPage() {
    const { loggedIn } = React.useContext(AuthContext);

    return (
        <div className='nutrition-page'>
            {!loggedIn && <Navigate to="/login" replace={true} />}
            <Routes>
                <Route path="/" element={<NutritionOverview />}/>
                <Route path="/nutrition/create" element={<NutritionNew />}/>
                <Route path="/nutrition/id/:nutritionId" element={<NutritionDetail />}/>
                <Route path="/*" element={<NotFound />} />
            </Routes>
            
        </div>
    )
}

const NutritionOverview = () => {
    return (
        <div className='nutrition-overview'>
            <div className='header'>
                <h3> Overview </h3>
                <Link to="/nutrition/create">
                <button className='record-nutrition'>
                    Record Nutrition
                </button>
                </Link>
            </div>
            <div>

            </div>
        </div>
    )
}

const NutritionNew = () => {
    return (
        <div>
        <input type="text" name="name"></input>
        <input type="text" name="category"></input>
        <input type="number" name="calories"></input>
        <input type="image_url"></input>
        </div>
    )
}

const NutritionDetail = () => {
    return (
        <h1> Nutrition Detail </h1>
    )
}

const NotFound = () => {
    return (
        <h1> Not Found </h1>
    )
}