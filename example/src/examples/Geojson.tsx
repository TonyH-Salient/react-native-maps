import React from 'react';
import MapView, {Geojson} from '@rakeshv1108/react-native-map';
import {StyleSheet} from 'react-native';
const myPlace: any = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Point',
        coordinates: [64.165329, 48.844287],
      },
    },
  ],
};

const GeojsonMap = () => (
  <MapView style={{...StyleSheet.absoluteFillObject}}>
    <Geojson geojson={myPlace} />
  </MapView>
);

export default GeojsonMap;
