import React from "react";
import { View, Text, TextInput } from "react-native";

// @style
import { style } from "./style";

const FormField = ({
  field,
  label,
  placeholder,
  errors,
  touched,
  handleBlur = () => {},
  handleChange = () => {},
  values,
  ...props
}) => {
  const error = errors[field];
  const touch = touched[field];

  const ErrorField = touch && (
    <Text style={{ color: "red", paddingTop: 10 }}>{error}</Text>
  );

  return (
    <View style={style.loginBodyCenterBox}>
      <Text style={style.loginBodyCenterBoxTitle}>{label}</Text>
      <TextInput
        name={field}
        style={style.loginBodyCenterBoxInput}
        placeholder={placeholder}
        onChangeText={handleChange(field)}
        onBlur={handleBlur(field)}
        value={values[field]}
        {...props}
      />
      {ErrorField}
    </View>
  );
};

export default FormField;
