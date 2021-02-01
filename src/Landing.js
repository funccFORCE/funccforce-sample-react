import React from 'react';
import './Landing.css';
import Hexagons from './Hexagons';

const Landing=()=>{
    return (
        <div className="mainContent">
            <div style={{flex:3}} >
                <h1 className="heading">We design products people love to use</h1>
                <p className="desc">
                    Leading design agency helping startups & Fortune 500 companies craft engaging brands, websites, and apps.
                </p>
            </div>
            <Hexagons />
        </div>
    );
}
export default Landing;