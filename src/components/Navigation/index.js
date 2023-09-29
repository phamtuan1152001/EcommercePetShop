import { style } from "./style";

import React from "react";
import { Text, View, Image, ScrollView, Pressable } from "react-native";

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

const Navigation = ({ navigation, route }) => {
  return (
    <View style={style.homeWrapperFooter}>
      <View style={style.homeWrapperFooterBox}>
        <Pressable
          onPress={() => {
            console.log("GO TO HOME");
            navigation.navigate("Home");
          }}
        >
          <View style={style.homeWrapperFooterBoxIcon}>
            {route.name === "Home" ? <HomeIconActive /> : <HomeIcon />}
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            console.log("GO TO HEART");
            navigation.navigate("Heart");
          }}
        >
          <View style={style.homeWrapperFooterBoxIcon}>
            {route.name === "Heart" ? <HeartIconActive /> : <HeartIcon />}
          </View>
        </Pressable>
      </View>
      {/* <View style={style.searchBoxItem}>
        <View style={style.searchBox} />
      </View>
      <View style={style.homeWrapperFooterBoxSearch}>
        <Image source={SearhIcon} />
      </View> */}
      <View style={style.homeWrapperFooterBox}>
        <Pressable
          onPress={() => {
            console.log("GO TO NOTI");
            navigation.navigate("Noti");
          }}
        >
          <View style={style.homeWrapperFooterBoxIcon}>
            {route.name === "Noti" ? <NotiIconActive /> : <NotiIcon />}
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            console.log("GO TO CART");
            navigation.navigate("Cart");
          }}
        >
          <View style={style.homeWrapperFooterBoxIcon}>
            {route.name === "Cart" ? <CartIconActive /> : <CartIcon />}
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default Navigation;
