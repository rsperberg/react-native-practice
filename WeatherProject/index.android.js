/**
 * WeatherProject React Native App from Bonnie Eisenman, Learning React Native (O'Reilly), p45
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry
} = React;

var WeatherProject = require('./WeatherProject');
AppRegistry.registerComponent('WeatherProject', () => WeatherProject);

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
