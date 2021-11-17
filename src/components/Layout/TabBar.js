import React from 'react';
import {
  SafeAreaView, StyleSheet, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { scale, verticalScale } from 'react-native-size-matters';
import Colors from 'themes/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import GradientIcon from '../Gradient/Icon';
import Text from '../Text';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: Colors.gray10,
  },
});

const icons = {
  Home: {
    name: 'Inicio',
    active: 'home',
    inactive: 'home-outline',
  },
  Categories: {
    name: 'Categorias',
    active:  `view-list`,
    inactive: `view-list-outline`,
  },
  Feed: {
    name: 'Inicio',
    active: 'antenna',
    inactive: 'antenna',
  },
  Wallet: {
    name: 'Inicio',
    active: 'wallet',
    inactive: 'wallet-outline',
  },
  Cart: {
    name: 'Carrinho',
    active: 'cart',
    inactive: 'cart-outline',
  },
  Profile: {
    name: 'Perfil',
    active: 'account',
    inactive: 'account-outline',
  },
};

const TabBar = ({ state, descriptors, navigation }) => (
  <SafeAreaView style={styles.container}>
    {state.routes.map((route, index) => {
      const { options } = descriptors[route.key];
      const isFocused = state.index === index;

      const onPress = () => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });

        if (!isFocused && !event.defaultPrevented) {
          navigation.navigate(route.name);
        }
      };

      const onLongPress = () => {
        navigation.emit({
          type: 'tabLongPress',
          target: route.key,
        });
      };

      return (
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityState={isFocused ? { selected: true } : {}}
          accessibilityLabel={options.tabBarAccessibilityLabel}
          testID={options.tabBarTestID}
          onPress={onPress}
          onLongPress={onLongPress}
          style={{
            flex: 1, alignItems: 'center', paddingVertical: verticalScale(8),
          }}
          key={route.key}
        >
          {isFocused && (
            <GradientIcon
              icon={icons[route.name].active}
              size={25}
            />
          )}
          {!isFocused && (
            <Icon
              name={icons[route.name].inactive}
              color={Colors.gray50}
              size={scale(25)}
            />
          )}
          <Text
            font="h5"
            style={{
              color: isFocused ? Colors.tertiary : Colors.gray50,
              marginTop: verticalScale(2),
            }}
            weight="medium"
          >
            {icons[route.name].name}
          </Text>
        </TouchableOpacity>
      );
    })}
  </SafeAreaView>
);

TabBar.propTypes = {
  navigation: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired,
  descriptors: PropTypes.object.isRequired,
};

export default TabBar;
