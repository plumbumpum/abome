define(['react', 'moment'], function (React, moment) {
    var careerStep;

    careerStep = React.createClass({
        render: function () {
            var stepDate = moment(this.props.info.date).format('MMMM YYYY'),
                stepStyle,
                icoClass = 'ico ico-' + this.props.type;

            stepStyle = {
                left: this.props.left
            };

            return (
                <div className="career-step [ fade-in duration-500ms delay-800ms ]" style={ stepStyle }>
                    <div className={ icoClass }></div>
                    <div className="title">
                        <strong>{ this.props.info.title }</strong>
                        <span className="post">{ this.props.info.name }</span>
                        <span className="date">{ stepDate }</span>
                    </div>
                </div>
            );
        }
    });

    return careerStep
});