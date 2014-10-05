define([
    'react',
    'jsx!components/page',
    'jsx!components/background',
    'jsx!components/userInfo',
    'jsx!components/career/career',
    'jsx!components/characteristic/characteristic'
], function (
    React,
    page,
    background,
    userInfo,
    career,
    characteristic
    ) {

    var mainPage;

    mainPage = React.createClass({
        render: function () {
            return (
                <page id="mainPage">
                    <header>
                        <userInfo />
                    </header>
                    <section>
                        <characteristic />
                    </section>
                    <footer>
                        <career />
                    </footer>
                </page>
            );
        }
    });
    
    return mainPage;
});