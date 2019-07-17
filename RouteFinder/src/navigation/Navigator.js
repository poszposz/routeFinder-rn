import { createStackNavigator, createAppContainer } from 'react-navigation';
import {
  HomeScreen
} from '../screens';

const mainStakcNavigator = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
    },
  },
);

const createNavigator = () => createAppContainer(mainStakcNavigator);

export default createNavigator;
