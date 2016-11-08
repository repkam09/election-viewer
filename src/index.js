// main.js
const React = require('react');
const ReactDOM = require('react-dom');
const Reactbase = require("./react/main.jsx");

ReactDOM.render(<Reactbase />, document.getElementById('example'));

if (isDevReact()) {
    console.log("React is running as development.")
} else {
    console.log("React is running as production.");
}

function isDevReact() {
    try {
        React.createClass({});
    } catch (e) {
        if (e.message.indexOf('render') >= 0) {
            return true;  // A nice, specific error message
        } else {
            return false;  // A generic error message
        }
    }
    return false;  // should never happen, but play it safe.
};
