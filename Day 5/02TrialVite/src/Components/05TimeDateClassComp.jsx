import React from "react";

class TimeDateClassComp extends React.Component
{

    dt = new Date();
    
    render()
    {
        return(
           <div>
                <h1>Date :{this.dt.toDateString()}</h1>
           </div>
        )
    }
}

export default TimeDateClassComp;

