import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    padding: 40
  },
  box: {
    backgroundColor: 'yellow',
    width: width / 2,
    height: height / 3,
    position: 'absolute',
    top: 20,
    left: 30,
    borderRadius: 3
  },
  text: {
    color: 'grey',
    fontSize: 30,
    fontWeight: '500'
  }
});
