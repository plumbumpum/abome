define(['react'], function (React) {
    var page;

    page = React.createClass({
        render: function () {
            return (
                <div className="page" id={ this.props.id }>
                    { this.props.children }
                </div>
            );
        }
    });

    return page;
});