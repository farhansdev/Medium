
import { Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import YourListScreen from './YourList';
import SaveListScreen from './SavedList';
import HighlightScreen from './Highlights';

const Tab = createMaterialTopTabNavigator();
const screenWidth = Dimensions.get('window').width;


export default function Libraytab() {
  return (
    <Tab.Navigator  screenOptions={{
        tabBarStyle: {
          width: screenWidth / 1,  // Half of the screen width
          alignSelf: 'center',     // Center it on the screen
          backgroundColor: '#000000', // Black background color
        },
        tabBarActiveTintColor: '#ffffff', // Active tab text color (white)
        tabBarInactiveTintColor: '#cccccc', // Inactive tab text color (gray)
        tabBarLabelStyle: { 
          fontSize: 12,
          textAlign: 'center',
        },
        tabBarItemStyle: { 
          paddingVertical: 10,
        },
        tabBarIndicatorStyle: { 
          backgroundColor: '#ffffff', // Indicator color (white)
        },
      }} initialRouteName="Stories" style={{backgroundColor: '#000000'}}>
      <Tab.Screen 
      name="YourList"
       component={YourListScreen} />
      <Tab.Screen name="SavedList"  component={SaveListScreen} />
      <Tab.Screen name="Highlights" component={HighlightScreen} />
    </Tab.Navigator>
  );
}