'use strict';

import React from 'react';
import Page from '../page/page';
import Counter from '../counter/counter';

var timer = null;

export default class PageMain extends React.Component {
    render() {
        return (
            <Page
                styles={['index.css']}
                scripts={['index.js']}

                title='Hello world!'
                pageComponent = '/blocks/page-main/page-main.js'>
                    <Counter />
            </Page>
        );
    }

    componentWillUnmount() {
        clearInterval(timer);
    }
}
