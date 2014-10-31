define(function (require) {
    var React = require('react'),
        api = require('api'),
        avatar = require('jsx!./avatar'),
        detailList = require('jsx!./detail-list');

    return React.createClass({
        getInitialState: function () {
            return { userAvatar: '', userInfo: [] };
        },

        componentDidMount: function () {
            api.get('userInfo:name, surname, age, city, ava', { login: this.props.userId })
                .done(function (userInfo) {
                    var state = { };

                    state.userAvatar = userInfo.ava;

                    state.userInfo = [
                        { title: userInfo.surname, value:  userInfo.name },
                        { title: 'возраст', value:  userInfo.age },
                        { title: 'город', value:  userInfo.city }
                    ];

                    this.setState(state);
                }.bind(this));
        },
        
        render: function () {
            return (
                <div>
                    <header>
                        <avatar img={ this.state.userAvatar } />
                    </header>

                    <section>
                        <detailList info={ this.state.userInfo } />
                    </section>
                </div>
            );
        }
    });
});