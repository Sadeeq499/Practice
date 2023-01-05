import React, { Component } from 'react'

export default class counter extends Component {
    constructor(){
        super();
        this.state = {
            count :0
        }
    }
    render() {
        const increment = () => {
            this.setState({
                count: this.state.count + 1
            })}
        const Decrement= () =>{
            this.setState({
                count:this.state.count-1
            })
        }
        const Reset = () =>{
            this.setState({
                count:0
            })
        }

    return (
      <div>
        <h1>Counter</h1>
        <h1>{this.state.count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
        <button onClick={Reset}>Reset</button>
      </div>
    )
  
}
}
