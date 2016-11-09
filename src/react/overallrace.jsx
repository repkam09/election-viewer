const React = require('react');

var OverallRace = React.createClass({
    render: function () {
        const rd = this.props.data;
        var displayClass = "colour-none";
        var electcount = 0;
        var stats = rd.candidates.map((can) => {
            if (can.evotes > 270 && can.evotes > electcount) {
                displayClass = "colour-" + can.party;
            }

            var progress = ((can.evotes / 270) * 100).toFixed(2)

            return (
                <div>
                    {can.fname} {can.lname} is {progress}% of the way to 270. {can.evotes} out of 270.
                </div>
            )
        });

        var cssclass = "overall-race-display " + displayClass;
        return (
            <div className={cssclass} >
                <h1>Overall Presidential Race</h1>
                {stats}
                <div>{rd.pctsrep}% of the vote is reporting</div>
                <br />
            </div>
        );
    },
});

module.exports = OverallRace;