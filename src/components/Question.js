import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {pinkColor, whiteColor} from '../Util';

const Question = () => {
  const getCurrentQuestion = () => {
    let result = useSelector(state => state);
    if (result.scrambler.length != 0) {
      return result.scrambler.split_scrambled_word;
    } else {
      return [];
    }
  };

  const allQuestion = getCurrentQuestion();

  return (
    <View style={styles.questionContainer}>
      {allQuestion.length > 0 ? (
        allQuestion.map(letter => {
          return (
            <View style={styles.box}>
              <Text style={styles.letter}>{letter.toUpperCase()}</Text>
            </View>
          );
        })
      ) : (
        <ActivityIndicator color={whiteColor} size={50} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  letter: {
    fontSize: 45,
    color: whiteColor,
    // textAlign: 'center',

    // fontWeight: 'bold',
  },
  box: {
    // borderWidth: 2,
    // borderColor: '#F48023',
    margin: 5,
    height: 70,
    width: 50,
    backgroundColor: pinkColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  questionContainer: {
    alignSelf: 'center',
    marginBottom: 50,
    marginTop: 20,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});
export default Question;
