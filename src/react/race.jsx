const React = require('react');
var PieChart = require("react-chartjs").Pie;

var RaceDisplay = React.createClass({
    render: function () {
        const rd = this.props.data;

        var displayClass = "colour-none";
        var electcount = 0;
        var stats = rd.candidates.map((can) => {
            if (can.evotes > 0 && can.evotes > electcount) {
                displayClass = "colour-" + can.party;
            }
            return (
                <div key={can.id}>{can.fname} {can.lname} has {can.evotes} out of {rd.evotes}</div>
            )
        });

        var cssclass = "race-display " + displayClass;
        return (
            <div className={cssclass} >
                <h1>{this.props.state}</h1>
                {stats}
                <div>{rd.pctsrep}% of the vote is reporting</div>
                <br />
            </div>
        );
    },
});

module.exports = RaceDisplay;