import React, { Component } from 'react'
import axios from 'axios'
export default class form extends Component {
    constructor(){
        super();
        this.state = {
            keyword:'',
            results:[]
        }
    }
    handleClick = async(e) => {
        e.preventDefault();
        // const key = "ABC";
        const term = this.state.keyword
        const {data} = await axios.get(`https://api.unsplash.com/photos/?client_id=${key}&query=${term}`)
        this.setState({
          results:data
        })
   
      }
    handleChange = (e) =>{
        this.setState({
            keyword:e.target.value
        })
    }

  render() {
    return (
      <div>
        <form onSubmit={this.handleClick}>
            <input 
            type="text"
             name="firstName"
             id='fname'
             onChange={this.handleChange} 
             value={this.state.keyword}
             />
            <button>Search</button>
          <div>
              {this.state.results.map(image =>{
                return <img  src={image.urls.small} alt={image.id}  />
              })}
            </div>           
        </form>
      </div>
    )
  }
}
