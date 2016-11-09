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
                    {can.fname} {can.lname} is {progress}% of the way to 270. Currently {can.evotes} out of 270.
                </div>
            )
        });

        var cssclass = "overall-race-display " + displayClass;
        return (
            <div className={cssclass} >
            <center>
                <table>
                    <tr>
                        <td><img src="img/trump.png" width={150} /></td>
                        <td>
                            <h1>Overall Presidential Race</h1>
                            {stats}
                            <div>{rd.pctsrep}% of the vote is reporting</div>
                            <br />
                        </td>
                        <td><img src="img/clinton.png" width={180} /></td>
                    </tr>
                </table>
                </center>
            </div>
        );
    },
});

module.exports = OverallRace;