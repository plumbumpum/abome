require(['jquery', 'jasmine-html'], function ($) {
    var jasmineEnv = jasmine.getEnv(),
        htmlReporter = new jasmine.HtmlReporter();

    jasmineEnv.updateInterval = 1000;
    jasmineEnv.addReporter(htmlReporter);
    jasmineEnv.specFilter = function(spec) {
        return htmlReporter.specFilter(spec);
    };

    require([
        'tests/inherit.test',
        'tests/tryGet.test',
        'tests/core.test'
    ], function(){
        jasmineEnv.execute();
    });
});