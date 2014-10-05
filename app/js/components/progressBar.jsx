define([
    'react',
    'mixins/dynamicStyle',
    'jsx!components/background'
], function (
    React,
    dynamicStyle,
    background
    ) {
    var progressBar;

    progressBar = React.createClass({
        mixins: [dynamicStyle],

        isVertical: function () {
            return this.props.orientation == 'vertical';
        },
        
        isHorizontal: function () {
            return this.props.orientation == 'horizontal';
        },

        render: function () {
            var

            progressBarClassName = this.cs({
                'progress-bar': true,
                'progress-bar-vertical': this.isVertical(),
                'progress-bar-horizontal': this.isHorizontal()
            }),

            progressFillerClassName = this.cs({
                'progress-filler': true,
                'duration-500ms': true,
                'grow': this.isVertical(),
                'wide': this.isHorizontal(),
                'progress-high': this.props.value > 80,
                'progress-medium': this.props.value >= 40 && this.props.value <= 80,
                'progress-low': this.props.value < 40
            }),

            progressLoaderStyle = this.st({
                'height': { value: this.props.value + '%', when: this.isVertical() },
                'width': { value: this.props.value + '%', when: this.isHorizontal() }
            })
            ;

            return (
                <div className={ progressBarClassName }>
                    <background color="rgba(255,255,255,0.1)" className="[ fade-in duration-800ms ]" />
                    <div className="progress-loader" style={ progressLoaderStyle }>
                        <div className={ progressFillerClassName }></div>
                    </div>
                </div>
            );
        }
    });
    
    return progressBar
});