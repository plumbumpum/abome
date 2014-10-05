define(function (require) {
    var React = require('react'),
        hasChildren = require('mixins/hasChildren'),
        skill = require('jsx!components/characteristic/skill'),
        characteristic;
    
    characteristic = React.createClass({
        mixins: [hasChildren],
        
        getInitialState: function () {
            return { skills: [] }
        },

        componentDidMount: function () {
            var skillsData = require('data/skills');

            this.setState({
                skills: skillsData.skills
            });
        },

        onSkillOpen: function (skillName) {
            this.state.skills.forEach(function (item) {
                item.hidden = item.name != skillName;
                item.active = item.name == skillName;
                item.last = false;
            });

            this.setState({ skills: this.state.skills });
        },

        onSkillClose: function (skillName) {
            this.state.skills.forEach(function (item) {
                item.active = false;
                item.hidden = false;
                item.last = skillName == item.name;
            });

            this.setState({ skills: this.state.skills });
        },
        
        render: function () {
            var skillsList = this.childrenList({
                list: this.state.skills,
                render: function (item) {
                    return (
                        <skill
                            name={ item.name } knowledge={ item.knowledge }
                            active={ item.active }  hidden={ item.hidden } last={ item.last }
                            onClick={ this.onSkillOpen} onClose={ this.onSkillClose }
                        />
                    );
                }.bind(this)
            });

            return (
                <div className="characteristic">
                    <div className="skills">
                        { skillsList}
                    </div>
                </div>
            );
        }
    });
    
    return characteristic
});