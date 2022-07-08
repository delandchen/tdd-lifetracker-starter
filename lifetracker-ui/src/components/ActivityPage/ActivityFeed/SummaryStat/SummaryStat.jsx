import * as React from 'react';
import './SummaryStat.css'

export default function SummaryStat({stat, label, substat}) {
    return (
        <div className='summary-stat'>
            <p className='stat'> Calories: {stat} </p>
            { label ? <p className='label'> Category: {label} </p> : null }
            { substat ? <p className='substat'> Date: {substat} </p> : null}
        </div>
    )
}