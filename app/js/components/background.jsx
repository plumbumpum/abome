define(['react', 'mixins/dynamicStyle'], function (React, dynamicStyle) {
    var background;

    background = React.createClass({
        mixins: [dynamicStyle],
        
        render: function () {
            var

            className = this.cs({
                'background': true
            }),

            style = this.st({
                'backgroundImage': { value: 'url(' + this.props.img + ')', when: typeof this.props.img != 'undefined' },
                'backgroundColor': { value: this.props.color, when: typeof this.props.color != 'undefined' }
            })
            ;

            return (
                <div className={ className } style={ style }>
                </div>
            );
        }
    });

    return background
});