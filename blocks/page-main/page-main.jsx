var React = require('react');
var Page = require('../page/page.jsx');
var Counter = require('../counter/counter.jsx');

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
        return (
            <Page title="Hello world!" {...this.props}>
                    <Counter />
            </Page>
        );
    },
    componentWillUnmount: function() {
        clearInterval(timer);
    }
});
