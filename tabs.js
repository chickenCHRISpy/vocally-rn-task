import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from 'react'
const Tab = createBottomTabNavigator();
import Explore from "./screens/explore";
import Page from "./screens/page";
import Add from "./screens/add";
import Notification from "./screens/notification";
import Profile from "./screens/profile";
import { View, TouchableOpacity, Text, Alert, StyleSheet } from "react-native";

import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';



const CustomAddButton = () => (

  

  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: "center",
      alignItems: "center",
      elevation: 1,
    }}
  >
    <View
      style={{
        width: 65,
        height: 65,
        borderRadius: 65/2,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <AntDesign name="plus" size={28} color="white" resizeMode="contain" />
    </View>
  </TouchableOpacity>
);

const Tabs = () => {
  const themeui = useTheme();
  // console.log(themeui);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          height: 80,
          elevation: 1,
        },
      }}
    >
      <Tab.Screen
        name="Explore"
        component={Explore}

        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            // <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
            <View>
              <FontAwesome5 name="compass" size={focused ? 28: 24} color={themeui.colors.text} />
              {/* <MaterialIcons name="explore" color="black" size={focused ? 32 : 27} /> */}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Page"
        component={Page}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <MaterialIcons name="view-carousel" size={focused ? 36: 34} color={themeui.colors.text} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={Add}
        options={{
          headerShown: false,
          // tabBarIcon: ({focused}) => (
          // <View>
          //   {/* <Icon name="add-circle" size={focused? 30 : 25} resizeMode="contain" color="white" /> */}
          // </View>
          // ),
          tabBarButton: ({ focused }) => <CustomAddButton />,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <FontAwesome5 name="bell" size={focused ? 28: 24} color={themeui.colors.text} />
           
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <FontAwesome name="user-o" size={focused ? 28: 24} color={themeui.colors.text} />
            
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};



export default Tabs;
