import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  homeWrapper: {
    paddingVertical: 35,
    paddingHorizontal: 20,
    // backgroundColor: "red",
    height: "100%",
  },
  homeWrapperHeader: {
    // backgroundColor: "green",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },
  homeWrapperBody: {
    backgroundColor: "red",
    marginVertical: 20,
  },
});
