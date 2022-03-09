import React, { Component }  from "react";
import HeaderTitle from "./HeadTitle";
import "./Header.css";
/*
function Header(){
    const isApple = false;
    return(
        <div style={{color: isApple? 'red' : 'green'}}>
            <h1>Test Title</h1>
        </div>
    );
}
*/
function Header(){
    return(
        <div className="header">
            <HeaderTitle />
        </div>
    );
}
export default Header;