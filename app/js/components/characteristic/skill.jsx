define([
    'react',
    'mixins/dynamicStyle',
    'jsx!components/progressBar',
    'jsx!components/characteristic/knowledge'
], function (
    React,
    dynamicStyle,
    progressBar,
    knowledge
    ) {
    var skill;
    
    skill = React.createClass({
        mixins: [dynamicStyle],

        countAverage: function () {
            var knowledgeSum = 0,
                knowledgeCount = this.props.knowledge.length;

            this.props.knowledge.forEach(function (item) {
                knowledgeSum += item.body;
            });

            return knowledgeSum / knowledgeCount;
        },

        __onClick: function () {
            this.props.onClick(this.props.name);
        },

        __onClose: function () {
            this.props.onClose(this.props.name);
        },

        render: function () {
            var className = this.cs({
                'skill': true,
                'skill-hidden': this.props.hidden,
                'skill-active': this.props.active,
                'skill-last': this.props.last
            });

            return (
                <div className={ className } onMouseLeave={ this.__onMouseLeave }>
                    <section onClick={ this.__onClick }>
                        <div className="skill-progress">
                            <progressBar className="delay-300ms" value={ this.countAverage() } orientation="vertical" />
                        </div>
                    </section>

                    <strong className="[ slide-bottom duration-300ms ]" onClick={ this.__onClick } >{ this.props.name }</strong>

                    <div className="back">
                        <div className="back-ico" onClick={ this.__onClose }>
                            Назад
                        </div>
                    </div>

                    <div className="skill-knowledge">
                        <knowledge list={ this.props.knowledge } />
                    </div>
                </div>
            );
        }
    });
    
    return skill
});