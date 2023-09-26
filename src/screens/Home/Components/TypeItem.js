import { style } from "../style";

import React from "react";
import {
  Text,
  View,
  Button,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";

const TypeItem = ({ name, image, color, cover }) => {
  return (
    <View style={style.homeWrapperBodyHeaderTypeBoxOutside}>
      <View style={style.homeWrapperBodyHeaderTypeBoxInside}>
        <Image source={image} />
        <Text style={style.homeWrapperBodyHeaderTypeBoxInsideTitle}>
          {name}
        </Text>
      </View>
    </View>
  );
};

export default TypeItem;
