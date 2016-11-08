const React = require('react');
const exampledata = require('../exampledata.json');
const Race = require('./race.jsx');

var MainPage = React.createClass({

    getInitialState: function () {
        return { hasData: false, data: null };
    },
    render: function () {
        if (!this.state.hasData) {
            return (
                <div>
                    <p>Loading...</p>
                </div>
            );
        } else {
            // If we get to here, we have valid data!
            var races = this.state.data.races.map((race) => {
                return (
                    <Race state={race.state} data={race} key={race.raceid} />
                )
            });

            return (
                <div className="races-wrapper">
                    {races}
                </div>
            );
        }
    },

    componentDidMount: function () {
        var debug = false;

        if (debug) {
            this.setState({ hasData: true, data: exampledata });
        } else {
            var that = this;
            getreq("https://api.repkam09.com/api/election/full").then((result) => {
                var data = JSON.parse(result);
                that.setState({ hasData: true, data });
            });
        }
    }
});

module.exports = MainPage;

function getreq(url) {
    return new Promise((resolve, reject) => {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", url, true);

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4) {
                resolve(xmlhttp.responseText);
            }
        }

        xmlhttp.send();
    });
}