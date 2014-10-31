define(function (require) {
    var React = require('react');

    return React.createClass({
        render: function () {
            var rows = [];

            this.props.info.forEach(function (infoItem) {
                rows.push(
                    <div>
                        <dt>{ infoItem.title }</dt>
                        <dd>{ infoItem.value }</dd>
                    </div>
                )
            });

            return (
                <dl className="detail-list">
                    { rows }
                </dl>
            );
        }
    });
});