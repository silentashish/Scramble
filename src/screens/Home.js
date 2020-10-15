import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  Button,
  Alert,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import {getQuestionFromApi} from '../Utils';
import TitleBar from '../components/TitleBar';
import {useDispatch} from 'react-redux';
import Question from '../components/Question';
import store from '../Store';
import {Divider} from '../components';
import {primaryColor, whiteColor} from '../Util';

const Home = props => {
  const [answerText, setAnswerText] = useState('');
  const [scramblerLength, setScramblerLength] = useState(1);

  const [level, setLevel] = useState(1);

  const dispatch = useDispatch();

  changeAnswerText = value => {
    setAnswerText(() => value);
  };

  const updateScramblerLength = value => {
    setScramblerLength(() => value);
  };

  const endGame = () => {
    props.navigation.goBack();
  };

  useEffect(() => {
    dispatch(getQuestionFromApi());
  }, []);

  handleButtonPress = () => {
    updateScramblerLength(scramblerLength + 1);
    let currentQuestion = store.getState().scrambler;
    if (currentQuestion.length != 0) {
      let actualWord = currentQuestion.actual_word.replace(/\s+/g, '');
      if (answerText.toLowerCase() == actualWord) {
        dispatch(getQuestionFromApi());
        setAnswerText('');
        setLevel(level => level + 1);
      } else {
        if (answerText != '') {
          Alert.alert(
            'Wrong',
            'Incorrect !! Unscramble Again',
            [{text: 'OK', onPress: () => console.log('OK Pressed')}],
            {
              cancelable: false,
            },
          );
        }
      }
    } else {
      dispatch(getQuestionFromApi());
    }
  };

  return (
    <View style={styles.container}>
      <TitleBar level={level} />
      <Question />
      <View style={styles.actionBox}>
        <View style={styles.textBox}>
          <TextInput
            placeholder="Answer"
            style={styles.txtInput}
            onChangeText={changeAnswerText}
            value={answerText}
          />
        </View>
        <TouchableOpacity style={styles.okButton} onPress={handleButtonPress}>
          <Text style={styles.txt}>SUBMIT</Text>
        </TouchableOpacity>
        <Divider small />
        <View>
          <TouchableOpacity style={styles.endGame} onPress={endGame}>
            <Text>END GAME</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  okButton: {
    backgroundColor: 'transparent',
    borderWidth: 3,
    borderColor: '#D9195F',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    paddingVertical: 10,
  },
  txt: {
    color: whiteColor,
    fontWeight: 'bold',
    fontSize: 20,
  },
  container: {
    flex: 1,
    backgroundColor: primaryColor,
    justifyContent: 'space-between',
  },
  textBox: {
    backgroundColor: '#e4e4e4',
    borderRadius: 5,
    marginBottom: 20,
  },
  titleBarImage: {
    width: '100%',
    height: '80%',
    alignSelf: 'center',
  },
  actionBox: {
    width: '90%',
    alignSelf: 'center',
    paddingBottom: 20,
  },
  txtInput: {padding: 20, textAlign: 'center', fontSize: 20},
  endGame: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export {Home as HomeScreen};
