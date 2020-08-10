import React from 'react'


export default class MainDisplay extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          hello: 'hello'
          
        }
    }
    fahrenheit (temp) {
        return Math.round((temp - 273.15)*9/5 +32 )
        
    }
    mph (speed){
        return Math.round(speed*2.23694*10)/10;

    }
    direction(wind) {
        var val = Math.floor((wind / 22.5) + 0.5);
        var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
        return arr[(val % 16)];
    }
    render(){
        
        return(
            <div>
            <h1>{this.props.weather.city}, {this.props.weather.country}</h1>
            <img src = {`http://openweathermap.org/img/wn/${this.props.weather.icon}@2x.png`} />
            <p>Temperature: <strong>{ <>{this.fahrenheit(this.props.weather.temp)}&deg;F </>}</strong></p>
            <p>Description: <strong>{this.props.weather.description}</strong></p>
            <p>Feels Like: <strong>{ <>{this.fahrenheit(this.props.weather.temp)}&deg;F</>} </strong></p>
            <p>Humidity: <strong>{this.props.weather.humidity}%</strong></p>
            <p>Wind Direction: <strong>{ <>{this.direction(this.props.weather.windDirection)}</> }</strong></p>
            <p>Wind Speed: <strong>{ <>{this.mph(this.props.weather.windSpeed)} MPH</>}</strong></p>
            </div>
        )
    }
}