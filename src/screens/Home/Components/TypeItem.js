import { style } from "../style";

import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

const TypeItem = ({
  id,
  name,
  image,
  color,
  cover,
  activeType,
  handleActiveType = () => {},
}) => {
  // console.log("id", id);
  return (
    <View
      key={id}
      style={[
        style.homeWrapperBodyHeaderTypeBoxOutside,
        { borderColor: color, opacity: activeType === id ? 1 : 0.5 },
      ]}
    >
      <TouchableOpacity
        style={[
          style.homeWrapperBodyHeaderTypeBoxInside,
          { backgroundColor: cover },
        ]}
        onPress={() => handleActiveType(id)}
      >
        <Image source={image} />
        <Text style={style.homeWrapperBodyHeaderTypeBoxInsideTitle}>
          {name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TypeItem;
