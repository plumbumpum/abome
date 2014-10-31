require(['app'], function (app) {
    app.core
        .subscribe('userPage:enter', function (userId) {
            app.component.insert('layout', app.dom('#wrapper'), { userId: userId });
        })
        .subscribe('userPage:layout', function (userId) {
            app.component.insert('user-info', app.dom('.info-block'), { userId: userId });
            //app.component.insert('userSkills', app.dom('.skills-block'), { userId: userId });
            app.component.insert('user-career', app.dom('.career-block'), { userId: userId });
        });

    app.route('/', function () {

    });

    app.route('/:login', function (ctx, next) {
        app.core.publish('userPage:enter', ctx.params.login);
    });

    app.start();
});