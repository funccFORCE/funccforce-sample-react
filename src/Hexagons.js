import React from 'react';
import './Hexagons.css';
const Hexagons=()=>{
    return(
        <div style={{flex:'5'}}>
        <div className="hexPattern row0">
            <div className='hex'></div> 
        </div>    
        <div className="hexPattern row1">
            <div className='hex'></div>
            <div className='hex'></div>
        </div>
        <div className="hexPattern row2">
            <div className='hex'></div>
        </div>
        </div>
    );
}
export default Hexagons;