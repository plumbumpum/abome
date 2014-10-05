define([
    'react',
    'mixins/dynamicStyle',
    'mixins/hasChildren',
    'jsx!components/background',
    'jsx!components/progressBar',
    'jsx!components/smthWithLabel'
], function (
    React,
    dynamicStyle,
    hasChildren,
    background,
    progressBar,
    smthWithLabel
    ) {
    var knowledge;
    
    knowledge = React.createClass({
        mixins: [dynamicStyle, hasChildren],

        render: function () {
            var

            knowledgeList = this.childrenList({
                list: this.props.list,
                render: function (item) {
                    return (
                        <smthWithLabel label={ item.name } className="knowledge-label" >
                            <div className="knowledge-progress">
                                <progressBar value={ item.body } orientation="horizontal" />
                            </div>
                        </smthWithLabel>
                    );
                }
            }),

            className = this.cs({
                'knowledge': true
            });

            return (
                <div className={ className }>
                    { knowledgeList }
                </div>
            );
        }
    });
    
    return knowledge
});