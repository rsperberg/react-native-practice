/**
 * WeatherProject React Native App from Bonnie Eisenman, Learning React Native (O'Reilly), p45
 * https://github.com/facebook/react-native
 */
var React = require('react-native');
var {
	StyleSheet,
	Text,
	View
} = React;

var Forecast = React.createClass({
	render() {
		return (
			<View>
				<Text style={styles.bigText}>
					{this.props.main}
				</Text>
				<Text style={styles.mainText}>
					Current conditions: {this.props.description}
				</Text>
				<Text style={styles.bigText}>
					{this.props.temp}℉
				</Text>
			</View>
		);
	}
});

var styles= StyleSheet.create({
	bigText: {
		flex: 2,
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
		color: '#FFFFFF'
	},
	mainText: {
		flex: 1,
		fontSize: 16,
		textAlign: 'center',
		color: '#FFFFFF'
	}
})

module.exports = Forecast;
