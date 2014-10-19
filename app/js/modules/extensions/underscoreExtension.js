define(function (require) {
    var _ = require('underscore');

    _.tryGet = function (source, path, defaultValue) {
        var steps = path.split('.');

        steps.forEach(function (step) {
            source = source[step] || { }
        });

        if (typeof source == 'object' && Object.getOwnPropertyNames(source).length == 0) {
            source = typeof defaultValue === 'undefined' ? '' : defaultValue;
        }

        return source;
    };
});
