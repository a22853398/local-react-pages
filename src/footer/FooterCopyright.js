import React from "react";
import "./Footer.css";

function FooterCopyright(){
    const copyrightText = "©Copyright 2022 Weihung Lai";
    return(
        <div className="footer-copyright">
            <p className="footer-copyright-text">{copyrightText}</p>
        </div>
    );
}
export default FooterCopyright;