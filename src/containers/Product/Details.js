import React from 'react';
import { Text } from 'components';
import { StyleSheet, View, Dimensions } from 'react-native';
import { scale } from 'react-native-size-matters';
import HTML from "react-native-render-html";
import table, { IGNORED_TAGS, } from '@native-html/table-plugin';
import {decode} from 'html-entities';
import Colors from 'themes/colors';
import MapView, {Marker} from 'react-native-maps';

const styles = StyleSheet.create({
  card: {
    padding: scale(14),
    marginBottom: scale(14),
    backgroundColor: Colors.white,
  },
  text: {
    marginBottom: scale(14),
  },
  map: {
    height: scale(180),
},
});



const Details = ({product}) => {
  
  return (
    <View style={styles.card}>
      <Text style={styles.text} weight="medium">LOCALIZAÇÃO DO IMÓVEL</Text>
      <View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: product.address.geolocation.lat,
          longitude: product.address.geolocation.lng,
          latitudeDelta: 0.04,
          longitudeDelta: 0.05,
        }}
      >
        <Marker coordinate={{ latitude : product.address.geolocation.lat , longitude : product.address.geolocation.lng }}/>
      </MapView>
      </View>
    </View>
  );
} 

export default Details;
