import React, { Component } from 'react';
import loadingMan from './loadingMan.gif';
// import Workout from './Workout';

class WorkoutContainer extends Component {

    render() {
        return (
            <div>
                <h1>Stay tuned. A code workout is being conducted to whip this app into shape.</h1>
                <img src={loadingMan} width="200" height="200" alt=""></img>
            </div>
        );

        {/*
        return (
            <div>
                <Workout title={'Push Ups'}></Workout>
                <Workout title={'Sit Ups'}></Workout>
                <Workout title={'Planks'}></Workout>
            </div>
        );
        */}
    }
}

export default WorkoutContainer;