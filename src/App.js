import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  TextInput,
  View,
} from 'react-native';
import products from './products.json';
import StoreCard from './components/StoreCard/StoreCard';
import BannerProduct from './components/BannerProduct/BannerProduct';

function App() {
  const renderProducts = ({item}) => <StoreCard products={item} />;
  const keyNews = item => item.id;

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.title}>Apple Store</Text>
        <TextInput
          style={styles.text_input}
          placeholder="Search.."
          placeholderTextColor={'black'}
        />

        <FlatList
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={BannerProduct}
          numColumns={2}
          keyExtractor={keyNews}
          data={products}
          renderItem={renderProducts}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginTop: 10,
    color: 'orange',
    fontSize: 35,
    fontWeight: 'bold',
  },
  text_input: {
    width: Dimensions.get('window').width - 20,
    height: Dimensions.get('window').height / 15,
    backgroundColor: '#f1f1f1',
    borderWidth: 1,
    borderColor: '#f1f1f1',
    borderRadius: 10,
    margin: 10,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 20,
  },
});

export default App;
