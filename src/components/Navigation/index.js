import { style } from "./style";

import React from "react";
import { View, Image, Pressable } from "react-native";
import * as RootNavigation from "../../routes/RootNavigation";
import { navigationRef } from "../../routes/RootNavigation";
// import { useRoute } from "@react-navigation/native";
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

const Navigation = ({ navigation = () => {}, route }) => {
  // console.log("test in navigation", route?.current?.getCurrentRoute());
  const handleData = (test) => {
    if (!!test) return route?.current?.getCurrentRoute()?.name;
    else return "";
  };
  // const { name } = route?.current?.getCurrentRoute();
  return (
    <View style={style.homeWrapperFooter}>
      <View style={style.homeWrapperFooterBox}>
        <Pressable
          onPress={() => {
            // console.log("GO TO HOME");
            navigation.navigate("Home");
          }}
        >
          <View style={style.homeWrapperFooterBoxIcon}>
            {handleData(route?.current?.getCurrentRoute()) === "Home" ? (
              <HomeIconActive />
            ) : (
              <HomeIcon />
            )}
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            // console.log("GO TO HEART");
            navigation.navigate("Heart");
          }}
        >
          <View style={style.homeWrapperFooterBoxIcon}>
            {handleData(route?.current?.getCurrentRoute()) === "Heart" ? (
              <HeartIconActive />
            ) : (
              <HeartIcon />
            )}
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
            // console.log("GO TO NOTI");
            navigation.navigate("Noti");
          }}
        >
          <View style={style.homeWrapperFooterBoxIcon}>
            {handleData(route?.current?.getCurrentRoute()) === "Noti" ? (
              <NotiIconActive />
            ) : (
              <NotiIcon />
            )}
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            // console.log("GO TO CART");
            navigation.navigate("Cart");
          }}
        >
          <View style={style.homeWrapperFooterBoxIcon}>
            {handleData(route?.current?.getCurrentRoute()) === "Cart" ? (
              <CartIconActive />
            ) : (
              <CartIcon />
            )}
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default Navigation;
