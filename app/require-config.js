requirejs.config({
    baseUrl: '/js',
    urlArgs: 'version=0.0.1',

    paths: {
        //libs
        'jquery': '/bower/jquery/dist/jquery.min',
        'react': '/bower/react/react-with-addons.min',
        'JSXTransformer': '/bower/react/JSXTransformer',
        'jsx': '/bower/jsx-requirejs-plugin/js/jsx',
        'text': '/bower/jsx-requirejs-plugin/js/text',
        'moment': '/bower/momentjs/moment',
        'moment-ru': '/bower/momentjs/locale/ru',
        'underscore': '/bower/underscore/underscore-min',
        'routie': '/bower/routie/lib/routie',
        'json': '/bower/requirejs-plugins/src/json',
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