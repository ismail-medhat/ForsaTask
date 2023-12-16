// BottomTabNavigator.tsx

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeScreen,
  RetailScreen,
  OffersScreen,
  ProfileScreen,
} from "../screens";
import ScreenNames from "./ScreenNames";
import { StyleSheet, View, Text, Platform } from "react-native";
import { Colors, ScaleHeight, ScaleWidth } from "common";
import { ParamListBase } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  SvgHomeActive,
  SvgHomeInActive,
  SvgOffersActive,
  SvgOffersInActive,
  SvgProfileActive,
  SvgProfileInActive,
  SvgRetailActive,
  SvgRetailInActive,
} from "assets/svg";

const Tab = createBottomTabNavigator();

type ISBottomTabsProps = {
  navigation: StackNavigationProp<ParamListBase>;
};

const BottomTabNavigator: React.FC<ISBottomTabsProps> = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        tabBarLabel: ({ focused }) => {
          return (
            <View>
              <Text
                style={[
                  styles.tabBarName,
                  { color: focused ? Colors.black : Colors.gray2 },
                ]}
              >
                {route.name}
              </Text>
            </View>
          );
        },
        tabBarIcon: ({ focused }) => {
          let IconName;
          if (route.name === ScreenNames.Home) {
            return focused ? <SvgHomeActive /> : <SvgHomeInActive />;
          } else if (route.name === ScreenNames.Retail) {
            return focused ? <SvgRetailActive /> : <SvgRetailInActive />;
          } else if (route.name === ScreenNames.Offers) {
            return focused ? <SvgOffersActive /> : <SvgOffersInActive />;
          } else if (route.name === ScreenNames.Profile) {
            return focused ? <SvgProfileActive /> : <SvgProfileInActive />;
          }
        },
        headerShown: false,
        tabBarStyle: [
          styles.tapStyles,
          {
            backgroundColor: Colors.white,
            borderTopWidth: 0,
            borderWidth: 0,
          },
        ],
        tabBarLabelStyle: styles.tabBarLabelStyle,
      })}
    >
      <Tab.Screen name={ScreenNames.Home} component={HomeScreen} />
      <Tab.Screen name={ScreenNames.Retail} component={RetailScreen} />
      <Tab.Screen name={ScreenNames.Offers} component={OffersScreen} />
      <Tab.Screen name={ScreenNames.Profile} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tapStyles: {
    justifyContent: "center",
    alignItems: "center",
    height: ScaleHeight(80),
    width: ScaleWidth("100%"),
    borderWidth: 1,
  },
  tabBarItemStyle: {
    top: 15,
    height: 45,
  },
  tabBarLabelStyle: {
    bottom: 10,
  },
  tabBarName: {
    fontSize: 12,
    paddingTop: Platform.OS === "ios" ? ScaleHeight(2) : 0,
    marginBottom: Platform.OS === "android" ? ScaleHeight(14) : 0,
  },
});
