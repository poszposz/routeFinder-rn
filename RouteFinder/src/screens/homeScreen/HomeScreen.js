import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import {
  editStartLocation,
  editEndLocation,
  searchRoutes,
} from '../../redux/reducers/searchReducer/SearchReducer.actions';
import styles from './HomeScreen.styles';

class HomeScreen extends React.Component {

  onSearchTapped = () => {
    this.props.navigation.navigate("MapScreen");
  }

  onStartPointTextEdited = (text) => {
    this.props.editStartLocation(text);
  }

  onFinishPointTextEdited = (text) => {
    this.props.editEndLocation(text);
  }

  render = () => (
    <View
      style={styles.container}
    >
        <Text style={styles.title}>{'Search for your ride!'}</Text>
        <TextInput 
          style={styles.textInput}
          onChangeText={this.onStartPointTextEdited}
          placeholder='start location'
        />
        <TextInput 
          style={styles.textInput}
          onChangeText={this.onFinishPointTextEdited}
          placeholder='end location'
        />
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={this.onSearchTapped}
        >
          <View style={styles.buttonContainer}>
          <Text style={styles.button}>{'Search'}</Text>
          </View>
        </TouchableOpacity>
    </View>
  );
}

const mapStateToProps = state => ({ data: state.searchReducer });

const mapDispatchToProps = {
  editStartLocation,
  editEndLocation,
  searchRoutes,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);