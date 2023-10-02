import { style } from "./style";

import React from "react";
import { View, Image, Pressable } from "react-native";
import * as RootNavigation from "../../routes/RootNavigation";
import { navigationRef } from "../../routes/RootNavigation";
// @image and icon
import {
  HomeIcon,
  HomeIconActive,
  HeartIcon,
  HeartIconActive,
  NotiIcon,
  NotiIconActive,
  CartIcon,
  CartIconActive,
} from "../../assets/svg";
import SearhIcon from "../../assets/image/SearchIcon.png";

const Navigation = () => {
  const routeName = RootNavigation.navigationRef.current
    ? RootNavigation.navigationRef.current.getCurrentRoute()
    : undefined;
  console.log("test", routeName);
  return (
    <View style={style.homeWrapperFooter}>
      <View style={style.homeWrapperFooterBox}>
        <Pressable
          onPress={() => {
            console.log("GO TO HOME");
            RootNavigation.navigate("Home");
          }}
        >
          <View style={style.homeWrapperFooterBoxIcon}>
            {routeName?.name === "Home" ? <HomeIconActive /> : <HomeIcon />}
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            console.log("GO TO HEART");
            RootNavigation.navigate("Heart");
          }}
        >
          <View style={style.homeWrapperFooterBoxIcon}>
            {routeName?.name === "Heart" ? <HeartIconActive /> : <HeartIcon />}
          </View>
        </Pressable>
      </View>
      {/* <View style={style.searchBoxItem}>
        <View style={style.searchBox} />
      </View> */}
      {/* <View style={style.homeWrapperFooterBoxSearch}>
        <Image source={SearhIcon} />
      </View> */}
      <View style={style.homeWrapperFooterBox}>
        <Pressable
          onPress={() => {
            console.log("GO TO NOTI");
            RootNavigation.navigate("Noti");
          }}
        >
          <View style={style.homeWrapperFooterBoxIcon}>
            {routeName?.name === "Noti" ? <NotiIconActive /> : <NotiIcon />}
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            console.log("GO TO CART");
            RootNavigation.navigate("Cart");
          }}
        >
          <View style={style.homeWrapperFooterBoxIcon}>
            {routeName?.name === "Cart" ? <CartIconActive /> : <CartIcon />}
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default Navigation;
