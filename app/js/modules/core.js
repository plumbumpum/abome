define(function (require) {
    var events = { },

    subscribe = function (eventName, callback, context) {
        var event = events[eventName] = events[eventName] || { subscribers: [] };

        event.subscribers.push({ callback: callback, context: context || null });

        return this;
    },

    publish = function () {
        var args = Array.prototype.slice.apply(arguments),
            eventName = args.shift();

        if (typeof events[eventName] === 'undefined') {
            throw new Error('event ' + eventName + ' undefined');
        }

        events[eventName].subscribers.forEach(function (subscriber) {
            subscriber.callback.apply(subscriber.context, args);
        });
    };
    
    return {
        subscribe: subscribe,
        publish: publish
    };
});