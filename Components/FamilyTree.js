import React from "react";
/** Components */
import { View, Text } from "react-native";
/** Styles */
import containers from "../Styles/Containers";
import texts from "../Styles/Texts";
export default function FamilyTree() {
  return (
    <View style={containers.familyTreeContainer}>
      <Text style={texts.familyTreeHeaderText}>Family Tree</Text>
    </View>
  );
}
