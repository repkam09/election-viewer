const React = require('react');
const exampledata = require('../exampledata.json');
const Race = require('./race.jsx');
const OverallRace = require('./overallrace.jsx');

var MainPage = React.createClass({

    getInitialState: function () {
        return { hasData: false, data: null };
    },
    render: function () {
        if (!this.state.hasData) {
            return (
                <div className="main-app">
                    <center>
                        <h1>Election Results Viewer</h1>
                        <p>This page will show the results, in terms of electoral votes, won by each candidate in each state</p>
                        <div className="races-wrapper">
                            Loading Results
                        </div>
                    </center>
                </div>
            );
        } else {
            // If we get to here, we have valid data!
            var usarace = null;
            var races = this.state.data.races.map((race) => {
                if (race.state !== "UNITED STATES") {
                    return (
                        <Race state={race.state} data={race} key={race.raceid} />
                    )
                } else {
                    // Grab the overall USA race out of the others
                    usarace = race;
                }
            });

            return (
                <div className="main-app">
                    <center>
                        <h1>Election Results Viewer</h1>
                        <p>This page will show the results, in terms of electoral votes, won by each candidate in each state</p>
                        <div className="races-wrapper">
                            <OverallRace data={usarace} key={usarace.raceid} />
                            {races}
                        </div>
                    </center>
                </div>
            );
        }
    },

    componentDidMount: function () {
        var that = this;
        getreq("https://api.repkam09.com/api/election/full").then((result) => {
            var data = JSON.parse(result);
            that.setState({ hasData: true, data });
        });
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