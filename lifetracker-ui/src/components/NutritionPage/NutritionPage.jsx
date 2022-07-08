import * as React from 'react';
import './NutritionPage.css'
import NutritionOverview from './NutritionOverview/NutritionOverview';
import NutritionNew from './NutritionNew/NutritionNew';
import NutritionDetail from './NutritionDetail/NutritionDetail';
import { Navigate } from 'react-router-dom';
import AuthContext from 'components/contexts/auth';
import {Route, Routes, Link} from 'react-router-dom';
import Loading from "../Loading/Loading";


export default function NutritionPage() {
    const { initializedContext, errorContext } = React.useContext(AuthContext);
    const [ initialized, setInitialized ] = initializedContext;

    return (
        <div className='nutrition-page'>
            {!initialized && <Navigate to="/login" replace={true} />}
            <Routes>
                <Route path="/" element={<NutritionOverview />}/>
                <Route path="/create" element={<NutritionNew />}/>
                <Route path="/id/:nutritionId" element={<NutritionDetail />}/>
                <Route path="/*" element={<NotFound />} />
            </Routes>
            
        </div>
    )
}

const NotFound = () => {
    return (
        <h1> Not Found </h1>
    )
}