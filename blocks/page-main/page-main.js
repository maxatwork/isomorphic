'use strict';

import React from 'react';
import Page from '../page/page';
import Counter from '../counter/counter';

var timer = null;

export default class PageMain extends React.Component {
    render() {
        return (
            <Page
                styles={['page-main.css']}
                scripts={['page-main.js']}

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
    React.render(<PageMain />, document);
}
