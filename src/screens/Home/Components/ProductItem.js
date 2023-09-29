import { style } from "../style";

import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

// @image and icon
import { IconStart } from "../assets/svg";
import HeartIcon from "../assets/image/HeartIcon.png";

const ProductItem = ({ item }) => {
  // console.log("item", item);
  return (
    <TouchableOpacity>
      <View style={style.BottomBoxImg}>
        <Image source={item.img} />
      </View>
      <Text style={style.homeWrapperBodyContentBottomBoxName}>
        {item.title}
      </Text>
      <Text style={style.homeWrapperBodyContentBottomBoxDes}>{item.des}</Text>
      <View style={style.homeWrapperBodyContentBottomFooter}>
        <View style={style.homeWrapperBodyContentBottomFooterRate}>
          <IconStart />
          <Text style={style.homeWrapperBodyContentBottomFooterRateText}>
            4+
          </Text>
        </View>
        <View>
          <Image source={HeartIcon} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;
