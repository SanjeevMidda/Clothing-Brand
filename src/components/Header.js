// Importing this module and stylesheet so we can make use of their functionality inside our index.js file
import React from "react";
import "../index.css";


// Creating component which represents our header elements: image, h1 heading, and links.
export default function Header(props){

// Empty variable created to hold the value of our buttons    
let status;

    //If/else used to determine whether user has logged in or not. Value taken from props for condition. The text inside our button below changes.
    if(props.log){
        status = "Welcome";
    }else{
        status = "Login";
    }

    return(
        <div className="headerContainer">
            <img src = "https://static.vecteezy.com/system/resources/thumbnails/008/826/851/small/abstract-initial-letter-mz-logo-in-black-color-isolated-in-white-background-applied-for-clothing-brand-logo-also-suitable-for-the-brands-or-companies-that-have-an-initial-name-zm-vector.jpg" alt = "landing page of model"></img>


            <h1>MATTIRE</h1>

            <ul>
                <a href = "www.empty.com"><li>PRODUCTS</li></a>
                <a href = "www.empty.com"><li>STOCKIST</li></a>
                <a href = "www.empty.com"><li>CONTACT US</li></a>
            </ul>

            {/* Content inside our button updated depending on the result of the if/else statement above */}
            <button>{status}</button>
                    
        </div>
    );
}
