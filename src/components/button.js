import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {secondaryColor, whiteColor} from '../Util';

export default props => {
  const {onPress, children} = props;
  const styles = _styles();
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.txt}>{children}</Text>
    </TouchableOpacity>
  );
};

const _styles = () => {
  return ScaledSheet.create({
    button: {
      // backgroundColor: secondaryColor,
      height: '40@vs',
      marginRight: '23@ms',
      marginLeft: '24@ms',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '10@vs',
      borderRadius: '4@ms',
      paddingRight: '20@ms',
      paddingLeft: '20@ms',
      borderWidth: 2,
      borderColor: secondaryColor,
      width: '60%',
    },
    txt: {
      color: secondaryColor,
      fontWeight: 'bold',
      fontSize: '20@ms',
    },
  });
};
