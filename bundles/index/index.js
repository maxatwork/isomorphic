'use strict';

import React from 'react';
import Page from '../../blocks/page';
import Counter from '../../blocks/counter';

var timer = null;

export default class Index extends React.Component {
    render() {
        return (
            <Page
                styles={['index.css']}
                scripts={['index.js']}

                title='Hello world!'>
                    <Counter />
            </Page>
        );
    }

    componentWillUnmount() {
        clearInterval(timer);
    }
}

if (typeof window !== 'undefined') {
    React.render(<Index />, document);
}