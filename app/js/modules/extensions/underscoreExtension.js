define(function (require) {
    var _ = require('underscore');

    _.tryGet = function (source, path, defaultValue) {
        var steps = path.split('.');

        steps.forEach(function (step) {
            source = source[step] || defaultValue;
        });

        return source;
    };
});
