define(function (require) {
    var React = require('react');

    return React.createClass({
        render: function () {
            var style = {
                backgroundImage: 'url(' + this.props.img + ')'
            };

            return (
                <div className="avatar" style={ style }></div>
            );
        }
    })
});