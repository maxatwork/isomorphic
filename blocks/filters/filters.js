'use strict';

import React from 'react';

export default class Filters extends React.Component {
    constructor(props) {
        var value = props.value || {
            foo: '',
            bar: ''
        };

        this.state = {
            foo: value.foo,
            bar: value.bar
        };
    }

    render() {
        return (
            <div className='filters'>
                <form>
                    <label>Foo <input name='foo' defaultValue={this.state.foo} /></label>
                    <label>Bar <input name='bar' defaultValue={this.state.bar} /></label>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}
