// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, ScrollView, Text, View } from 'react-native';
import React, { Component, useState } from "react";
import {
  StyleSheet,
  StatusBar,
  TextInput,
  ScrollView,
  Text,
  View,
  
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "../constants";
import { useTheme } from "@react-navigation/native";
import { DATA } from "../constants";
// import {ThemeContext} from "../App"

const mapDark = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#212121",
      },
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#212121",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "administrative.country",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#bdbdbd",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#181818",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1b1b1b",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#2c2c2c",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#8a8a8a",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#373737",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#3c3c3c",
      },
    ],
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry",
    stylers: [
      {
        color: "#4e4e4e",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#3d3d3d",
      },
    ],
  },
];

const mapLight = [
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function Explore() {
  const [focus, setFocus] = useState(false);
  // const { setThemeTab, themeTab } = React.useContext(ThemeContext);
  // const onPress = () => {
  //   setThemeTab('Dark');
  //   setTheme(theme)

  // }
  const [theme, setTheme] = useState(true);
  // console.log("theme", theme);
  // const themeui = useTheme();

  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    // <View style={styles.container}>
    //   <Text>explore page</Text>
    //   {/* <StatusBar style="auto" /> */}
    // </View>
    // <View style={styles.container}>
    <View>
      <MapView
        customMapStyle={theme ? mapDark : mapLight}
        style={styles.map}
        region={{
          latitude: 22.6293867,
          longitude: 88.4354486,
          latitudeDelta: 0.0725,
          longitudeDelta: 0.0013,
        }}
      >
        <Marker
          coordinate={{
            latitude: 22.6293867,
            longitude: 88.4354486,
          }}
          // image={require('../assets/burger.png')}

          title="Burger Point"
          description="Best Buger Ever"
        >
          <View>
          
            <Image
              source={require("../assets/burger.png")}
              style={{
                width: 36,
                height: 36,
                resizeMode: "contain",

                borderWidth: !focus ? 2: 0,
                backgroundColor: !theme ? "white" : "#333333",
                borderColor: !theme ? "black" : "white",
                borderRadius: 36 / 2,
              }}
            />
          </View>
          {/* <MaterialIcons name="fastfood" size={28} color="black" /> */}
        </Marker>
        <Marker
          coordinate={{
            latitude: 22.6345648,
            longitude: 88.4377279,
          }}
          // image={require('../assets/burger.png')}

          title="Cafe Espresso"
          description="Indulge..."
        >
          <View>
            <Image
              source={require("../assets/coffee.png")}
              style={{
                width: 28,
                height: 28,
                resizeMode: "contain",
                // iput colors whwrver necessary

                // borderWidth: 2,
                backgroundColor: !theme ? "white" : "#333333",
                borderColor: !theme ? "black" : "white",
                borderRadius: 36 / 2,
              }}
            />
          </View>
          {/* <MaterialIcons name="fastfood" size={28} color="black" /> */}
        </Marker>
        <Marker
          coordinate={{
            latitude: 22.6341137,
            longitude: 88.4497463,
          }}
          // image={require('../assets/burger.png')}

          title="Beer Hub"
          description="Save water drink beer"
        >
          <View>
            <Image
              source={require("../assets/beer.png")}
              style={{
                width: 28,
                height: 28,
                resizeMode: "contain",
                // iput colors whwrver necessary

                // borderWidth: 2,
                backgroundColor: !theme ? "white" : "#333333",
                borderColor: !theme ? "black" : "white",
                borderRadius: 32 / 2,
              }}
            />
          </View>
          {/* <MaterialIcons name="fastfood" size={28} color="black" /> */}
        </Marker>
        <Marker
          coordinate={{
            latitude: 22.6301137,
            longitude: 88.4487463,
          }}
          // image={require('../assets/burger.png')}

          title="Beer Hub"
          description="Save water drink beer"
        >
          <View>
            <Image
              source={require("../assets/burger.png")}
              style={{
                width: 28,
                height: 28,
                resizeMode: "contain",
                // iput colors whwrver necessary

                // borderWidth: focus ? 2: 0,
                backgroundColor: !theme ? "white" : "#333333",
                borderColor: !theme ? "black" : "white",
                borderRadius: 32 / 2,
              }}
            />
          </View>
          {/* <MaterialIcons name="fastfood" size={28} color="black" /> */}
        </Marker>
        <Marker
          coordinate={{
            latitude: 22.6292757,
            longitude: 88.444781,
          }}
          // image={require('../assets/burger.png')}

          title="Beer Hub"
          description="Save water drink beer"
        >
          <View>
            <Image
              source={require("../assets/beer.png")}
              style={{
                width: 28,
                height: 28,
                resizeMode: "contain",
                // iput colors whwrver necessary

                // borderWidth: focus ? 2: 0,
                backgroundColor: !theme ? "white" : "#333333",
                borderColor: !theme ? "black" : "white",
                borderRadius: 32 / 2,
              }}
            />
          </View>
          {/* <MaterialIcons name="fastfood" size={28} color="black" /> */}
        </Marker>
      </MapView>

      <View
        style={{
          position: "absolute",
          marginTop: Platform.OS === "ios" ? 40 : 40,
          flexDirection: "row",
          backgroundColor: !theme ? "white" : "#333333",
          width: "90%",
          alignSelf: "center",
          borderRadius: 15,
          padding: 8,
          alignItems: "center",
          // borderWidth: focus ? 1: 0,
          // borderColor: focus ? 1: 0,
          shadowColor: "#ccc",
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.5,
          shadowRadius: 5,
          elevation: 2,
        }}
      >
        <Ionicons name="ios-search" size={20} color="#bdbdbd" />
        <TextInput
          color={!theme ? "black" : "white"}
          onChangeText={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          placeholder="Search here"
          placeholderTextColor="#bdbdbd"
          autoCapitalize="none"
          style={{ flex: 1, padding: 0, marginLeft: 20 }}
        />
      </View>
      {focus && (
        <View
          style={{
            backgroundColor: !theme ? "white" : "#333333",
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
            position: "absolute",
            width: "90%",
            alignSelf: "center",
            paddingLeft: 15,
            alignItems: "flex-start",
            top: 77,
            zIndex: 1,
          }}
        >
          {/* <Text style={{color: 'white'}}>test</Text> */}
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      )}

      <View style={styles.togAndNav}>
        <TouchableOpacity
          onPress={
            // onPress 
            () =>setTheme(!theme)}
          style={{
            // top: -30,
            // justifyContent: "center",
            // alignItems: "center",
            elevation: 1,
          }}
        >
          <View
            style={{
              width: 32,
              height: 32,
              borderRadius: 32 / 2,
              backgroundColor: !theme ? "white" : "#333333",
              alignItems: "center",
              justifyContent: "center",
              elevation: 3,
            }}
          >
            <MaterialCommunityIcons
              name="tune-variant"
              size={24}
              color={!theme ? "black" : "white"}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            // top: -30,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
            elevation: 1,
          }}
        >
          <View
            style={{
              width: 32,
              height: 32,
              borderRadius: 32 / 2,
              backgroundColor: !theme ? "white" : "#333333",
              alignItems: "center",
              justifyContent: "center",
              elevation: 3,
            }}
          >
            {/* <MaterialCommunityIcons name="tune-variant" size={16} color="black" />
             */}
            <MaterialCommunityIcons
              name="navigation-variant-outline"
              size={24}
              color={!theme ? "black" : "white"}
            />
          </View>
        </TouchableOpacity>
        {/* <View style={styles.card}></View> */}
      </View>
      <ScrollView
        style={{
          position: "absolute",
          backgroundColor: !theme ? "white" : "#333333",
          borderRadius: 10,

          // height: 1,
          width: "90%",
          alignSelf: "center",
          bottom: '16%',
          flexDirection: "row",
          // left: 0,
          // right: 0,
          elevation: 2,
          padding: 10,
        }}
      >
        <TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Image
            style={{
              height: 64,
              width: 72,
              borderRadius: 5,
            }}
            source={require("../assets/cafe.jpg")}
          />
          <View style={{ flexDirection: "column",
        marginLeft: 25,
        
        }}>
            <Text 
            style={{color: !theme ? "black" : 'white', fontWeight: 'bold', fontSize: 20}}
            >Burger Point</Text>
            <View>
              <Text
              style={{color: !theme ? "black" : 'white', marginTop: 3, fontSize: 16}}
              >Best Burger in Town.</Text>
            </View>
          </View>
        </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  togAndNav: {
    position: "absolute",
    top: 100,
    alignSelf: "flex-end",
    // marginRight: 24

    right: 23,
  },
  card: {
    elevation: 2,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },

    overflow: "hidden",
  },
  item: {
    backgroundColor: "#f1f2ed",
    padding: 5,
    borderRadius: 40,
    marginVertical: 8,
    marginHorizontal: 24,
    alignItems: "center",
    elevation: 2,
  },
  title: {
    fontSize: 20,
  },
  // container: {
  //   // flex: 1,
  //   // backgroundColor: '#fff',
  //   // alignItems: 'center',
  //   // justifyContent: 'center',
  //   flexDirection: 'column',
  //   alignSelf: 'flex-start',

  // },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    // height: "100%",
  },
  bubble: {
    flexDirection: "row",
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 6,
    borderColor: "#ccc",
    borderWidth: 0.5,
    padding: 15,
    width: 150,
  },
  arrow: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#fff",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#007a87",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -0.5,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
  image: {
    width: 120,
    height: 80,
  },
});
