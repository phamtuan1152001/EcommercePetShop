import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  loginWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  loginBody: {
    height: "100%",
    backgroundColor: "#FFFFFF",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  loginBodyImage: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  loginBodyCenter: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: 10,
    width: "100%",
    paddingHorizontal: 25,
  },
  loginFooter: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  loginFooterBtn: {
    backgroundColor: "#F8623A",
    width: "100%",
    height: 56,
    borderRadius: 30,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  loginFooterBtnTitle: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 18,
  },
  loginFooterRegister: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  loginFooterRegisterTitle: {
    color: "#888888",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 16,
  },
  loginFooterRegisterDes: {
    color: "#EA9459",
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 16,
  },
});
