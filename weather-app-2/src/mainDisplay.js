import React from 'react'


export default class MainDisplay extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          
          
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

            <div id="contentContainer">
                <div id="content">
                    <div id="main">
                        <h1 className="mainContent" id="location">{this.props.weather.city}, {this.props.weather.country}</h1>
                        <img className="mainContent" id ="weatherIcon" src = {`http://openweathermap.org/img/wn/${this.props.weather.icon}@2x.png`} alt={this.props.weather.description + ' Icon'}/>
                        <p id="temp"><strong >{ <>{this.fahrenheit(this.props.weather.temp)}&deg;F </>}</strong></p>
                        <p id="weatherDescription"><strong >{this.props.weather.description}</strong></p>
                    </div>
                    <div id="details">
                        <p className="detailContent" id="feelsLike">Feels Like: <strong>{ <>{this.fahrenheit(this.props.weather.temp)}&deg;F</>} </strong></p>
                        <p className="detailContent" id="humidity">Humidity: <strong>{this.props.weather.humidity}%</strong></p>
                        <p className="detailContent" id="windDirection">Wind Direction: <strong>{ <>{this.direction(this.props.weather.windDirection)}</> }</strong></p>
                        <p className="detailContent" id="windSpeed">Wind Speed: <strong>{ <>{this.mph(this.props.weather.windSpeed)} MPH</>}</strong></p>
                    </div>

                </div>
            </div>
        )
    }
}