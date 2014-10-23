define(function (require) {
    var _ = require('underscore'),
    underscoreExtension = require('modules/extensions/underscoreExtension');

    describe('try get value from children', function () {
        var model = {
            children: {
                age: 19
            },

            children2: {

            },

            children3: {
                children4: {
                    tall: 18
                }
            }
        };

        it('get age from children', function () {
            var childrenAge = _.tryGet(model, 'children.age');

            expect(childrenAge).toEqual(19);
        });

        it('get tall from children4', function () {
            var children4Tall = _.tryGet(model, 'children3.children4.tall');

            expect(children4Tall).toEqual(18);
        });

        it('do not change source', function () {
            expect(model.children.age).toEqual(19);
        });

        it('get default value', function () {
            var children2Age = _.tryGet(model, 'children2.age', 0);

            expect(children2Age).toEqual(0);
        });
    });
});