import React from 'react';
import './App.css';

import MainDisplay from './mainDisplay'


const APIKEY = `${process.env.REACT_APP_KEY}`
export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      userInput: 'New York',
      city: '',
      temp: '',
      description: '',
      feelsLike: '',
      humidity: '',
      windDirection: '',
      windSpeed: ''
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
   async componentDidMount () {
     
    try {
        console.log(this.state.userInput)
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.userInput}&APPID=${APIKEY}`,{mode: 'cors'});
        const weatherData = await response.json();
        this.setState({
          city : weatherData.name,
          temp: weatherData.main.temp,
          description: weatherData.weather[0].description,
          feelsLike: weatherData.main.feels_like,
          humidity: weatherData.main.humidity,
          windDirection: weatherData.wind.deg,
          windSpeed: weatherData.wind.speed,
        })
        
    } catch (error){
        console.error(error) //display an error message
    }
  
    
  }

  handleChange (event) {
    this.setState({
        userInput: event.target.value,
    })
    event.preventDefault()
    
}

  render() {
    return (
      <div className="App">
        <div>
              <form onSubmit={this.componentDidMount}>
                  <input id ="userSearch" type="text" placeholder="City, Country"  onChange={this.handleChange}></input>
                  <input id="search" type="submit" value="Search" />
              </form>
              
        </div>
      <MainDisplay weather={this.state}/>
      </div>
    )
    
  }
}
