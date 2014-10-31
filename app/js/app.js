define(function (require) {
    var core = require('core'),
        React = require('react'),
        $ = require('jquery'),
        page = require('page'),
        appStarted = false;

    return {
        core: core,
        route: page,
        dom: function (selector) {
            var node = $(selector);

            return node.length == 1 ? node[0] : node;
        },
        component: {
            insert: function (name, node, params) {
                var path = 'jsx!components/' + name;

                require([path], function (Component) {
                    React.renderComponent(new Component(params), node);
                });
            }
        },
        start: function () {
            if (appStarted) return;

            page();

            appStarted = true;
        }
    };
});