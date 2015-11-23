/**
 * WeatherProject React Native App from Bonnie Eisenman, Learning React Native (O'Reilly), p45
 * https://github.com/facebook/react-native
 */
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
  	  forecast: null
  	});
  },
  // We pass this callback to the <TextInput>
  _handleTextChange(event) {
   	var zip = event.nativeEvent.text;
 	// log statements are viewable in Xcode
  	// and in the Chrome debug tools
  	console.log(zip);
  	this.setState({zip: zip});
  	fetch('http://api.openweathermap.org/data/2.5/weather?q=' + zip + '&units=imperial')
  		.then((response) => response.json())
  		.then((responseJSON) => {
  		// just taking a look at the format
  		console.log(responseJSON);
  		this.setState({
  			forecast: {
  				main: responseJSON.weather[0].main,
  				description: responseJSON.weather[0].description,
  				temp: responseJSON.main.temp
  			}
  		});
  	})
  	.catch((error) => {
  		console.warn(error);
  	});
  },

  render() {
  	var content = null;
  	if (this.state.forecast !== null) {
  		content = <Forecast
  					main={this.state.forecast.main}
  					description={this.state.forecast.description}
  					temp={this.state.forecast.temp} />;
  	}
    return (
    <View style={styles.container}>
		<Image source={require('image!flowers')}
			resizeMode='cover'
			style={styles.backdrop}>
			<View style={styles.overlay}>
				<View style={styles.row}>
				    <Text style={styles.mainText}>
				    	Current weather for
				    </Text>
				    <View style={styles.zipContainer}>
				    	<TextInput
					    	style={[styles.zipCode, styles.mainText]}
					    	returnKeyType='go'
					     	onSubmitEditing={this._handleTextChange} />
					</View>
				</View>
			    {content}
			</View>
		</Image>
	</View>
    );
  }
});

var baseFontSize = 16;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
	paddingTop: 30
  },
  backdrop: {
  	flex: 1,
  	flexDirection: 'column'
  },
  overlay: {
  	paddingTop: 5,
  	backgroundColor: '#000000',
  	opacity: 0.5,
  	flexDirection: 'column',
  	alignItems: 'center'
  },
  row: {
  	flex: 1,
  	flexDirection: 'row',
  	flexWrap: 'nowrap',
  	alignItems: 'flex-start',
  	padding: 30
  },
  zipContainer: {
  	flex: 1,
  	borderBottomColor: '#DDDDDD',
  	borderBottomWidth: 1,
  	marginLeft: 5,
  	marginTop: 3
  },
  zipCode: {
  	width: 50,
  	height: baseFontSize
  },
  mainText: {
  	flex: 1,
    fontSize: baseFontSize,
    color: '#FFFFFF'
  }
});

module.exports = WeatherProject;
