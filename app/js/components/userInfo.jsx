define(function(require) {
    var React = require('react'),
        userInfo;

    userInfo = React.createClass({
        getInitialState: function () {
            return { user: { } }
        },
        
        componentDidMount: function () {
            var userData = require('data/user');

            this.setState({
                user: userData
            });
        },
        
        render: function () {
            return (
                <div className="userInfo">
                    <div className="border [ fade-in duration-1000ms ]"></div>
                    <section className="[ slide-left duration-300ms delay-100ms ]">
                        <div className="name">{ this.state.user.name }</div>
                        <div className="surname">{ this.state.user.surname }</div>
                        <div className="mail">{ this.state.user.mail }</div>
                        <div className="post">{ this.state.user.post }</div>
                    </section>
                </div>
            );
        }
    });

    return userInfo;
});