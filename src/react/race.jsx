const React = require('react');
var PieChart = require("react-chartjs").Pie;

var RaceDisplay = React.createClass({
    render: function () {
        const rd = this.props.data;

        var stats = rd.candidates.map((can) => {
            var displayClass = "white-text";
            if (can.evotes > 0) {
                displayClass = "green-text";
            }
            return (
                    <div className={displayClass}>{can.fname} {can.lname} has {can.evotes} out of {rd.evotes}</div>
            )
        });
        
        return (
            <div className="race-display">
                <h1>{this.props.state}</h1>
                {stats}
                <br />
            </div>
        );
    },
});

module.exports = RaceDisplay;