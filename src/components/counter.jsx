import React, { Component } from 'react';
class Counter extends Component {
    state = { 
        count: 1,
        imageUrl: 'https://picsum.photos/500'
     };
    render() { 
        return (<div>
        <img src={this.state.imageUrl} />
        <span>{this.formatCount()}</span>
        <p> i m react</p>
        </div> );
    }
    formatCount(){
          const{count}=this.state;
        return  count===0 ? "zero":count;
    }
}
 
export default Counter ;