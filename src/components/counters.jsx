import React, { Component } from 'react';
import Counter from "./counter";
class counters extends Component {
    state = {
        counters:[
            {id: 1,value:0},
            {id: 2,value:0},
            {id: 3,value:0},
            {id: 4,value:0},
            {id: 5,value:0},
            {id: 1,value:0},
        ]
    };
    render() { 
        return ( <div>
            {this.state.counters.map(counter=> <Counter key={Counter.id}/>)} 
        </div> );
    }
}
 
export default counters;