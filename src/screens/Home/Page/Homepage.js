import { style } from "../style";

import React from "react";
import { Text, View, Button, Image, ScrollView } from "react-native";

const Homepage = ({ navigation }) => {
  return (
    <ScrollView style={style.homeWrapper}>
      <View style={style.homeWrapperHeader}>
        <Image source={require("../assets/image/LogoShop.png")} />
        <Image source={require("../assets/image/homepage1.png")} />
      </View>
      <View style={style.homeWrapperBody}>
        <Text>List products is here</Text>
      </View>
    </ScrollView>
  );
};

export default Homepage;
