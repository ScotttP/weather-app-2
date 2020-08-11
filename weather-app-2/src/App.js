import React from "react";
import "./App.css";

import MainDisplay from "./mainDisplay";
import UserInput from "./userInput";

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userInput: "New York",
			icon: "",
			city: "",
			country: "US",
			temp: "",
			description: "",
			feelsLike: "",
			humidity: "",
			windDirection: "",
			windSpeed: "",
			error: "",
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		//calls the function on load
		this.getWeatherData();
	}

	async getWeatherData() {
		try {
			const response = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${this.state.userInput}&APPID=b388badf2ea8d6a1b0fc28f7d99e0ccc`,
				{ mode: "cors" }
			);
			const weatherData = await response.json();
			this.setState({
				city: weatherData.name,
				icon: weatherData.weather[0].icon,
				country: weatherData.sys.country,
				temp: weatherData.main.temp,
				description: weatherData.weather[0].description,
				feelsLike: weatherData.main.feels_like,
				humidity: weatherData.main.humidity,
				windDirection: weatherData.wind.deg,
				windSpeed: weatherData.wind.speed,
				error: "",
			});
		} catch (error) {
			alert("Could Not Find This City. Please enter a (City, Country)");
		}
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.getWeatherData();
	};
	handleChange = (e) => {
		this.setState({
			userInput: e.target.value,
		});
		e.preventDefault();
	};

	render(error) {
		return (
			<div className="App">
				<UserInput click={this.handleSubmit} change={this.handleChange} />
				<MainDisplay weather={this.state} />
			</div>
		);
	}
}
