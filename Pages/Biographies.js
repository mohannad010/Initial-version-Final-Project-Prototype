import React from "react";
/** Components */
import { View, Text } from "react-native";
/** Styles */
import containers from "../Styles/Containers";
export default function Biographies() {
  // header from the tab navigator
  return (
    <View style={containers.pageContainer}>
      <Text>
        {" "}
        This page will hold all the Biographies that you create for your family.
      </Text>
    </View>
  );
  // bottom menu from the tab navigator
}
