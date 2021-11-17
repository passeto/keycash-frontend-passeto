import React, { useState, useEffect, useContext } from 'react';
import {
  ScrollView, StyleSheet, View, ActivityIndicator,
} from 'react-native';
import {
  Container, NavBar, ProductList,
} from 'components';
import { scale } from 'react-native-size-matters';
import Colors from 'themes/colors';
import Controls from './Controls';
import PropertiesContext from '../../contexts/properties';


const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: scale(10),
    borderTopRightRadius: scale(10),
    flex: 1,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  controls: {
    flexDirection: 'row',
    paddingHorizontal: scale(14),
    justifyContent: 'space-between',
    paddingVertical: scale(14),
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.gray25,
  },
  divider: {
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.gray25,
  },
  filter: {
    marginLeft: scale(5),
  },
});

const Home = ({ navigation, route, productList, isLoadingProductList,  getProductsToCategory}) => {

    const { properties, getProperties, loading } = useContext(PropertiesContext);

  useEffect(async() => {
    await getProperties('price');
  }, []);

  const [display, setDisplay] = useState('grid');
  return (
    <Container backgroundColor="primary" asGradient>
      <NavBar
        title={'Imóveis Disponíveis'}
      />
      <View style={styles.container}>
        <Controls onDisplayChange={setDisplay} />
        <ScrollView>
          {
            loading ? (
              <View>
                <ActivityIndicator size="large" color={Colors.primary} />
              </View>
            ) :
            (
              <ProductList 
              productList={properties ? properties : []}
              navigation={navigation}
              variant={display} />
            )
          }
        </ScrollView>
      </View>
    </Container>
  );
};

export default Home;
