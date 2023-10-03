import { style } from "../style";

import React from "react";
import { View, Text, Pressable } from "react-native";

const ButtonLogout = () => {
  return (
    <Pressable style={style.buttonLogOutWrapper}>
      <Text style={style.buttonLogOutWrapperText}>Log Out</Text>
    </Pressable>
  );
};

export default ButtonLogout;
