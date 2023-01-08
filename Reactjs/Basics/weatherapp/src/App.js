import React, { Component } from 'react'
import axios from 'axios'
import './App.css'
export default class App extends Component {
  constructor(){
    super();
    this.state = {
      result:[],
      days:''
    }
  }
  render() {
    const res = async () => {
     const url = "https://api.openweathermap.org/data/2.5/weather?q=Peshawar&appid=a11e9cfc34ca03a2f5462443f06f7b41";
        const {data} = await axios.get(url);
        this.setState({result:data})
    }
    return (
           
      <div>
        <div className="wrapper">
        <div className="widget-container">
          <div className="top-left">
              <h1 className="city" id="city">{this.state.result.name}</h1>
        
            <h2 id="day">{this.state.day}</h2>
            <h3 id="date">Month, Day Year</h3>
            <h3 id="time">Time</h3>
            <p className="geo" />
          </div>
          <div className="top-right">
            <h1 id="weather-status">Weather / Weather Status</h1>
            <img className="weather-icon" src="https://myleschuahiock.files.wordpress.com/2016/02/sunny2.png" />
          </div>
          <div className="horizontal-half-divider" />
          <div className="bottom-left">
            <h1 id="temperature">0</h1>
            <h2 id="celsius">°C</h2>
            <h2 id="temp-divider">/</h2>
            <h2 id="fahrenheit">°F</h2>
          </div>
          <div className="vertical-half-divider" />
          <div className="bottom-right">
            <div className="other-details-key">
              <p>Wind Speed</p>
              <p>Humidity</p>
              <p>Pressure</p>
              <p>Sunrise Time</p>
              <p>Sunset Time</p>
            </div>
            <div className="other-details-values">
              <p className="windspeed">0 Km/h</p>
              <p className="humidity">0 %</p>
              <p className="pressure">0 hPa</p>
              <p className="sunrise-time">0:00 am</p>
              <p className="sunset-time">0:00 pm</p>
            </div>
          </div>
        </div>
      </div>       
        <button onClick={res}>Click me</button>
      </div>
    )
  }
}
