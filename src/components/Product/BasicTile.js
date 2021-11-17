import React, {useEffect} from 'react';
import {
  TouchableOpacity, ImageBackground, StyleSheet, View,
} from 'react-native';
import { getScreenWidth } from 'utils/size';
import { scale } from 'react-native-size-matters';
import PropTypes from 'prop-types';
import Text from '../Text';
import Card from '../Card';
import Rating from '../Rating';
import formatReal from '../../utils/formatReal'
import NumberFormat from 'react-number-format';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: scale(8),
    borderTopRightRadius: scale(8),
    overflow: 'hidden',
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    padding: scale(10),
    justifyContent: 'space-between',
    flex: 1,
  },
  bg: {
    flex: 1,
  },
  between: {
    justifyContent: 'space-between',
  },
  rating: {
    marginVertical: scale(4),
  },
  discount: {
    textDecorationLine: 'line-through',
    marginLeft: scale(4),
  },
});


const BasicTile = ({

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
}) => {

  const width = size - scale(parentMargin) - scale(parentMargin / 2);
  return (
    <Card style={StyleSheet.flatten([
      {
        width,
        marginTop: scale(parentMargin),
      },
      style])}
    >
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
      >
        <View
          style={{
            width,
            aspectRatio: 1 / 1,
          }}
        >
          <ImageBackground
            source={{uri: `${images[0]}`}}
            style={styles.bg}
          />
        </View>
        <View style={styles.info}>
          <Text numberOfLines={4} weight="medium">{address.formattedAddress}</Text>
          <View style={[styles.row, styles.between]}>
            <View style={styles.row}>
              {/*<Text color="tertiary" weight="medium">{formatReal(price)}</Text>*/}
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
          </View>
          <View style={[styles.row, styles.between]}>
            <Text color="secondary" weight="medium">{`${usableArea  } m²`}</Text>
            <Text color="secondary" weight="medium">{parkingSpaces}</Text>
            <Icon
                name="car"
                size={15}
              />
            <Text color="secondary" weight="medium">{bedrooms}</Text>
            <Icon
                name="bed"
                size={15}
              />
              <Text color="secondary" weight="medium">{bathrooms}</Text>
            <Icon
                name="bath"
                size={15}
            />

          </View>
        </View>
      </TouchableOpacity>
    </Card>
  );
};

/*BasicTile.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  sold: PropTypes.number.isRequired,
  images: PropTypes.array.isRequired,
  rating: PropTypes.number.isRequired,
  numberOfReviews: PropTypes.number.isRequired,
  style: PropTypes.any,
  parentMargin: PropTypes.number,
  size: PropTypes.number,
  onPress: PropTypes.func,
  beforeDiscount: PropTypes.string,
};*/

BasicTile.defaultProps = {
  style: null,
  parentMargin: 14,
  size: getScreenWidth() / 2,
  onPress: null,
  beforeDiscount: null,
};

export default BasicTile;
