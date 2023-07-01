import { StyleSheet } from "react-native";

const containers = StyleSheet.create({
  pageContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  privateInfoContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "bisque",
  },
  privateInfoHeaderContainer: {
    flex: 1.5,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  privateInfoBodyContainer: {
    flex: 10,
    flexDirection: "row",
  },
  singlePrivateInfoContainer: {
    flex: 1,
    flexDirection: "column",
    textAlign: "center",
  },
  singlePrivateInfoHeaderContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  singlePrivateInfoBodyContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  bodyContainer: {
    flex: 5,
    flexDirection: "row",
    backgroundColor: "aliceblue",
  },
  familyTreeContainer: {
    flex: 1,
    flexDirection: "column",
    textAlign: "center",
  },
  identifiersContainer: {
    flex: 1,
    flexDirection: "column",
  },
  singleIdentifierContainer: {
    flex: 1,
    flexDirection: "row",
  },
  singleIdentifierTitleContainer: {
    flex: 1,
    flexDirection: "column",
    textAlign: "center",
  },
  singleIdentifierInputContainer: {
    flex: 3,
  },
});

export default containers;
