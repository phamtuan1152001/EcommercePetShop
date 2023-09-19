import React from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Pressable,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";

// @style
import { style } from "./style";

const Login = () => {
  return (
    <View style={style.loginWrapper}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          style={style.loginBody}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          // keyboardVerticalOffset={60}
        >
          <View style={style.loginBodyImage}>
            <Image source={require("../../../assets/LogoShop.png")} />
          </View>
          <View style={style.loginBodyCenter}>
            <View style={style.loginBodyCenterBox}>
              <Text style={style.loginBodyCenterBoxTitle}>Email Address</Text>
              <TextInput
                style={style.loginBodyCenterBoxInput}
                placeholder="Enter your email."
              />
            </View>
            <View
              style={style.loginBodyCenterBox}
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              keyboardVerticalOffset={30}
            >
              <Text style={style.loginBodyCenterBoxTitle}>Password</Text>
              <TextInput
                style={style.loginBodyCenterBoxInput}
                placeholder="Enter your password."
              />
            </View>
            <View style={style.loginFooter}>
              <TouchableOpacity style={style.loginFooterBtn}>
                <Text style={style.loginFooterBtnTitle}>Sign In</Text>
              </TouchableOpacity>
              <View style={style.loginFooterRegister}>
                <Text style={style.loginFooterRegisterTitle}>
                  Don't have an account
                </Text>
                <Pressable onPress={() => console.log("hihi")}>
                  <Text style={style.loginFooterRegisterDes}>
                    Register here
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Login;
