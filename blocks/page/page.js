var React = require('react');

module.exports = React.createClass({
  render: function() {
    var scripts = (this.props.scripts || []).map(getScript);
    var styles = (this.props.styles || []).map(getStyle);

    return (
        <html>
            <head>
                <title>{this.props.title}</title>
                {styles}
            </head>
            <body>
                {this.props.children}
                {scripts}
                <script dangerouslySetInnerHTML={{__html:
                    "var React = require('react');var Page = React.createFactory(require('" + this.props.pageComponent + "'));React.render(Page(), document.documentElement);"}}>
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
