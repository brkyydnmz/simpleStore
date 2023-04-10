import React from 'react';
import {Image, ScrollView} from 'react-native';
import styles from './BannerProduct.style';
import products_data from '../../products.json';

const BannerProduct = ({products}) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {products_data.map(horizontalProducts => (
        <Image
          style={styles.horizontal_products}
          source={{uri: horizontalProducts.imgURL}}
        />
      ))}
    </ScrollView>
  );
};

export default BannerProduct;
