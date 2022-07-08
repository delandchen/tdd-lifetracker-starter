import * as React from 'react';
import './ActivityPage.css'
import { Navigate } from 'react-router-dom';
import AuthContext from 'components/contexts/auth';
import ActivityContext from '../../components/contexts/activity';
import ActivityFeed from './ActivityFeed/ActivityFeed';

export default function ActivityPage() {
    const {initializedContext } = React.useContext(AuthContext);
    const { processingContext, avgCaloriesPerCategoryContext, totalCaloriesPerDayContext, errorContext} = React.useContext(ActivityContext)
    const [avgCaloriesPerCategory, setAvgCaloriesPerCategory] = avgCaloriesPerCategoryContext;
    const [totalCaloriesPerDay, setTotalCaloriesPerDay] = totalCaloriesPerDayContext;
    const [initialized, setInitialized ] = initializedContext;

    return (
        <div className='activity-page'>
            {!initialized && <Navigate to="/login" replace={true} />}
            <h1> Activity Page</h1>
            <ActivityFeed avgCaloriesPerCategory={avgCaloriesPerCategory} totalCaloriesPerDay={totalCaloriesPerDay} />
        </div>
    )
}