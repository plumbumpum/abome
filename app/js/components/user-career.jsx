define(function (require) {
    var React = require('react'),
        timeLine = require('jsx!./time-line'),
        api = require('api');

    return React.createClass({
        getInitialState: function () {
            return {
                careerBeginDate: new Date(),
                careerSteps: []
            }
        },

        componentDidMount: function () {
            api.get('userCareerStep', { userLogin: this.props.userId })
                .done(function (userCareerSteps) {
                    var careerSteps = [];

                    userCareerSteps.forEach(function (step) {
                        careerSteps.push({
                            title: step.name,
                            date: step.date
                        })
                    });

                    this.setState({
                        careerBeginDate: new Date(userCareerSteps[0].date.getFullYear(), 0, 1),
                        careerSteps: careerSteps
                    });

                }.bind(this));
        },

        render: function () {
            return (
                <div>
                    <timeLine dateBegin={ this.state.careerBeginDate } dateEnd={ new Date(new Date().getFullYear() + 1, 0, 1) } steps={ this.state.careerSteps } />
                </div>
            );
        }
    });
});