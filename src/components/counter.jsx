import React, { Component } from 'react';
class Counter extends Component {
    
    state = { 
        count: 1,
        imageUrl: 'https://picsum.photos/500'
     };
     add(){
         console.log("hello")
     }
    render() { 
        return (<div>
        
        <span className={this.getclasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm" id="add" onClick={this.add} >Increment</button>
        </div> );
    }
    formatCount(){
          const{count}=this.state;
        return  count===0 ? "zero":count;
    }
    getclasses(){
        let classes="badge m-2 badge-";
        classes+= this.state.count===0 ? "warning" : "primary";
        return classes;
    }
}
 
export default Counter ;