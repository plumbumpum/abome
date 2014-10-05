define(['react', 'mixins/dynamicStyle'], function (React, dynamicStyle) {
    var smthWithLabel;
    
    smthWithLabel = React.createClass({
        mixins: [dynamicStyle],

        render: function () {
            var className = this.cs({
                'label': true
            });

            return (
                <div className="smth-with-label">
                    <div className={ className }>{ this.props.label }</div>
                    <div className="smth">{ this.props.children }</div>
                </div>
            );
        }
    });
    
    return smthWithLabel
});