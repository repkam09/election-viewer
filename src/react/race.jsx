const React = require('react');


var RaceDisplay = React.createClass({
    render: function () {
        const rd = this.props.data;
        var stats = rd.candidates.map((can) => {
            return (
                <p>
                    {can.lname} has {can.evotes} out of {rd.evotes} electoral votes in {this.props.state}
                </p>
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