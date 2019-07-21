import React from 'react';
import {
  View
} from 'react-native';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';
import styles from './MapScreen.styles';

class MapScreen extends React.Component {

  render = () => (
    <MapView
    style={styles.container}
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />
  );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);