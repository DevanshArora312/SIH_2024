import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Button, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TabIconPropType } from './utils/Types';
import Profile from './screens/Profile';
import Startup from './screens/Startup.tsx';
import Login from './screens/Auth/Login.tsx';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {Provider as ReduxProvider} from 'react-redux';
import {store} from "./redux/store.js";
import Home from './screens/Home.tsx';
import Landing from './screens/Auth/Landing.tsx';
import SeedPhrase from './screens/Auth/SeedPhrase.tsx';
import RecoverWallet from './screens/Auth/RecoverWallet.tsx';
// import Home from './screens/Home';
// import Header from './components/Header';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabIcon = ({ icon, color, name, focused } : TabIconPropType ) => {
  if(!focused) icon = icon+'-outline';
  return (
    <View className="flex items-center justify-center gap-1">
      <Icon name={icon} size={30} color={color} />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-sm`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};


const TabRoot = () => {
  return(
    <Tab.Navigator
      screenOptions={{
        headerShown : false,
        tabBarActiveTintColor: "#FE5E5C",
        tabBarInactiveTintColor: "#282e34",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopWidth: 1,
          borderTopColor: "#FFFFFF",
          height: 64,
        },
      }}
    >
      <Tab.Screen 
        name="Recent" 
        component={Home} 
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={"home"}
              color={color}
              name="Home"
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{
          title: "Chat",
          headerShown: false,
          unmountOnBlur:true,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={"chat"}
              color={color}
              name="Chat with us"
              focused={focused}
            />
          ),
        }}  
      />
    </Tab.Navigator>
  )
}


const Index = () => {
    return (
      <ReduxProvider store={store}>
      <GestureHandlerRootView style={{flex:1}}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Startup"
              component={Startup}
            />
            <Stack.Screen
              name="Landing"
              component={Landing}
            />
            <Stack.Screen
              name="SeedPhrase"
              component={SeedPhrase}
            />
            <Stack.Screen
              name="Recover"
              component={RecoverWallet}
            />
            <Stack.Screen
              name="Login"
              component={Login}
            />

            <Stack.Screen
              name="App"
              component={TabRoot}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
      </ReduxProvider>
    );
  };
export default Index;
