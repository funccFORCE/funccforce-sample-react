import React from 'react';
import './Navbar.css';
import {useState} from 'react';

const Navbar=()=>{
    const[toggle,changeToggle]=useState(false);
    const toggleHandler=()=>{
        changeToggle(true);
    }
    const closeSidebarHandler=()=>{
        changeToggle(false);
    }
    let sidebar=null;
    if(toggle){
        sidebar=(
            <div className="sidebar">
                <div style={{textAlign: 'left'}}><button onClick={closeSidebarHandler} style={{height:'30px',width:'30px',margin:'10px',backgroundColor:'rgb(0,0,0,0.5)',border:'0.5px black solid',color:'white'}}>X</button></div>
                <a href="#" style={{margin:'15px', display: 'block', textDecoration:"none", color:"white"}}> Home</a>
                <a href="#" style={{margin:'15px', display: 'block', textDecoration:"none", color:"white"}}> SignUp</a>
                <a href="#" style={{margin:'15px', display: 'block', textDecoration:"none", color:"white"}}> Login</a>
                <a href="#" style={{margin:'15px', display: 'block', textDecoration:"none", color:"white"}}> Future Projects</a>
                <a href="#" style={{margin:'15px', display: 'block', textDecoration:"none", color:"white"}}> Contact</a>
            </div>                
        );
    }
    return(
    <> 
        <nav className="navbar" style={{display: 'flex'}}>
            <a className="brandName" href="#" style={{textDecoration:"none",color:"white"}}>Funccforce</a>
            <button onClick={toggleHandler} className="toggleButton" style={{height:"50px",width:"50px",transform:"rotate(90deg)",padding:"2px",fontSize:"25px",backgroundColor:"white",margin:"10px",borderRadius:"25%",border:"2px solid white",color:"black"}}>|||</button>
            {sidebar}
        </nav>
    </>
    );
}

export default Navbar;