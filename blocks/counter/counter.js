var React = require('react');

var timer = null;

module.exports = React.createClass({
    getInitialState: function() {
        return {seconds: 0};
    },
    componentDidMount: function () {
        timer = setInterval(this.tick, 1000);
    },
    tick: function() {
        this.setState({seconds: this.state.seconds + 1});
    },
    render: function() {
        return <h1>Hello world for {this.state.seconds} seconds!</h1>;
    },
    componentWillUnmount: function() {
        clearInterval(timer);
    }
});
