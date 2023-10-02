import { style } from "./style";

import React from "react";
import { Text, View, Image } from "react-native";

// @svg and image
import { IconArrowDown, IconHamburgerMenu } from "../../assets/svg";

const Header = () => {
  return (
    <View style={style.homeWrapperHeader}>
      <View style={style.homeWrapperHeaderLeft}>
        <IconHamburgerMenu />
      </View>
      <View style={style.homeWrapperHeaderCenter}>
        <View style={style.homeWrapperHeaderCenterTop}>
          <Text style={style.homeWrapperHeaderCenterTopTitle}>Delivery to</Text>
          <View style={style.homeWrapperHeaderCenterTopIcon}>
            <IconArrowDown />
          </View>
        </View>
        <Text style={style.homeWrapperHeaderCenterBottom}>
          lekki phase 1, Estate
        </Text>
      </View>
      <View style={style.homeWrapperHeaderRight}>
        <Image
          source={require("../../assets/image/IconUser.png")}
          width={18}
          height={23}
        />
      </View>
    </View>
  );
};

export default Header;
