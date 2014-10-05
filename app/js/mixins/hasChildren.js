define([], function () {
    return {
        childrenList: function (config) {
            var children = [];

            config.list.forEach(function (item) {
                var child = config.render(item);
                children.push(child);
            });

            return children;
        }
    }
});