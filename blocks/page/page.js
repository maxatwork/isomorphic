var React = require('react');

module.exports = React.createClass({
  render: function() {
    var scripts = (this.props.scripts || []).map(getScript);
    var styles = (this.props.styles || []).map(getStyle);
    var pageComponent = this.props.pageComponent;
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
                <script dangerouslySetInnerHTML={{__html:
                    `var React = require('react');
                    var Page = React.createFactory(require("${pageComponent}"));
                    React.render(Page(), document);`}}>
                </script>
            </body>
        </html>
    );
  }
});


function getStyle(style, id) {
    return (<link rel="stylesheet" key={id} href={style} />);
}

function getScript(src, id) {
    return (<script key={id} src={src} />);
}
