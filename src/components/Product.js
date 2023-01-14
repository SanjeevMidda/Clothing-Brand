// Importing this module and stylesheet so we can make use of their functionality inside our index.js file
import React from "react";
import "../index.css";

//creating a component which returns our product items. "props" represents the values passed in when we add our component inside "App.js".
export default function Product(props){
    return(
        <div>
            <img src = {props.img} alt = "product"></img>
            <h3>NAME: {props.name}</h3>
            <h3>SIZE: {props.size}</h3>
            <h3>PRICE {props.price}</h3>
        </div>
    );
}
