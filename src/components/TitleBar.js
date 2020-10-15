import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {whiteColor} from '../Util';

const TitleBar = ({level}) => {
  return (
    <View style={styles.headerDiv}>
      <StatusBar backgroundColor={'#1a1a1a'} />
      <Text style={styles.titleBatText}>SCRAMBLE </Text>
      {/* <View style={styles.lineStyle} /> */}
      <Text style={styles.textLevel}>Level : {level}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerDiv: {
    backgroundColor: '#1a1a1a',
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  titleBatText: {
    fontSize: 26,
    alignSelf: 'center',
    // margin: '5%',
    color: '#fff',
    fontWeight: 'bold',
  },
  lineStyle: {
    borderWidth: 1.5,
    borderColor: 'black',
    margin: 5,
  },
  textLevel: {
    color: whiteColor,
  },
});

export default TitleBar;
