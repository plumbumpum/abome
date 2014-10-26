define(function (require) {
    var core = require('core'),
        React = require('react'),
        $ = require('jquery');

    return {
        core: core,
        dom: function (selector) {
            var node = $(selector);

            return node.length == 1 ? node[0] : node;
        },
        component: {
            insert: function (name, node) {
                var path = 'jsx!components/' + name;

                require([path], function (Component) {
                    React.renderComponent(new Component(), node);
                });
            }
        }
    }
});