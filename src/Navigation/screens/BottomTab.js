import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// import ProfileScreen from './Profile';
// import TopTab from './TopTab';

// Get device screen width
const screenWidth = Dimensions.get('window').width;

const Tab = createBottomTabNavigator();
// const Tab = createMaterialTopTabNavigator();

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
}

export function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
    </View>
  );
}

export default function App() {
  return (
    // <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            width: screenWidth / 2,  // Half of the screen width
            alignSelf: 'center',     // Center it on the screen
          },
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    // {/* </NavigationContainer> */}
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});



// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
// import { Ionicons } from '@expo/vector-icons';

// import ProfileScreen from './Profile';
// import EditProfile from './EditProfile';
// import CreatePost from './CreatePost';
// import HomeScreen from './Home';
// import SearchScreen from './Search';
// import BookmarkScreen from './Bookmark';

// const Tab = createBottomTabNavigator();
// const ProfileStack = createStackNavigator();

// // Stack Navigator for Profile, which includes EditProfile and CreatePost
// function ProfileStackScreen() {

//   return (
//     <ProfileStack.Navigator>
//       <ProfileStack.Screen name="Profile" component={ProfileScreen} />
//       <ProfileStack.Screen name="EditProfile" component={EditProfile} />
//       <ProfileStack.Screen name="CreatePost" component={CreatePost} />
//     </ProfileStack.Navigator>
//   );
// }

// export default function BottomTabNavigator() {
//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       screenOptions={({ route }) => ({
//         headerShown: false,
//         tabBarActiveTintColor: 'white',
//         tabBarInactiveTintColor: 'gray',
//         tabBarStyle: {
//           backgroundColor: 'black',
//           borderTopColor: 'white',
//         },
//         tabBarIcon: ({ color, size }) => {
//           let iconName;
//           if (route.name === 'Home') {
//             iconName = 'home';
//           } else if (route.name === 'Search') {
//             iconName = 'search';
//           } else if (route.name === 'Bookmark') {
//             iconName = 'bookmarks';
//           } else if (route.name === 'ProfileStack') {
//             iconName = 'person';
//           }
//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//       })}
//     >
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{ tabBarLabel: 'Home' }}
//       />
//       <Tab.Screen
//         name="Search"
//         component={SearchScreen}
//         options={{ tabBarLabel: 'Search' }}
//       />
//       <Tab.Screen
//         name="Bookmark"
//         component={BookmarkScreen}
//         options={{ tabBarLabel: 'Bookmarks' }}
//       />
//       <Tab.Screen
//         name="ProfileStack"  // Use the stack navigator for Profile
//         component={ProfileStackScreen}
//         options={{ tabBarLabel: 'Profile' }}
//       />
//     </Tab.Navigator>
//   );
// }
