import React from "react";
import logo from '../logo.svg';

const Content = (props) => {
    return <div>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{props.title}</h2>
    </div>
};
export default Content;