import * as React from 'react';
import { Text, View, Image, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Center } from 'native-base';

function CustomHeader({ title, isHome, navigation }) {
  return (
    <View style={{ flexDirection: 'row', height: 50 }}>
      {isHome ?
        <TouchableOpacity style={{ justifyContent: 'center', flex: 1 }} onPress={() => navigation.openDrawer()}>
          <Image style={{ width: 30, height: 30, marginLeft: 5 }} source={require('./src/images/menu.png')}
            resizeMode="contain"
          />
        </TouchableOpacity> :
        <TouchableOpacity style={{ alignItems: 'center', flexDirection: 'row' }} onPress={() => navigation.goBack()}>
          <Image style={{ width: 25, height: 25, marginLeft: 5, marginRight: 5 }}
            source={require('./src/images/back.png')}
            resizeMode="contain"
          />
          <Text>Back</Text>
        </TouchableOpacity>}

      <View style={{ justifyContent: 'center', flex: 1 }}>
        <Text style={{ textAlign: 'center' }}>{title}</Text>
      </View>
      <View style={{ flex: 1 }}>
      </View>
    </View>
  )
}

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const AppStack = createNativeStackNavigator();

const navOptionHandler = () => ({
  headerShown: false
})

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title='Home' isHome={true} navigation={navigation} />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home</Text>
        <TouchableOpacity style={{ marginTop: 20 }} onPress={() => navigation.navigate('HomeDetails')}>
          <Text>Go to Home Details</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function HomeScreenDetails({ navigation }) {
  return <SafeAreaView style={{ flex: 1 }}>
    <CustomHeader title='Home Details' navigation={navigation} />
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Details</Text>
    </View>
  </SafeAreaView>;
}

function HomeStackScreen({navigation, route}) {
  if(route.state && route.state.index > 0) {
    navigation.setOptions({tabBarVisible: false})
  } else {
    navigation.setOptions({tabBarVisible: true})
  }
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={navOptionHandler} />
      <HomeStack.Screen name="HomeDetails" component={HomeScreenDetails} options={navOptionHandler} />
    </HomeStack.Navigator>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title='Settings' isHome={true} navigation={navigation} />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings</Text>
        <TouchableOpacity style={{ marginTop: 20 }} onPress={() => navigation.navigate('SettingsDetails')}>
          <Text>Go to Settings Details</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function SettingsScreenDetails({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title='Settings Details' navigation={navigation} />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
        <Text>Settings Details</Text>
      </View>
    </SafeAreaView>
  );
}


function SettingsStackScreen({navigation, route}) {
  if(route.state && route.state.index > 0) {
    navigation.setOptions({tabBarVisible: false})
  } else {
    navigation.setOptions({tabBarVisible: true})
  }
  return (
    <SettingsStack.Navigator initialRouteName='Settings'>
      <SettingsStack.Screen name="SettingsScreen" component={SettingsScreen} options={navOptionHandler} />
      <SettingsStack.Screen name="SettingsDetails" component={SettingsScreenDetails} options={navOptionHandler} />
    </SettingsStack.Navigator >
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Notifications" navigation={navigation} />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Notifications Screen!</Text>
      </View>
    </SafeAreaView>
  );
}

function CustomDrawerContent(props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ height: 150, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('./src/images/user.png')}
          style={{ height: 120, width: 120, borderRadius: 60 }}
        />
      </View>
      <ScrollView style={{ marginLeft: 5 }}>
        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => props.navigation.navigate('MenuTab')}
        >
          <Text>Menu Tab</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => props.navigation.navigate('Notifications')}
        >
          <Text>Notifications</Text>
        </TouchableOpacity>
      </ScrollView>

      <TouchableOpacity
        style={{ marginTop: 20, marginLeft: 5 }}
        onPress={() => props.navigation.navigate('Login')}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

function LoginScreen({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Login Screen!</Text>
        <TouchableOpacity
          style={{ marginTop: 20 }}
        onPress={() => navigation.navigate('HomeApp')}
        >
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginTop: 20 }}
        onPress={() => navigation.navigate('Register')}
        >
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function RegisterScreen({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Register" navigation={navigation} />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Register Screen!</Text>
      </View>
    </SafeAreaView>
  );
}


function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? require('./src/images/homefocused.png')
              : require('./src/images/home.png');
          } else if (route.name === 'Settings') {
            iconName = focused ?
              require('./src/images/settingfocused.png')
              : require('./src/images/settings.png');
          }

          return <Image source={iconName} style={{ width: 20, height: 20 }}
            resizeMode="contain" />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'black',
      }}
    >
      <Tab.Screen name="Home" component={HomeStackScreen} options={navOptionHandler} />
      <Tab.Screen name="Settings" component={SettingsStackScreen} options={navOptionHandler} />
    </Tab.Navigator>

  );
}


function DrawerNavigator() {
  return(
    <Drawer.Navigator initialRouteName="MenuTab" drawerContent={(props) => CustomDrawerContent(props)}>
      <Drawer.Screen name="MenuTab" component={TabNavigator} options={navOptionHandler} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} options={navOptionHandler} />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer screenOptions={{ headerShown: false }}>
      <AppStack.Navigator initialRouteName='Login'>
        <AppStack.Screen name="HomeApp" component={DrawerNavigator} options={navOptionHandler} />
        <AppStack.Screen name="Login" component={LoginScreen} options={navOptionHandler} />
        <AppStack.Screen name="Register" component={RegisterScreen} options={navOptionHandler} />
      </AppStack.Navigator>
    </NavigationContainer >
  )
}
