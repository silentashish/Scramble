import React from 'react';
import {View, Text, StatusBar} from 'react-native';
// import {Button} from 'native-base';
import {styles} from './styles';
import LottieView from 'lottie-react-native';
import {Button, Divider} from '../../components';
import {secondaryColor} from '../../Util';

export default props => {
  const {navigation} = props;
  return (
    <View style={styles.mainView}>
      <StatusBar backgroundColor={'#1a1a1a'} />
      <View style={styles.centerElement}>
        <View>
          <Text style={[styles.bigText, {color: secondaryColor}]}>
            Scramble
          </Text>
          <Text style={styles.smallText}>
            Generate original word from scrabble words
          </Text>
        </View>
        <View style={styles.animationBox}>
          <LottieView
            source={require('../../assets/Animations/search.json')}
            autoPlay
            loop
            style={styles.animation}
          />
        </View>

        <Button onPress={() => navigation.navigate('Home')}>Start</Button>
      </View>
    </View>
  );
};
