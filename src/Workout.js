import React, { Component } from 'react';

class Workout extends Component {
    constructor(props) {  
        super();
    }
    

    render() {
        return (
            <div>
                <h1>A Workout Card</h1>
                <h2>{this.props.title}</h2>
            </div>
        )
    }
}

Workout.defaultProps = {
    title: 'Push Ups'
}

export default Workout;