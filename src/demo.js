import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './demo.css';
import 'tachyons';

const Demo=(props)=>{
      return( 
      <div className="avatar dib ma4 bg-light-blue  grow shadow-4">
         <img src={`https://joeschmoe.io/api/v1/${props.name}` }/>
          <h1 className="tc" >{props.name}</h1>
          <p className="tc"  >{props.profession}</p>
      </div>
      )
   }


export default Demo;