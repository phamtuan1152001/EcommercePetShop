import { style } from "../style";

import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

const ToppingItem = ({
  item,
  activeTopping = {},
  setActiveTopping = () => {},
}) => {
  return (
    <TouchableOpacity
      style={[
        style.productDetailWrapperBoxToppingListItem,
        activeTopping.id === item.id && {
          borderWidth: 1,
          borderColor: "#F9881F",
        },
      ]}
      onPress={() => setActiveTopping(item)}
    >
      <Image source={item.image} />
      <Text style={style.productDetailWrapperBoxToppingListItemText}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

export default ToppingItem;
