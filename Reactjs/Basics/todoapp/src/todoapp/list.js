import React, { Component } from 'react'
import Item from './item'
export default class list extends Component {
    constructor(props){
        super(props);
    }

  render() {
    return (
      
        <ul>
            {this.props.todolist.map(l => {
                return <Item 
                    text={l.itemText}
                    status= {l.status}
                />
            })}
        </ul>

    )
  }
}
