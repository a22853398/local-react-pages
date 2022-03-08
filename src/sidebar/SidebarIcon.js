import React from "react";
import Icon from "./images/profile_icon.png";
import "./Sidebar.css";

function SidebarIcon(){
    return (
        <div className="sidebar-icon">
            <img src={Icon} />
            <p>u9908028@gmail.com</p>
        </div>
    );
}
export default SidebarIcon;