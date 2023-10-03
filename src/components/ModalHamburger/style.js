import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  modalWrapper: {
    backgroundColor: "#F8FBFF",
    height: "100%",
    paddingLeft: 20,
    marginTop: 20,
  },
  modalWrapperHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  modalWrapperHeaderBox: {
    borderRadius: 15,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    width: 40,
    height: 40,
  },
  modalWrapperBody: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: 20,
  },
  modalWrapperBodyLeft: {
    // backgroundColor: "pink",
  },
  boxInfoWrapper: {
    //
  },
  boxInfoWrapperImage: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  boxInfoWrapperContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 1,
  },
  boxInfoWrapperContentName: {
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 21,
    color: "#000000",
  },
  boxInfoWrapperContentMail: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 21,
    color: "#000000",
  },
  boxNavigationWrapper: {
    paddingTop: 10,
    paddingBottom: 40,
  },
  boxNavigationWrapperView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
    paddingVertical: 20,
  },
  boxNavigationWrapperViewImage: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 24,
    height: 24,
  },
  boxNavigationWrapperViewText: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 21,
    color: "#000000",
  },
  buttonLogOutWrapper: {
    backgroundColor: "#F9881F",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 50,
    borderRadius: 20,
  },
  buttonLogOutWrapperText: {
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 21,
    color: "#FFFFFF",
  },
  modalWrapperBodyRight: {
    // backgroundColor: "orange",
    // width: "100%",
    // width: "auto",
    position: "relative",
  },
  modalWrapperBodyRightBox: {
    position: "absolute",
    top: -80,
    left: -70,
    // backgroundColor: "red",
    // width: 281,
    // height: 611,
  },
});
