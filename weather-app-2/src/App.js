import React from 'react';
import './App.css';
import KEY from './keys.env'

import UserInput from './userInput'
import MainDisplay from './mainDisplay'


export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      data : ''
    }
    this.getWeatherData = this.getWeatherData.bind(this);
  }
   async getWeatherData (userInput) {
     
    try {
      console.log( userInput) //logs the value of the form
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&APPID=${KEY}`,{mode: 'cors'});
        const weatherData = await response.json();
        this.setState({data : weatherData})
        console.log(weatherData)
    } catch (error){
        console.error(error) //display an error message
    }
  
    
  }

  render() {
    return (
      <div className="App">
      <UserInput handleSubmit = {this.getWeatherData}/>
      <MainDisplay weather={this.state.data}/>
      </div>
    )
    
  }
}
