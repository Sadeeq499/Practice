import React, { Component } from 'react'
export default class todo extends Component {
  constructor() {
    super();
    this.state = {
      keyword: '',
      data: []
    }
  }
  handleChange = (e) => {
    this.setState({
      keyword: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.keyword === '') {
      alert("empty not allowed")
    }
    else if (this.state.data.indexOf(this.state.keyword) < 0) {
      this.setState({
        data: this.state.data.concat(this.state.keyword),
        keyword: ''
      })
    }
    else {
      alert("i am already here")
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text"
            id='search'
            value={this.state.keyword}
            onChange={this.handleChange}
            onFocus={this.state.keyword ===''}
          />
          <button id='srchBtn'>Search</button>
        </form>
        <ul>
          {
            this.state.data.map(l => {
              return <li key={l}>{l}</li>
            })
          }
        </ul>
      </div>
    )
  }
}
