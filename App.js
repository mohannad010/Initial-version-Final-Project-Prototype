import React from "react";
/** Pages */
import Profile from "./Pages/Profile";
import AutoBiography from "./Pages/AutoBiography";
import Biographies from "./Pages/Biographies";
/** Navigation */
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="profile" component={Profile} />
        <Tab.Screen name="AutoBiography" component={AutoBiography} />
        <Tab.Screen name="Biographies" component={Biographies} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
