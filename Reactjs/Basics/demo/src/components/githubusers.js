import React, { Component } from 'react'
import './table.css'
import axios  from 'axios'
export default class githubusers extends Component {
    constructor(){
        super();
        this.state = {
            user:[]
        }
    }
  render() {
    const myfun = async () =>{
        const url = "https://api.github.com/users";
        const {data} = await axios.get(url);
            this.setState({
                user:data
            })
    }

    return (
      <div>
         <table className='demo'>
	<thead>
	<tr>
		<th>ID</th>
		<th>NAME</th>
		<th>IMAGE</th>
	</tr>
	</thead>
	<tbody>
    {this.state.user.map(m => <tr key={m.id}>
      <td>{m.id}</td>
      <td>{m.login}</td>
      <td><img src={m.avatar_url} style={{width:100, height:100}}  alt={m.login}/></td>
    </tr>)}
	</tbody>
</table>
        <button onClick={myfun}>Enter</button>
      </div>
    )
  }
}
