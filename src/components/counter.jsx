import React, { Component } from 'react';
class Counter extends Component {
    
    state = { 
        count: 1,
        imageUrl: 'https://picsum.photos/500'
     };
     add=()=>{
         this.setState({count: this.state.count+1});
     }
     sub=()=>{
         if (this.state.count===0){
             return;
         }
         this.setState({count: this.state.count-1})
     }
    render() { 
        return (<div>
        
        <span className={this.getclasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm m-2" onClick={this.add} >Increment</button>
        <button className="btn btn-secondary btn-sm"  onClick={this.sub} >decrement</button>
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