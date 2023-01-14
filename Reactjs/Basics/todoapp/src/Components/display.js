import React, { Component } from 'react'
import Button from './button'
export default class display extends Component {
    constructor()
    {
        super();
        this.state = {
            Number:1
        }
    }

    handleChange = (n) =>{
        this.setState ({
            Number:n
        })
    }

    render() {
    return (
      <div>
        <h1>{this.state.Number}</h1>
        <Button myfun={this.handleChange} />
      </div>
    )
  }
}
