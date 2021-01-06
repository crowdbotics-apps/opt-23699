import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings190706Navigator from '../features/Settings190706/navigator';
import BlankScreen1190701Navigator from '../features/BlankScreen1190701/navigator';
import BlankScreen0190700Navigator from '../features/BlankScreen0190700/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings190706: { screen: Settings190706Navigator },
BlankScreen1190701: { screen: BlankScreen1190701Navigator },
BlankScreen0190700: { screen: BlankScreen0190700Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
