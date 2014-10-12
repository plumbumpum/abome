define(function (require) {
    var $ = require('jquery'),

    modelFactory = require('modelFactory'),

    map = {
        'skill': 'data/skills'
    },

    get = function (modelName, params) {
        var deferred = $.Deferred(),
            data = require(map[modelName]);

        setTimeout(function () {
            var models = [];

            data.value.forEach(function (item) {
                var model = modelFactory.create(modelName, item),
                    check = true;

                Object.getOwnPropertyNames(params).forEach(function (paramName) {
                    if (model.get(paramName) != params[paramName]) {
                        check = false;
                    }
                });

                if (check) models.push(model);
            });

            deferred.resolve(models);
        }, 300);

        return deferred.promise();
    };

    return {
        get: get
    }
});