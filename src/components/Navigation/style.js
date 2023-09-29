import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  homeWrapperFooter: {
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 40,
    paddingHorizontal: 30,
    marginTop: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: "relative",
  },
  homeWrapperFooterBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 40,
  },
  homeWrapperFooterBoxIcon: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  homeWrapperFooterBoxSearch: {
    position: "absolute",
    top: -50,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBoxItem: {
    position: "absolute",
    top: -80,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBox: {
    width: 60,
    height: 60,
    backgroundColor: "#faf8f7",
    borderRadius: 60,
  },
});
