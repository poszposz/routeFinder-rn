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
    ></MapView>
  );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);