import * as React from "react";
import './NutritionOverview.css'
import NutritionContext from "../../contexts/nutrition";
import NutritionFeed from '../NutritionFeed/NutritionFeed';
import { Link } from 'react-router-dom';
import Loading from '../../Loading/Loading'

export default function NutritionOverview({nutrition}) {
    const {errorContext, loadingContext} = React.useContext(NutritionContext);
    const [isLoading, setIsLoading] = loadingContext;
    const [error, setError] = errorContext;

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
            <div className='main-content'>
                {(isLoading) ? <Loading /> : <NutritionFeed />}
                <div className='error'>
                    {(error) ? <p> {error}</p> : null}
                </div>
            </div>
        </div>
    )
}