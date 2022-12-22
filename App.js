import * as React from 'react';
import { Text, View, Image, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Center } from 'native-base';

import TabNavigator from './src/navigation/TabNavigator'

function HomeHeader({ title, isHome, navigation }) {
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



function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <CustomHeader title='Home' isHome={true} navigation={navigation} /> */}
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

}

export default function App() {
  return (
    <NavigationContainer screenOptions={{ headerShown: false }}>
      <TabNavigator />
    </NavigationContainer >
  )
}
