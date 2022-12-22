import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import HomeScreen from "../components/HomeScreen";
import SearchScreen from "../components/SearchScreen";
import ReelsScreen from "../components/ReelsScreen";
import ActivityScreen from "../components/ActivityScreen";
import ProfileScreen from "../components/ProfileScreen";
import HomeScreenStack from './StackNavigator/HomeScreenNavigator';

import { getIconForTab , navOptionHandler} from "../helper/utils/commonHelpers";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = getIconForTab(route, focused);
            return <Image source={iconName} style={{ width: 20, height: 20 }}
              resizeMode="contain" />;
          },
          tabBarShowLabel: false
        })}
      >
        <Tab.Screen name="Home" component={HomeScreenStack} options={navOptionHandler} />
        <Tab.Screen name="Search" component={SearchScreen} options={navOptionHandler} />
        <Tab.Screen name="Reels" component={ReelsScreen} options={navOptionHandler} />
        <Tab.Screen name="Activity" component={ActivityScreen} options={navOptionHandler} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={navOptionHandler} />
      </Tab.Navigator>

    );
  }