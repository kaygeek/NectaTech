import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from './reportWebVitals';
import Scrollbar from 'smooth-scrollbar';

Scrollbar.init(document.querySelector('#my-scrollbar'));
ReactDOM.render(
    
    <React.StrictMode>
        
        <App />
    </React.StrictMode>
    , document.getElementById("root")
);


reportWebVitals()