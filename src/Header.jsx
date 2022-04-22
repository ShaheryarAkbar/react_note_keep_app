import React from "react";
import img from "./RS-removebg-preview.png";

const Header = () => {
    return (
        <>
            <div className="header">   
                <img src={img} alt="logo" width='100' height='100' />
                <h1>Shery</h1>
            </div>
        </>
    );
};

export default Header