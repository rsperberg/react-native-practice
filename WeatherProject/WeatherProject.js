var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
} = React;

var Forecast = require('./Forecast');

var WeatherProject = React.createClass({
  // Could enter default zip code here
  getInitialState() {
  	return ({
  	  zip: '',
  	  forecast: {
  	  	main: 'Clouds',
  	  	description: 'few clouds',
  	  	temp: 63.5
  	  }
  	});
  },
  // We pass this callback to the <TextInput>
  _handleTextChange(event) {
  	// log statements are viewable in Xcode
  	// and in the Chrome debug tools
  	console.log(event.nativeEvent.text);
  	this.setState({zip: event.nativeEvent.text});
  },
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
        	You input {this.state.zip}.
        </Text>
        <Forecast
        	main={this.state.forecast.main}
        	description={this.state.forecast.description}
        	temp={this.state.forecast.temp} />
        <TextInput
        	style={styles.input}
        	returnKeyType='go'
         	onSubmitEditing={this._handleTextChange} />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5F5FCF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
  	fontSize: 20,
  	borderWidth: 2,
  	height: 40
  }
});

module.exports = WeatherProject;
