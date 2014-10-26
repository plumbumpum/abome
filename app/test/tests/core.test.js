define(function (require) {
    var core = require('core');

    describe('core', function () {
        it('subscribe for event', function () {
            var number = 4;

            core.subscribe('changeNumber', function () {
                number = 8;
            });

            core.publish('changeNumber');

            expect(number).toEqual(8);
        });

        it('pass arguments', function () {
            var person = {
                name: 'ablay',
                age: '19'
            };

            core.subscribe('changePerson', function (name, age) {
                person.name = name;
                person.age = age;
            });

            core.publish('changePerson', 'amina', 22);

            expect(person.name).toEqual('amina');
            expect(person.age).toEqual(22);
        });
    });

});
