import * as React from 'react';
import './ActivityFeed.css'
import SummaryStat from './SummaryStat/SummaryStat'

export default function ActivityFeed({totalCaloriesPerDay, avgCaloriesPerCategory}) {
    return (
        <div className='activity-feed'>
            <h4> Average Calories Per Category </h4>
            <div className='per-category'>
                {avgCaloriesPerCategory?.map((item) => (
                    <SummaryStat stat={parseInt(item.calories).toFixed(2)} label={item.category} substat={item.createdat?.substring(0,10)}/>
                ))}
            </div>
                <h4> Total Calories Per Day </h4>
            <div className='per-day'>
                {totalCaloriesPerDay?.map((item) => (
                    <SummaryStat stat={parseInt(item.calories).toFixed(2)} label={item.category} substat={item.createdat.substring(0,10)}/>
                ))}
            </div>
        </div>
    )
}