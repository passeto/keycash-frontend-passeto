import React, { useState, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { scale } from 'react-native-size-matters';
import Colors from 'themes/colors';
import PropTypes from 'prop-types';
import Control from './Control';
import DisplayToggle from './DisplayToggle';
import PropertiesContext from '../../../contexts/properties';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scale(14),
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.gray25,
  },
  divider: {
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.gray25,
    marginVertical: scale(14),
  },
  button: {
    paddingVertical: scale(14),
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const Controls = ({ onDisplayChange }) => {
  const [selectedTab, setSelectedTab] = useState('price');
  const { properties, getProperties } = useContext(PropertiesContext);

  return (
    <View style={styles.container}>
      <Control
        title="Preço"
        isSelected={selectedTab === 'price'}
        onPress={() => {
          setSelectedTab('price')
          getProperties('price')
        }}
      />
      <View style={styles.divider} />
      <Control
        title="Vagas"
        isSelected={selectedTab === 'parking'}
        onPress={() => {
          setSelectedTab('parking')
          getProperties('parking')
        }}
      />
      <View style={styles.divider} />
      <Control
        title="Banheiros"
        isSelected={selectedTab === 'bathrooms'}
        onPress={() => {
          setSelectedTab('bathrooms');
          getProperties('bathrooms')
          
          }}
      />
      <View style={styles.divider} />
      <Control
        title="Dormitórios"
        isSelected={selectedTab === 'bedrooms'}
        onPress={() =>  {
          setSelectedTab('bedrooms')
          getProperties('bedrooms')
        }}
      />
      <View style={styles.divider} />

      <View style={{ justifyContent: 'center' }}>
        <DisplayToggle onChange={onDisplayChange} />
      </View>
    </View>
  );
};

Controls.propTypes = {
  onDisplayChange: PropTypes.func.isRequired,
};

export default Controls;
