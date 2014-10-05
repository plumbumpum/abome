define(['jquery'], function () {
    var Inherit,
        getInit,
        filterProps;

    getInit = function (props) {
        var init = init = props.init || null;
        delete props.init;

        return init;
    };

    filterProps = function (data) {
        var prop,
            propName;

        for (propName in data.props) {
            prop = data.props[propName];

            if (typeof prop == 'function') {
                data.methods[propName] = { value: prop };
            } else {
                data.fields[propName] = prop;
            }
        }
    };

    Inherit = function () {

    };

    Inherit.extend = function (inheritProps) {
        var Parent = this,
            Children,
            methods = {},
            fields = {},
            initFields,
            hasOwnFields,
            init;

        inheritProps = inheritProps || {};
        init = getInit(inheritProps);

        filterProps({
            props: inheritProps,
            fields: fields,
            methods: methods
        });

        hasOwnFields = Object.keys(fields).length > 0;

        initFields = function () {
            if (typeof Parent.prototype._initFields == 'function') {
                Parent.prototype._initFields.apply(this);
            }

            for (var fieldName in fields) {
                this[fieldName] = fields[fieldName];
            }
        };

        Children = function () {
            if (hasOwnFields) {
                initFields.apply(this);
            }

            if (init != null) {
                init.apply(this, arguments);
            } else {
                Parent.prototype._init.apply(this, arguments);
            }
        };

        //inherit prototype
        Children.prototype = Object.create(Parent.prototype, methods);
        Children.prototype.constructor = Children;

        //constructor
        if (init != null) {
            Children.prototype._init = init;
        }

        if (hasOwnFields) {
            Children.prototype._initFields = initFields;
        }

        //static methods
        Children.extend = Parent.extend;

        return Children;
    };

    return Inherit;
});