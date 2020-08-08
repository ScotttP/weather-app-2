import React from 'react';
import './App.css';

import UserInput from './input'
import MainDisplay from './mainDisplay'





export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      value : '',
      data : ''
    }
    this.getWeatherData = this.getWeatherData.bind(this);
  }
   async getWeatherData (userInput) {
     
    try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${userInput}&APPID=`,{mode: 'cors'});
        const weatherData = await response.json();
        this.setState({data : weatherData})
        console.log(weatherData)
    } catch (error){
        console.log(error) //display an error message
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
