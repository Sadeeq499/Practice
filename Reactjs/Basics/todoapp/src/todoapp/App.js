import React, { Component } from 'react'
import Add from './Add'
import List from './list'
import Reset from './reset'

export default class App extends Component {
    constructor(){
        super();
        this.state = {
            tasks : [
                {"itemText": "workout ", "status": "incomplete"},
                {"itemText": "appointment ", "status": "incomplete"},
                {"itemText": "meeting ", "status": "Completed"},
                {"itemText": "business analysis ", "status": "Completed"},
                {"itemText": "coding ", "status": "incomplete"}
        
        ]
        }
    }

  render() {
    return (
      <div>
        <h1>Total : {this.state.tasks.length}</h1>
        <p>Completed {this.state.tasks.filter(i => i.status=="Completed").length}</p>
        <p>InCompleted {this.state.tasks.filter(i => i.status=="incomplete").length}</p>
        <Add />
        <List 
            todolist = {this.state.tasks}
        />
        <Reset />
      </div>
    )
  }
}
