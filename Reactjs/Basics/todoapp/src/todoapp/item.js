import React, { Component } from 'react'

export default class item extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <div>
        {
            
           <li key={this.props.text}>
                <input type="checkbox" id="checkbox" />
            {this.props.text}  -  {this.props.status}</li>
        }
      </div>
    )
  }
}
