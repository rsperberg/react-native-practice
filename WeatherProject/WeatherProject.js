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
			    <Forecast
			    	main={this.state.forecast.main}
			    	description={this.state.forecast.description}
			    	temp={this.state.forecast.temp} />
			</View>
		</Image>
	</View>
    );
  }
});

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
  }
  row: {
  	flex: 1,
  	flexDirection: 'row',
  	flexWrap: 'nowrap',
  	alignItems: 'flex-start',
  	padding: 30
  },
  zipContainer: {
  	flex: 1,
  	borderBottomColor: '#000000',
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
