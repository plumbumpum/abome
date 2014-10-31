define(function (require) {
    var React = require('react'),
        core = require('core');

    return React.createClass({
        componentDidMount: function () {
            core.publish('userPage:layout', this.props.userId);
        },
        
        render: function () {
            return (
                <div >
                    <div className="info-block">
                    </div>

                    <div className="skills-block">
                    </div>

                    <div className="career-block">
                    </div>
                </div>
            );
        }
    });
});