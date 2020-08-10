import React from 'react'	

export default class UserInput extends React.Component {

    render () {	
        return (
        <div id="formContainer">
            <h1 id="weatherApp">Weather App</h1>
            <form id="form">
                <input id ="userSearch" type="text" placeholder="City, Country"  onChange={this.props.change}></input>
                <button id="search" onClick={this.props.click}>Search</button>
            </form>   
        </div>

        )	
    }	
} 