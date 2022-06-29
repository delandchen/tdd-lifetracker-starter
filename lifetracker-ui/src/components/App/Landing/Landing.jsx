import * as React from 'react';
import './Landing.css'
import hero from "./hero.svg"

export default function Landing() {
    return (
        <div className="landing-page">
            <div className='hero'>
                <img className='hero-img' src={hero}></img>
                <div className='cta'>
                    <h1> Life Tracker </h1>
                    <p> So you don't die </p>
                </div>
            </div>
        </div>
    )
}