import React from 'react';
import './App.css';


import UserInput from './userInput'
import MainDisplay from './mainDisplay'


//const APIKEY = `${process.env.REACT_APP_KEY}`
export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      city: '',
      temp: '',
      description: '',
      feelsLike: '',
      humidity: '',
      windDirection: '',
      windSpeed: ''
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  
   async componentDidMount (userInput) {
     
    try {
        let userInput = "New York"
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&APPID=b388badf2ea8d6a1b0fc28f7d99e0ccc`,{mode: 'cors'});
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

  render() {
    return (
      <div className="App">
      <UserInput handleSubmit = {() => this.componentDidMount()}/>
      <MainDisplay weather={this.state}/>
      </div>
    )
    
  }
}
