import React from 'react'


export default class MainDisplay extends React.Component {
    render(){
        
        return(
            <div>
            <h1>City: <strong>{this.props.weather.city}</strong></h1>
            <p>Temperature: <strong>{this.props.weather.temp}</strong></p>
            <p>Description: <strong>{this.props.weather.description}</strong></p>
            <p>Feels Like: <strong>{this.props.weather.feelsLike}</strong></p>
            <p>Humidity: <strong>{this.props.weather.humidity}</strong></p>
            <p>Wind Direction: <strong>{this.props.weather.windDirection}</strong></p>
            <p>Wind Speed: <strong>{this.props.weather.windSpeed}</strong></p>
             
            </div>
        )
    }
}