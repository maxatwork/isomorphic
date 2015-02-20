var React = require('react');

module.exports = React.createClass({
  render: function() {
    var scripts = (this.props.scripts || []).map((script) => (<script src={script} />));
    var styles = (this.props.styles || []).map((style) => (<link rel="stylesheet" href={style} />))

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
