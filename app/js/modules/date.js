define(function (require) {
    var moment = require('moment'),
        momentRu = require('moment-ru');

    moment.locale('ru');

    return {
        format: function (date, formatType) {
            return moment(date).format(formatType);
        }
    }
});