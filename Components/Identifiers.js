import React from "react";
/** React Components */
import { View, Button } from "react-native";
import SingleIdentifier from "./SingleIdentifier";
/** Styles */
import containers from "../Styles/Containers";

export default function Identifiers({
  name,
  birthday,
  age,
  numberOfFamilyMembers,
  updateName,
  updateBirthday,
  updateAge,
  updateNumberofFamilyMembers,
  updateValues,
}) {
  return (
    <View style={containers.identifiersContainer}>
      <SingleIdentifier
        title="Name"
        placeholderText={"Enter name here"}
        id="name"
        update={updateName}
      />
      <SingleIdentifier
        title="Birthday"
        placeholderText={"Enter birthday here"}
        id="birthday"
        update={updateBirthday}
      />
      <SingleIdentifier
        title="Age"
        placeholderText={"Enter age here"}
        id="age"
        update={updateAge}
      />
      <SingleIdentifier
        title="Number of Family Members"
        placeholderText={"enter number here"}
        id="number of family members"
        update={updateNumberofFamilyMembers}
      />
      <Button
        onPress={() => updateValues(name, birthday, age, numberOfFamilyMembers)}
        title="save changes"
        color="#841584"
      ></Button>
    </View>
  );
}
