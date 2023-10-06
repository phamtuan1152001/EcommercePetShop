import { style } from "../style";

import React from "react";
import { Text, View, Image } from "react-native";

const ProductPage = ({ navigation, route }) => {
  const { params } = route || {};
  console.log("params", params);
  return (
    <View style={style.productDetailWrapper}>
      <Text>This is Product page haha</Text>
      <Image source={params.img} />
    </View>
  );
};

export default ProductPage;
