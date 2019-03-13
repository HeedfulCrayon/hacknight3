import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Environment,
  VrButton,
  asset,
  VrHeadModel,
} from 'react-360';

export default class test360App extends React.Component {
  state = {
    currentIndex: 0,
    image: ["360_world.jpg","SnowPhoto.jpeg"]
  }
  changeBackground = () =>
  {
    let size = this.state.image.length;
    Environment.setBackgroundImage(asset(this.state.image[++this.state.currentIndex % size]));
  }
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <VrButton onClick={this.changeBackground}>
            <Text style={styles.greeting}>
                Click to change background
              </Text>
          </VrButton>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('test360App', () => test360App);
