import React from 'react'
import './form.css'
import { useState } from 'react'
import axios from 'axios'
// import Login from '../loginPage/form'
// import Hello from  '../loginPage/hello'
// import {BrowserRouter as Router , Route , Routes ,Link } from 'react-router-dom'

function Form() {

  // hooks
    const [name, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    // functions
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/user/register', {
            name,
            email,
            password
        })
        .then(res => {
            // console.log(res)
            alert('User Registered Successfully')
        }).catch(err => {
            // print exact error
            window.alert(err.response.data)
            // console.log(err.response.data)
        })

    //     const data = {
    //         name,
    //         email,
    //         password
    // }
    // console.log(data)
      }




  return (
    <div>
          {/* main */}
      <div className="main-w3layouts wrapper">
        <h1>SignUp</h1>
        <div className="main-agileinfo">
          <div className="agileits-top">
            <form onSubmit={handleSubmit}>

              <input className="text" 
              type="text"
               name="Username"
               value={name}
               onChange={(e) => {
                   setUsername(e.target.value)
                }
            }
            placeholder="Username"
                 required />

              <input className="text email"
               type="email"
                name="email"
                 value={email} 
                 onChange={(e) => {
                    setEmail(e.target.value)
                    }
                   }
                 placeholder="Email"
                  required />

              <input className="text"
               type="password" 
               name="password"
                value={password}
                    onChange={(e) => {
                    setPassword(e.target.value)
                    }
                   }
                placeholder="Password"
                 required />

              <div className="wthree-text">
                <label className="anim">
                  <input type="checkbox" className="checkbox" required />
                  <span>I Agree To The Terms &amp; Conditions</span>
                </label>
                <div className="clear"> </div>
              </div>
              <input type="submit"  defaultValue="SIGNUP" />
            </form>
            {/* <p>Already have an account? <Link to="/test">Login now</Link></p> */}
            {/* now create a anchoer tag when user click on login Now then redirect it to another component name test in same directory */}
            <p>Already have an account? <a href="/test">Login now</a></p>
       
          </div>
        </div>
           
  
        {/* copyright */}
        <div className="colorlibcopy-agile">
          <p>© 2018 Colorlib Signup Form. All rights reserved | Design by <a href="https://colorlib.com/">Colorlib</a></p>
        </div>
        {/* //copyright */}
        <ul className="colorlib-bubbles">
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>
      {/* //main */}

    </div>
    )
}

export default Form