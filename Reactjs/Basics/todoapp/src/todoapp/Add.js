import React, { Component } from 'react'

export default class Add extends Component {
    constructor()
    {
        super();
        this.state = {
            keyword:'',
            data:[]
        }
    }
    handleChange = (e) =>{
        this.setState({
            keyword:e.target.value
        })
    }

    handleSubmit =(e) =>{
        e.preventDefault();
        this.setState({
            data:this.state.keyword
        })
    }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <input type='text'
                id='text'
                onChange={this.handleChange}
                value={this.state.keyword}
            />
        </form>
      </div>
    )
  }
}
