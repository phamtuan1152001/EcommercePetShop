// @style
import { style } from "../style";

import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Pressable,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  ActivityIndicator,
  Alert,
} from "react-native";
import { Formik } from "formik";
import { validationSchema } from "../validation";

// @components
import FormField from "../../../components/FormField";

// @service
import { loginAuthenticate } from "../Store/service";

// @constants
import { RETCODE_SUCCESS } from "../../../constants";

const Login = () => {
  const [loading, setLoading] = React.useState(false);
  const [disabled, setDisabled] = React.useState(true);

  const fetchLoginAuthenticate = async (values) => {
    const { email, password } = values || {};
    try {
      setLoading(true);
      const { data } = await loginAuthenticate({
        username: email,
        password,
      });
      if (data.retCode === RETCODE_SUCCESS) {
        Alert.alert("Successfully", "Login successfully!", [
          {
            text: "Press to continue",
            onPress: () => console.log("OK Pressed"),
          },
        ]);
      }
    } catch (err) {
      console.log("FETCH FAIL!", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={style.loginWrapper}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          style={style.loginBody}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          // keyboardVerticalOffset={60}
        >
          <View style={style.loginBodyImage}>
            <Image source={require("../assets/image/LogoShop.png")} />
          </View>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              fetchLoginAuthenticate(values);
            }}
          >
            {(formik) => {
              // const { values, errors } = formik || {};
              // const hasErrors = Object.keys(errors).length > 0;
              // const hasValues = values;
              // setDisabled(hasErrors || !hasValues.email || !hasValues.password);

              return (
                <View style={style.loginBodyCenter}>
                  <FormField
                    field={"email"}
                    label={"Email Address"}
                    placeholder={"Enter your email"}
                    autoCapitalize={"none"}
                    {...formik}
                  />
                  <FormField
                    field={"password"}
                    label={"Password"}
                    placeholder={"Enter your password"}
                    secureTextEntry={true}
                    autoCapitalize={"none"}
                    {...formik}
                  />
                  <View style={style.loginFooter}>
                    <TouchableOpacity
                      style={style.loginFooterBtn}
                      onPress={() => formik.handleSubmit()}
                      // disabled={disabled}
                    >
                      {loading ? (
                        <ActivityIndicator color="#ffff" size={"large"} />
                      ) : (
                        <Text style={style.loginFooterBtnTitle}>Sign In</Text>
                      )}
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
              );
            }}
          </Formik>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Login;
