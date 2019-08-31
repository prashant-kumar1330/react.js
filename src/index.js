import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Demo from './demo'
import * as serviceWorker from './serviceWorker';
 var addAvatar= document.getElementById('submit')
addAvatar.addEventListener("click",(event)=>{
    var fname=document.getElementById('fname').value;
var work=document.getElementById('work').value;
    ReactDOM.render(<div>
        <Demo id="1" name={`${fname}`} profession={`${work}`}/></div>, document.getElementById('root'));


})




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

