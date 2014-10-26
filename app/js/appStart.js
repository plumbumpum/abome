require(['app'], function (app) {
    app.core
        .subscribe('mainPage', app.component.insert.bind(this, 'layout', app.dom('#wrapper')) );

    app.core.publish('mainPage');
});