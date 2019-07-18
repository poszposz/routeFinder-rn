import { createStackNavigator, createAppContainer } from 'react-navigation';
import {
  HomeScreen,
  MapScreen,
} from '../screens';

const mainStakcNavigator = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
    },
    MapScreen: {
      screen: MapScreen
    }
  },
);

const createNavigator = () => createAppContainer(mainStakcNavigator);

export default createNavigator;
