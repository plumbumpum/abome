define(['underscore'], function (_) {

    Array.prototype.first = function () {
        return this[0];
    };

    Array.prototype.last = function () {
        return this[this.length - 1];
    };

    Array.prototype.where = function (filterModel) {
        if (typeof filterModel == 'function') {
            return _.filter(this, filterModel);
        }

        return _.where(this, filterModel);
    };

    Array.prototype.single = function (filterModel) {
        return this.where(filterModel)[0];
    };

    Array.prototype.sortBy = function (property) {
        _.sortBy(this, function (item) {
            return item[property];
        });

        return this;

    };

});