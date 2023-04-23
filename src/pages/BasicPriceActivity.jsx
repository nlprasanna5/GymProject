import React from "react";

function BasicPriceActivity(){
    return (
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',height:'100vh',alignItems:'center',color:'white'}}>
             <h2>Basic</h2>
            <h3>$19.99/month</h3>
            <ul>
              <li>Access to gym during regular hours</li>
              <li>Basic workout equipment</li>
              <li>No personal training sessions</li>
            </ul>
        </div>
    )
}

export default BasicPriceActivity;