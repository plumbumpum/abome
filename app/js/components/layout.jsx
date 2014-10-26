define(function (require) {
    var React = require('react'),
        core = require('core');

    return React.createClass({
        render: function () {
            return (
                <div >
                    <div className="info-block">
                        <header></header>
                        <section></section>
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