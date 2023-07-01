import React from "react";
/** Hooks */
import { useState } from "react";
/** Components */
import { View } from "react-native";
/** Styles */
import containers from "../Styles/Containers";
import Identifiers from "../Components/Identifiers";
import PrivateInfo from "../Components/PrivateInfo";
import FamilyTree from "../Components/FamilyTree";

export default function Profile() {
  // this will be set after you change the text in the TextInput component in SingleIdentifier.js
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [age, setAge] = useState(0);
  const [numberOfFamilyMembers, setNumberOfFamilyMembers] = useState(0);
  // this will be set after you click the save changes button
  const [privateInfoValues, setPrivateInfoValues] = useState({
    name: "",
    birthday: "",
    age: 0,
    numberOfFamilyMembers: 0,
  });
  const updateName = (text) => {
    setName(text);
  };
  const updateAge = (text) => {
    setAge(text);
  };
  const updateBirthday = (text) => {
    setBirthday(text);
  };
  const updateNumberOfFamilyMembers = (text) => {
    setNumberOfFamilyMembers(text);
  };
  const update = () => {
    setPrivateInfoValues({ name, birthday, age, numberOfFamilyMembers });
  };

  // header from the tab navigator
  return (
    <View style={containers.pageContainer}>
      <PrivateInfo
        name={privateInfoValues.name}
        birthday={privateInfoValues.birthday}
        age={privateInfoValues.age}
        numberOfFamilyMembers={privateInfoValues.numberOfFamilyMembers}
      />
      <View style={containers.bodyContainer}>
        <Identifiers
          name={name}
          birthday={birthday}
          age={age}
          numberOfFamilyMembers={numberOfFamilyMembers}
          updateName={updateName}
          updateBirthday={updateBirthday}
          updateAge={updateAge}
          updateNumberofFamilyMembers={updateNumberOfFamilyMembers}
          updateValues={update}
        />
        <FamilyTree />
      </View>
    </View>
  );
  // bottom menu from the tab navigator
}
