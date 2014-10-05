define([
    'react',
    //pages
    'jsx!pages/main',
    //libs
    'routie',
    'moment',
    'moment-ru',
    'modules/arrayExtension'
], function (
    React,
    //pages
    MainPage
    ) {

    return {
        locale: function () {
            moment.lang('ru');
        },

        router: function () {
            routie({
                '': function () {
                    React.renderComponent(MainPage(), document.getElementById('wrapper'));
                }
            })
        }
    }
});