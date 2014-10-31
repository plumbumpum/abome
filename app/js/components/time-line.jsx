define(function (require) {
    var React = require('react'),
        date = require('date');

    return React.createClass({
        calculatePosition: function (stepDate) {
            var stepLength = stepDate - this.props.dateBegin;

            return (stepLength * 100) / (this.props.dateEnd - this.props.dateBegin)  + '%';
        },

        render: function () {
            var lineSteps = [],
                even = false;

            this.props.steps.forEach(function (step) {
                lineSteps.push(
                    <li className={ (even ? 'right' : 'left') + ' step' } style={ { bottom: this.calculatePosition(step.date) } }>
                        <strong className="title">{ step.title }</strong>
                        <div className="separator"></div>
                        <span className="date">{ date.format(step.date, 'MMMM YYYY') }</span>
                    </li>
                );

                even = !even;
            }.bind(this));

            return (
                <div className="time-line">
                    <div className="line"></div>
                    <div className="year year-begin">{ this.props.dateBegin.getFullYear() }</div>
                    <div className="year year-end">{ this.props.dateEnd.getFullYear() }</div>

                    <ul className="line-steps">
                        { lineSteps }
                    </ul>
                </div>
            );
        }
    });
});