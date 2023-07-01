import React from "react";
/** Styles */
import containers from "../Styles/Containers";
import texts from "../Styles/Texts";
/** Components */
import { View, Text } from "react-native";
import SinglePrivateInfo from "./SinglePrivateInfo";

export default function PrivateInfo({
  name,
  birthday,
  age,
  numberOfFamilyMembers,
}) {
  return (
    <View style={containers.privateInfoContainer}>
      <View style={containers.privateInfoHeaderContainer}>
        <Text style={texts.privateInfoHeaderText}>Personal information</Text>
      </View>
      <View style={containers.privateInfoBodyContainer}>
        <SinglePrivateInfo title="Name" info={name} />
        <SinglePrivateInfo title="Birthday" info={birthday} />
        <SinglePrivateInfo title="Age" info={age} />
        <SinglePrivateInfo
          title="Number of Family Members"
          info={numberOfFamilyMembers}
        />
      </View>
    </View>
  );
}
