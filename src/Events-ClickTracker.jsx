import React, { useState } from "react";

function ClickTracker(){
    const [lastButtonClicked, setLastButtonClicked]= useState("");

    const handleButtonClick = (event) =>{
        const buttonName = event.target.name;
        setLastButtonClicked(buttonName)
    }

    

    return(
        <div>
            <h1>Last Clicked: {lastButtonClicked}</h1>
            <button onClick={handleButtonClick}  name="button1"></button>
            <button onClick={handleButtonClick} name="button2"></button>
            <button onClick={handleButtonClick} name="button3"></button>
        </div>
    )
}

export default ClickTracker;