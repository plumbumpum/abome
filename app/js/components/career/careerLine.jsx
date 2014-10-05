define([
    'react',
    'jsx!components/career/careerStep'
], function (
    React,
    careerStep
    ) {
    var careerLine;

    careerLine = React.createClass({
        calculateLeftPosition: function (stepDate) {
            var stepLength = stepDate - this.props.startDate;

            return (stepLength * 100) / this.lineLength + '%';
        },

        isFirstPost: function (post) {
            return post.first === true || typeof post.date == 'undefined';
        },

        isCompany: function (step) {
            return typeof step.posts != 'undefined';
        },

        createStep: function (stepsList, step) {
            var stepInfo = { date: step.date },
                firstPost;

            if (this.isCompany(step)) {
                firstPost = step.posts.single(function (post) { return this.isFirstPost(post) }.bind(this));

                stepInfo.title = step.name;
                stepInfo.name = firstPost.name;

                this.renderStep(stepsList, 'company', stepInfo);
            }

            if (!this.isCompany(step) && !this.isFirstPost(step)) {
                stepInfo.name = step.name;

                this.renderStep(stepsList, 'post', stepInfo);
            }
        },
        
        renderStep: function (stepsList, stepType, stepInfo) {
            stepsList.push(
                <careerStep type={ stepType } info={ stepInfo } left={ this.calculateLeftPosition(stepInfo.date) } />
            );
        },

        render: function () {
            var steps = [];

            this.lineLength = this.props.stopDate - this.props.startDate;

            this.props.companies.forEach(function (company) {
                var companyPosts = company.posts || [];

                this.createStep(steps, company);

                companyPosts.forEach(function (post) {
                    this.createStep(steps, post);
                }.bind(this));

            }.bind(this));

            return (
                <div className="career-line">
                    <div className="line [ wide duration-1000ms ]"></div>
                    { steps }
                </div>
            );
        }
    });

    return careerLine
});