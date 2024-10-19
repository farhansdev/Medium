import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screens/Welcome';
import EditProfile from './screens/EditProfile';
import ProfileScreen from './screens/Profile';
import CreatePost from './screens/CreatePost';
import BookmarkScreen from './screens/Bookmark';
import NewList from './screens/NewList';
import YourListScreen from './screens/YourList';
import SaveListScreen from './screens/SavedList';
import HighlightScreen from './screens/Highlights';

const Stack = createNativeStackNavigator();
export default function Routes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="CreatePost" component={CreatePost} />
      <Stack.Screen name="Bookmark" component={BookmarkScreen} />
      <Stack.Screen name="NewList" component={NewList} />
      <Stack.Screen name="YourList" component={YourListScreen} />
      <Stack.Screen name="SavedList" component={SaveListScreen} />
      <Stack.Screen name="Highlights" component={HighlightScreen} />
    </Stack.Navigator>
  );
}