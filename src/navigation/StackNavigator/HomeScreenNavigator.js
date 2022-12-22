import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StoriesDetails from '../../components/StoriesDetails';
import { navOptionHandler } from '../../helper/utils/commonHelpers';
import HomeScreen from '../../components/HomeScreen';

const HomeScreenStackNavigator = createNativeStackNavigator();

export default function HomeScreenStack() {
    // if(route.state && route.state.index > 0) {
    //     navigation.setOptions({tabBarVisible: false})
    //   } else {
    //     navigation.setOptions({tabBarVisible: true})
    //   }
      return (
        <HomeScreenStackNavigator.Navigator initialRouteName='HomeScreen'>
          <HomeScreenStackNavigator.Screen name="HomeScreen" component={HomeScreen} options={navOptionHandler} />
          <HomeScreenStackNavigator.Screen name="StoriesDetails" component={StoriesDetails} options={navOptionHandler} />
          {/* <StoriesStack.Screen name="SettingsDetails" component={AddStory} options={navOptionHandler} /> */}
        </HomeScreenStackNavigator.Navigator >
      );
}