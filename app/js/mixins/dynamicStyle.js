define(['react'], function (React) {
    return {
        cs: function (classConfig) {
            var className = React.addons.classSet(classConfig);

            if (this.props.className !== null && this.props.className !== '' && typeof this.props.className != 'undefined') {
                className += ' ' + this.props.className;
            }

            return className;
        },
        
        st: function (stylesConf) {
            var style= {};

            Object.getOwnPropertyNames(stylesConf).forEach(function (styleName) {
                var styleConf = stylesConf[styleName];

                if (styleConf.when) {
                    style[styleName] = styleConf.value;
                }
            });

            return style;
        }
    };
});