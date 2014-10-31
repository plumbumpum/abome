define(function (require) {
    var $ = require('jquery'),

    map = {
        userInfo: 'user',
        userCareerStep: 'companies'
    },

    get = function (modelInfo, filterModel) {
        var deferred = $.Deferred(),
            modelName = modelInfo.split(':')[0],
            modelProps = modelInfo.split(':')[1];

        setTimeout(function () {
            var path = 'data/' + map[modelName];

            require([path], function (models) {
                var filteredModels = models.data.filter(function (model) {
                    var check = true, key;

                    for (key in filterModel) {
                        if (model[key] != filterModel[key]) check = false;
                    }

                    return check;
                });

                if (typeof modelProps != 'undefined') {
                    var modelPropsNames = modelProps.split(',').map(function (modelPropName) {
                        return modelPropName.replace(' ', '');
                    });

                    filteredModels.forEach(function (filteredModel) {
                        var allProps = Object.getOwnPropertyNames(filteredModel),

                        differentProps = allProps.filter(function(i) { return modelPropsNames.indexOf(i) < 0; });

                        differentProps.forEach(function (differentProp) {
                            delete filteredModel[differentProp];
                        });
                    });
                }

                deferred.resolve(filteredModels.length == 1 ? filteredModels[0] : filteredModels);
            });

        }, 300);

        return deferred.promise();
    };

    return {
        get: get
    }
});