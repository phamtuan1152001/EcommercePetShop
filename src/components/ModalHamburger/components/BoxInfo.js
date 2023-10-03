import { style } from "../style";

import React from "react";
import { View, Text, Image } from "react-native";

// @svg and image
import ImageUser from "../../../assets/image/ImageUser.png";

const BoxInfo = ({ name, email }) => {
  return (
    <View style={style.boxInfoWrapper}>
      <View style={style.boxInfoWrapperImage}>
        <Image
          source={ImageUser}
          // style={{ flex: 1, height: undefined, width: undefined }}
          resizeMode={"contain"}
        />
      </View>
      <View style={style.boxInfoWrapperContent}>
        <Text style={style.boxInfoWrapperContentName}>{name}</Text>
        <Text style={style.boxInfoWrapperContentMail}>{email}</Text>
      </View>
    </View>
  );
};

export default BoxInfo;
