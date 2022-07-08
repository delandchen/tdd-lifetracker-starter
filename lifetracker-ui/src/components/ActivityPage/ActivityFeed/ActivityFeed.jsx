import * as React from 'react';
import './ActivityFeed.css'
import SummaryStat from './SummaryStat/SummaryStat'

export default function ActivityFeed({totalCaloriesPerDay, avgCaloriesPerCategory}) {
    return (
        <div className='activity-feed'>
            <div className='per-category'>
                <h4> Average Calories Per Category </h4>
                {avgCaloriesPerCategory.map((item) => (
                    <SummaryStat stat={item.calories} label={item.category} substat={item.createdAt}/>
                ))}
                <h4> Total Calories Per Day </h4>
                {totalCaloriesPerDay.map((item) => (
                    <SummaryStat stat={item.calories} label={item.category} substat={item.createdAt}/>
                ))}
            </div>
        </div>
    )
}