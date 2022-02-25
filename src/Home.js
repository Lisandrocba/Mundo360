import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  asset
} from 'react-360';

export default class Home extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            image:{
                url: 'logo.png',
                Width: 500,
                Height: 500
            }
        }
    }

  render() {
      const {url, Width, Height} = this.state.image
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
            <Image source={asset(url)} style={{width: Width, height: Height}} />
          <Text style={styles.greeting}>
            Mundo 360
          </Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 540,
    height: 700,  
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#ffffff',
    borderColor: 'black',
    borderWidth: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  greeting: {
    fontSize: 30,
    color: 'black',
    fontSize: 30,
  },
});