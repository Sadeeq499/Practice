import React, { Component } from 'react'

export default class button extends Component {
    constructor(props){
        super(props);
    }

    handleCount = () =>{
        this.props.myfun(30);
    }
  render() {
    return (
      <div>
        <button onClick={this.handleCount}>Count</button>
      </div>
    )
  }
}
