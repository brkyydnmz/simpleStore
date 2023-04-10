import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  horizontal_products: {
    width: Dimensions.get('window').width / 1,
    borderRadius: 10,
    height: Dimensions.get('window').height / 6,
    margin: 10,
    resizeMode: 'contain',
  },
});
