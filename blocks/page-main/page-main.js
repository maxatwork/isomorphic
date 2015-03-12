var React = require('react');
var Page = require('../page/page');
var Counter = require('../counter/counter');

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
            <Page
                styles={['index.css']}
                scripts={['index.js']}

                title='Hello world!'
                pageComponent = '/blocks/page-main/page-main.js'>
                    <Counter />
            </Page>
        );
    },
    componentWillUnmount: function() {
        clearInterval(timer);
    }
});
