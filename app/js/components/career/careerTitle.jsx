define(['react', 'moment'], function (React, moment) {
    var careerTitle;

    careerTitle = React.createClass({
        render: function () {
            var
            careerDuration = moment.duration(moment() - this.props.beginDate),
            careerDurationInYears = careerDuration.years(),
            careerDurationInMonths = careerDuration.months();

            return (
                <div className="career-title">
                    <div className="border [ fade-in duration-1500ms ]"></div>
                    <section className="slide-right duration-400ms">
                        <strong>Карьера</strong>
                        <span>
                            { careerDurationInYears != 0 ? careerDurationInYears + ' год ' : '' }
                            { careerDurationInMonths + ' месяцев' }
                        </span>
                    </section>
                </div>
            );
        }
    });

    return careerTitle
});