import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default class UserInput extends React.Component {
	render() {
		return (
			<div id="formContainer">
				<h1 id="weatherApp">Weather App</h1>
				<form id="form">
					<input
						id="userSearch"
						type="text"
						placeholder="City, Country"
						onChange={this.props.change}
					></input>
					<button id="searchButton" onClick={this.props.click}>
						<FontAwesomeIcon icon={faSearch} />
					</button>
				</form>
			</div>
		);
	}
}
