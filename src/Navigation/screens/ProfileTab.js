
import { Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import StoryScreen from './Stories';
import ListScreen from './Lists';
import AboutScreen from './About';

const Tab = createMaterialTopTabNavigator();
const screenWidth = Dimensions.get('window').width;


export default function TopTab() {
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
      name="Stories"
       component={StoryScreen} />
      <Tab.Screen name="Lists"  component={ListScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
}