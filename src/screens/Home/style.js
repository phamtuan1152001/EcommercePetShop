import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  homeWrapper: {
    paddingVertical: 35,
    paddingHorizontal: 20,
    height: "100%",
    backgroundColor: "#F8FBFF",
  },
  /* Header */
  homeWrapperHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "red",
  },
  homeWrapperHeaderLeft: {
    width: 40,
    height: 40,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
  },
  shadowProp: {
    shadowColor: "#red",
    shadowOffset: { width: -2, height: 30 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  homeWrapperHeaderCenter: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  homeWrapperHeaderCenterTop: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  homeWrapperHeaderCenterTopTitle: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 21,
    textDecorationLine: "underline",
    color: "#1C1C1C",
  },
  homeWrapperHeaderCenterTopIcon: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  homeWrapperHeaderCenterBottom: {
    fontWeight: "400",
    fontSize: 15,
    lineHeight: 23,
    color: "#FE554A",
  },
  homeWrapperHeaderRight: {
    width: 40,
    height: 40,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
  },
  /* End of Header */
  /* Body */
  homeWrapperBody: {
    // backgroundColor: "red",
  },
  homeWrapperBodyHeader: {
    // style here
    // paddingVertical: 40,
  },
  homeWrapperBodyHeaderTitle: {
    color: "#3D3D3D",
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 31,
    marginVertical: 35,
  },
  homeWrapperBodyHeaderType: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
  },
  homeWrapperBodyHeaderTypeBoxOutside: {
    borderWidth: 1,
    borderRadius: 50,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  homeWrapperBodyHeaderTypeBoxInside: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    paddingVertical: 30,
    paddingHorizontal: 10,
    margin: 10,
    borderRadius: 50,
  },
  homeWrapperBodyHeaderTypeBoxInsideTitle: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 18,
    color: "#000000",
  },
  /* End of Body */
});
