'use strict';

import React from 'react';

export default class Page extends React.Component {
    render() {
        var scripts = (this.props.scripts || []).map(getScript);
        var styles = (this.props.styles || []).map(getStyle);
        var title = this.props.title;
        var children = this.props.children;

        return (
            <html>
                <head>
                    <title>{title}</title>
                    {styles}
                </head>
                <body>
                    {children}
                    {scripts}
                </body>
            </html>
        );
    }
}

function getStyle(style, id) {
    return (<link rel="stylesheet" key={id} href={style} />);
}

function getScript(src, id) {
    return (<script key={id} src={src} />);
}
