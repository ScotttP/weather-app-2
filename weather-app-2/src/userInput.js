import React from 'react'

export default class UserInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: 'New York'
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (event) {
        this.setState({
            value: event.target.value,
        })
        event.preventDefault()
        
    }

    render () {
        
        return (
            
            <div>
            <form onSubmit={() => this.props.handleSubmit(this.state.value)}>
                <input id ="userSearch" type="text" placeholder="City, Country" value={this.state.value} onChange={this.handleChange}></input>
                <input id="search" type="submit" value="Search" />
            </form>
            
            </div>

            
        )
    }
}