import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';

import Header from './header/Header';
import Navbar from './navbar/Navbar';
import Content from './content/Content';
//import Sidebar from './sidebar/Sidebar';

/* 
//React default page
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/
ReactDOM.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
  document.getElementById('header')
);

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>, 
  document.getElementById('navbar')
);

/*
ReactDOM.render(
  <React.StrictMode>
    <Sidebar />  
  </React.StrictMode>,
  document.getElementById('sidebar')
);
*/

ReactDOM.render(
  <React.StrictMode>
    <Content 
      title={'テストタイトル２'}
    />
  </React.StrictMode>,
  document.getElementById('content')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
