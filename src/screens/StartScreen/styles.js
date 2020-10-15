import {ScaledSheet} from 'react-native-size-matters';
import {secondaryColor, primaryColor} from '../../Util';

export const styles = ScaledSheet.create({
  InfoSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '5@ms',
  },
  mainView: {
    flex: 1,
    backgroundColor: primaryColor,
  },
  levelText: {
    textAlign: 'center',
    fontSize: '30@ms',
    margin: '10@ms',
  },
  timeText: {
    marginBottom: '5@ms',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '20@ms',
  },
  timesText: {
    textAlign: 'center',
    fontSize: '25@ms',
    marginBottom: '5@ms',
  },
  problemIndex: {
    textAlign: 'center',
    fontSize: '20@ms',
    fontWeight: 'bold',
    marginBottom: '20@ms',
  },
  timeLifeView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  oldAnswerView: {
    flexDirection: 'row',
    paddingRight: '25@ms',
    paddingLeft: '25@ms',
    marginBottom: '15@ms',
    alignItems: 'center',
    justifyContent: 'center',
  },
  oldAnswerSubView: {
    borderRadius: '10@ms',
    backgroundColor: '#a1a1a1',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: '10@ms',
    paddingLeft: '10@ms',
    paddingTop: '3@ms',
    paddingBottom: '3@ms',
    minWidth: '100@ms',
    marginRight: '5@ms',
  },
  itemText: {
    fontSize: '20@ms',
    textAlign: 'center',
  },
  lifeText: {
    marginBottom: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '20@ms',
    letterSpacing: 10,
  },
  heartView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: '5@ms',
  },
  instruction: {
    marginHorizontal: '20@ms',
    fontSize: '15@ms',
    marginBottom: '20@ms',
    textAlign: 'center',
  },
  divider: {
    height: '10@ms',
  },
  animation: {
    height: '300@vs',
    width: '300@vs',
    justifyContent: 'center',
    alignItems: 'center',
  },
  animationBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bigText: {
    fontSize: '50@ms',
    textAlign: 'center',
    fontWeight: 'bold',
    color: secondaryColor,
  },
  smallText: {
    fontSize: '12@ms',
    color: secondaryColor,
  },
  centerElement: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  widthLess: {
    maxWidth: '70%',
  },
});
