define(function (require) {
    var React = require('react'),
        moment = require('moment'),
        careerTitle = require('jsx!components/career/careerTitle'),
        careerLine = require('jsx!components/career/careerLine'),
        career;

    career = React.createClass({
        getInitialState: function () {
            return { companies: [ ] }
        },

        componentDidMount: function () {
            var companiesData = require("data/companies");

            this.setState({
                companies: companiesData.companies
            })
        },
        
        render: function () {
            var sortedCompanies = this.state.companies.sortBy('date'),

            firstCompany = sortedCompanies.first() || { posts: [] },
            lastCompany = sortedCompanies.last() || { posts: [] },
            lastPost = lastCompany.posts.sortBy('date').last() || {},

            firstDate = firstCompany.date || new Date(),
            lastDate = lastPost.date || lastCompany.date || new Date(),

            firstYear = firstDate.getFullYear(),
            lastYear = lastDate.getFullYear() + 1 < new Date().getFullYear() ? new Date().getFullYear() :lastDate.getFullYear() + 1
            ;

            return (
                <div className="career">
                    <careerTitle beginDate={ firstDate } />
                    <careerLine
                        startDate={ new Date(firstYear, 0, 1) }
                        stopDate={ new Date(lastYear, 2, 30) }
                        companies={ this.state.companies }
                    />
                </div>
            );
        }
    });
    
    return career
});