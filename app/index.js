var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');
require('./style/index.scss');
var App = require('./components/App');

/*USING PROPTYPES

App.propTypes = {
	img: PropTypes.string.isRequired,
	list: PropTypes.arrayOf(PropTypes.object)
}
*/
ReactDOM.render(<App />, document.getElementById('app'));