'use strict';

import React from 'react';
import Page from '../../blocks/page/page';
import Counter from '../../blocks/counter/counter';
import Header from '../../blocks/header/header';
import Filters from '../../blocks/filters/filters';

var timer = null;

export default class Index extends React.Component {
    constructor(props) {
        var initialState = props.initialState;
        this.state = {
            filters: initialState.filters
        };
    }

    render() {
        return (
            <Page
                styles={['index.css']}
                scripts={['index.js']}

                title='Hello world!'
                {...this.props}>
                    <Header />
                    <Counter />
                    <Filters value={this.state.filters} />
            </Page>
        );
    }

    componentWillUnmount() {
        clearInterval(timer);
    }
}

if (typeof window !== 'undefined') {
    React.render(<Index initialState={__initialState} />, document);
}
