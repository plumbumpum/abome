var rq = {
    bowerComponent: function (path) {
        return '/bower_components/' + path;
    }
};

requirejs.config({
    baseUrl: '/js',

    paths: {
        //libs
        'jquery': rq.bowerComponent('jquery/dist/jquery.min'),
        'react': rq.bowerComponent('react/react-with-addons.min'),
        'JSXTransformer': rq.bowerComponent('react/JSXTransformer'),
        'jsx': rq.bowerComponent('jsx-requirejs-plugin/js/jsx'),
        'text': rq.bowerComponent('jsx-requirejs-plugin/js/text'),
        'moment': rq.bowerComponent('momentjs/moment'),
        'moment-ru': rq.bowerComponent('momentjs/locale/ru'),
        'underscore': rq.bowerComponent('underscore/underscore-min'),
        'routie': rq.bowerComponent('routie/lib/routie'),
        'json': rq.bowerComponent('requirejs-plugins/src/json'),
        //paths
        'data': '/data',
        //modules
        'inherit': 'modules/inherit'
    },

    jsx: {
        fileExtension: '.jsx'
    },

    shim: {
    }
});