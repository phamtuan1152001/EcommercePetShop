// @style
import { style } from "./style";

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
} from "react-native";
import { Formik } from "formik";
import { validationSchema } from "./validation";

// @components
import FormField from "../../components/FormField";

// @service
import { loginAuthenticate } from "./service";

const Login = () => {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    fetchLoginAuthenticate();
  }, []);

  const fetchLoginAuthenticate = async () => {
    try {
      setLoading(true);
      const { data } = await loginAuthenticate({});
      console.log("res", data);
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
            <Image source={require("../../../assets/LogoShop.png")} />
          </View>
          <Formik
            initialValues={{ email: "" }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {(formik) => {
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
                    >
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
              );
            }}
          </Formik>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Login;
