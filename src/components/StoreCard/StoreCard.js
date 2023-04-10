import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './StoreCard.style';

const StoreCard = ({products}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: products.imgURL}} />
      <Text style={styles.title}>{products.title}</Text>
      <Text style={styles.price}>{products.price}</Text>

      {products.inStock === false && (
        <Text style={styles.inStock}>Out of Stock</Text>
      )}
    </View>
  );
};

export default StoreCard;
