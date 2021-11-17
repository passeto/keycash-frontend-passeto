import React from 'react';
import { StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import { verticalScale } from 'react-native-size-matters';
import Colors from 'themes/colors';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  wrapper: {
    height: verticalScale(100),
  },
  slide: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
});

const Carousel = ({ style, images, bannersCarrousel, ...otherProps }) =>  {
  return (
  <Swiper
    style={StyleSheet.flatten([styles.wrapper, style])}
    autoplay
    activeDotColor={Colors.primary}
    dotColor={Colors.gray50}
    {...otherProps}
  >
    {
      bannersCarrousel ? 
        images.map((image) => {
          console.log('imagens banner', image)
          return (
            <Image
              key={image.banner_new_id}
              source={{ uri: image.link_image }}
              resizeMode="cover"
              style={styles.slide}
            />
        )}) : 

        images.map((image) => {
          return (
          <Image
            key={image}
            source={{uri: `${image}`}}
            resizeMode="cover"
            style={styles.slide}
          />
        )})
    }
  </Swiper>
);
}

Carousel.propTypes = {
  images: PropTypes.array.isRequired,
  style: PropTypes.any,
};

Carousel.defaultProps = {
  style: null,
};

export default Carousel;
