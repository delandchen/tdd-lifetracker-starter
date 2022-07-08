import * as React from 'react';
import './SummaryStat.css'

export default function Stat({stat, label, substat}) {
    return (
        <div className='-stat'>
            <div className='per-category'>
                <p className='stat'> {stat} </p>
                <p className='label'> {label} </p>
                <p className='substat'> {substat} </p>
            </div>
        </div>
    )
}