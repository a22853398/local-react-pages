import React from "react";
import { NavbarList } from "./NavbarList";
import "./Navbar.css";

function Navbar(){
    return(
        <div className="navbar">
            <ul className="navbar-block">
                { 
                    NavbarList.map(
                        (value, key) => {
                            return(
                                <li 
                                    key= {key}
                                    className= "navbar-option"
                                    id= { window.location.pathname == value.url ? "active" : "" }
                                    onClick={ () =>{
                                        window.location.pathname = value.url; 
                                    }}
                                >
                                    <div className="navbar-title">
                                        {value.title}
                                    </div>
                                </li>
                            );
                        }
                    )
                }
            </ul>
        </div>
    );
}
export default Navbar;