import React from 'react';
import {
  TouchableOpacity, ImageBackground, StyleSheet, View,
} from 'react-native';
import { getScreenWidth } from 'utils/size';
import { scale } from 'react-native-size-matters';
import PropTypes from 'prop-types';
import Text from '../Text';
import Icon from 'react-native-vector-icons/FontAwesome';
import NumberFormat from 'react-number-format';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: scale(14),
  },
  imageContainer: {
    width: getScreenWidth() / 3.5,
    aspectRatio: 1 / 1,
    borderRadius: scale(8),
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    paddingHorizontal: scale(10),
    justifyContent: 'space-between',
    flex: 1,
  },
  bg: {
    flex: 1,
  },
  between: {
    justifyContent: 'space-between',
  },
  discount: {
    textDecorationLine: 'line-through',
    marginLeft: scale(8),
  },
});

const ListTile = ({
  price,
  parkingSpaces,
  publish,
  usableArea,
  bedrooms,
  bathrooms,
  address,
  style,
  parentMargin,
  size,
  onPress,
  product_description,
  images,
}) => (
  <TouchableOpacity
    style={styles.container}
    onPress={onPress}
  >
    <View style={styles.imageContainer}>
      <ImageBackground
        source={{uri: `${images[0]}` }}
        style={styles.bg}
      />
    </View>

    <View style={styles.info}>
      <Text numberOfLines={2} weight="medium">{address.formattedAddress}</Text>
      <View style={styles.row}>
        <NumberFormat
            value={price}
            displayType={'text'}
            decimalScale={2}
            thousandSeparator={"."}
            decimalSeparator={","}
            prefix={'R$ '}
            renderText={value => <Text color="tertiary" weight="medium">{`${value},00`}</Text>}
        /> 
      </View>
      <View style={[styles.row, styles.between]}>
        <Text color="secondary" weight="medium">{`${usableArea  } m²`}</Text>
        <Text color="secondary" weight="medium">{parkingSpaces}</Text>
        <Icon
            name="car"
            size={18}
          />
        <Text color="secondary" weight="medium">{bedrooms}</Text>
        <Icon
            name="bed"
            size={18}
          />
          <Text color="secondary" weight="medium">{bathrooms}</Text>
        <Icon
            name="bath"
            size={18}
        />
      </View>
    </View>
  </TouchableOpacity>
);

ListTile.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  sold: PropTypes.number.isRequired,
  images: PropTypes.array.isRequired,
  rating: PropTypes.number.isRequired,
  numberOfReviews: PropTypes.number.isRequired,
  beforeDiscount: PropTypes.string,
  onPress: PropTypes.func,
};

ListTile.defaultProps = {
  onPress: null,
  beforeDiscount: null,
};

export default ListTile;
