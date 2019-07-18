import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import styles from './HomeScreen.styles';

class HomeScreen extends React.Component {
  render = () => (
    <View
      style={styles.rootContainer}
    >
        <Text style={styles.mainTitle}>{'Main screen'}</Text>
    </View>
  );
}

export default HomeScreen;