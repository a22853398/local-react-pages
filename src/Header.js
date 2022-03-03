import React, { Component }  from "react";

function Header(){
    const isApple = false;
    return(
        <div style={{color: isApple? 'red' : 'green'}}>
            <h1>Test Title</h1>
        </div>
    );
}
export default Header;