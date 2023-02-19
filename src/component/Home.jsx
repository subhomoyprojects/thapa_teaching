import React from "react";

export default function Home(){
    const myName = "Subhomoy";
    let grteeing = "";
    let cssStyle = {};
    
        let currentTime = new Date();
        currentTime = currentTime.getHours();

        if(currentTime >= 0 && currentTime <= 11){
            grteeing = 'Good Morning';
            cssStyle.color = "green";
        }
        else if(currentTime >= 12 && currentTime <= 19){
            grteeing = 'Good Afternoon'
            cssStyle.color = "orange";
        }
        else{
            grteeing = 'Good Night';
            cssStyle.color = "blue";
        }
    return(
        <>
            <h1>My name is {myName}</h1>
            <p>Hello Sir, <span style={cssStyle}>{grteeing}</span></p>
        </>
    );
}