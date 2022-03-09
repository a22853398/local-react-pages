import React from "react";
import "./Header.css";

function HeaderTitle(){
    const titleText = "いこうの駆け出しサイト";
    const titleUrl = "/index";
    return(
        <h1 className="header-title">
            <a href={titleUrl} className="header-url">
                {titleText}
            </a>
        </h1>
        
    );
}
export default HeaderTitle;