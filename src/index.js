import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Demo from './demo'
import Counter from './components/counter'
import 'bootstrap/dist/css/bootstrap.css'
import * as serviceWorker from './serviceWorker';
//const element= <h1>hello react</h1>
//ReactDOM.render(element,document.getElementById('root'));
ReactDOM.render(<Counter/>,document.getElementById('root'));
 /*var addAvatar= document.getElementById('submit')
addAvatar.addEventListener("click",(event)=>{
    var fname=document.getElementById('fname').value;
var work=document.getElementById('work').value;
    ReactDOM.render(<div>
        <Demo id="1" name={`${fname}`} profession={`${work}`}/></div>, document.getElementById('root'));


})
*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
