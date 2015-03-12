'use strict';

import React from 'react';

var timer = null;

export default class Counter extends React.Component {
    constructor() {
        this.state = {seconds: 0};
    }

    componentDidMount() {
        timer = setInterval(this.tick.bind(this), 1000);
    }

    tick() {
        this.setState({seconds: this.state.seconds + 1});
    }
    render() {
        return <h1 className='counter'>Hello world for {this.state.seconds} seconds!</h1>;
    }

    componentWillUnmount() {
        clearInterval(timer);
    }
}
