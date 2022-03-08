import React from "react";
import { SidebarData } from "./SidebarData";
import "./Sidebar.css";
import SidebarIcon from "./SidebarIcon";

function Sidebar(){
    return(
        <div className="sidebar">
            <SidebarIcon />
            <ul className="sidebar-list">
                { SidebarData.map((value, key) => {
                    return(
                        <li 
                            key={key} 
                            className="row" 
                            id={window.location.pathname == value.url ? "active" : "" }
                            onClick={()=> {
                                window.location.pathname = value.url;
                            }}
                        >
                            <div id="icon">{value.icon}</div>
                            <div id="icon">{value.title}</div>
                        </li>
                    );
                }
                )}
            </ul>
        </div>
    );
}
export default Sidebar;