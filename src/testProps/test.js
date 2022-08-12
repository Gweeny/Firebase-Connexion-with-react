import React from "react";

const Test = (props) =>{
    return (
        <div>
            <h1>Bonjour {props.name}</h1>
            <h2>Tu as : {props.age} ans</h2>
            <h3>Tu vis au {props.adresse} et la date du jour est {props.date}</h3>
        </div>
        
    )
}
export default Test