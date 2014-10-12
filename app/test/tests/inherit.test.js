define(['inherit'], function (Inherit) {

    describe('inherit', function () {
        var Parent,
            Children,
            Children2,
            Children3,
            parentInstance,
            childrenInstance,
            children2Instance,
            children3Instance;

        Parent = Inherit.extend({
            init: function (name) {
                this.name = name;
            },

            name: 'none',

            age: 19,

            properties: ['name', 'surname', 'age'],

            getName: function () {
                return this.name();
            }
        });

        Children = Parent.extend({
            rating: 20,

            showAge: function () {
                return this.age;
            }
        });

        Children2 = Children.extend({
            init: function (name, surname) {
                this.name = name;
                this.surname = surname;
            },

            surname: 'none'
        });

        Children3 = Children.extend({
            tall: '2m',

            getTall: function () {
                return this.tall;
            }
        });

        parentInstance = new Parent('jack');
        childrenInstance = new Children('john');
        children2Instance = new Children2('mark', 'brown');
        children3Instance = new Children3('luk');

        it('should init', function () {
            expect(Parent.prototype.init).toBeUndefined();
            expect(parentInstance.name).toEqual('jack');
            expect(childrenInstance.name).toEqual('john');
            expect(children2Instance.name).toEqual('mark');
            expect(children2Instance.surname).toEqual('brown');
            expect(children3Instance.name).toEqual('luk');
        });

        it('should inherit from parent', function () {
            expect(parentInstance instanceof Parent).toBeTruthy();
            expect(childrenInstance instanceof  Parent && childrenInstance instanceof Children).toBeTruthy();
            expect(children2Instance instanceof  Parent && children2Instance instanceof Children && children2Instance instanceof Children2).toBeTruthy();
        });

        it('has own properties', function () {
            expect(parentInstance.hasOwnProperty('age')).toBeTruthy();
            expect(parentInstance.hasOwnProperty('properties')).toBeTruthy();
            expect(childrenInstance.hasOwnProperty('properties')).toBeTruthy();
            expect(children2Instance.hasOwnProperty('properties')).toBeTruthy();
        });

        it('has methods in prototype', function () {
            expect(typeof parentInstance.getName == 'function').toBeTruthy();
            expect(typeof childrenInstance.showAge == 'function').toBeTruthy();
            expect(parentInstance.hasOwnProperty('getName')).toBeFalsy();
            expect(childrenInstance.hasOwnProperty('showAge')).toBeFalsy();
        });
    });

});