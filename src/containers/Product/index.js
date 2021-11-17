import React, { useState, } from 'react';
import {
  Text, NavBar, Container, Carousel
} from 'components';
import { ScrollView, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { getScreenHeight } from 'utils/size';
import { scale } from 'react-native-size-matters';
import Colors from 'themes/colors';
import Details from './Details';
import Icon from 'react-native-vector-icons/FontAwesome';
import NumberFormat from 'react-number-format';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carousel: {
    height: getScreenHeight() / 2,
    resizeMode: 'contain',
  },
  discount: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    marginTop: scale(14),
  },
  card: {
    padding: scale(14),
    marginBottom: scale(14),
    backgroundColor: Colors.white,
  },
  rating: {
    marginTop: scale(14),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  control: {
    flexDirection: 'row',
  },
  icon: {
    paddingLeft: scale(14),
  },
  navbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  between: {
    justifyContent: 'space-between',
  },
});



const Product = ({ navigation, route }) => {
  const { product } = route.params;

  const [variant, setVariant] = useState('ghost');

  const onScroll = (y) => {
    setVariant(y > getScreenHeight() / 2 ? 'gradient' : 'ghost');
  };

  return (
    <Container>
      <ScrollView
        onScroll={({ nativeEvent: { contentOffset: { y } } }) => onScroll(y)}
        scrollEventThrottle={16}
      >
        <Carousel
          style={styles.carousel}
          images={product.images}
          autoplay={false}
        />
        <View style={styles.card}>
          <Text font="p1" weight="medium">{product.address.formattedAddress}</Text>
          <View style={styles.priceContainer}>
            <View style={styles.price}>
              <NumberFormat
                value={product.price}
                displayType={'text'}
                decimalScale={2}
                thousandSeparator={"."}
                decimalSeparator={","}
                prefix={'R$ '}
                renderText={value => <Text color="tertiary" weight="large">{`${value},00`}</Text>}
              /> 
            </View>
          </View>
          <View style={styles.rating}>

          </View>
          <View style={[styles.row, styles.between]}>
            <Text color="secondary" weight="medium">{`Área útil: ${product.usableArea  } m²`}</Text>
            <Text color="secondary" weight="medium">{product.parkingSpaces}</Text>
            <Icon
              name="car"
              size={22}
              />
            <Text color="secondary" weight="medium">{product.bedrooms}</Text>
            <Icon
              name="bed"
              size={22}
              />
              <Text color="secondary" weight="medium">{product.bathrooms}</Text>
            <Icon
              name="bath"
              size={22}
            />

          </View>
        </View>
        <Details product={product} />
      </ScrollView>
      <NavBar
        onLeftIconPress={() => navigation.goBack()}
        containerStyle={styles.navbar}
        title={variant !== 'ghost' ? product.name : null}
        variant={variant}
      />
    </Container>
  );
};

Product.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
};

export default Product;
