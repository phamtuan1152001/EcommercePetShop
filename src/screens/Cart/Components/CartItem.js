import React from "react";
import { View, Text, Image, Animated } from "react-native";
// import Swipeable from "react-native-gesture-handler/Swipeable";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";

// @svg and image
import { IconDelete } from "../assets/svg";

const CartItem = ({ data = {} }) => {
  // console.log("item", data);
  const { item } = data || {};
  const rightSwipe = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 2],
      // extrapolate: "clamp",
    });
    return (
      <View
        style={{
          // flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: 10,
        }}
      >
        <Animated.View /* style={{ transform: [{ scale: scale }] }} */>
          <IconDelete />
        </Animated.View>
      </View>
    );
  };
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={rightSwipe}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 10,
            marginVertical: 10,
            backgroundColor: "#FFFFFF",
            // backgroundColor: "green",
            borderRadius: 20,
            padding: 20,
          }}
        >
          <Image source={item.img} style={{ width: 78, height: 68 }} />
          <Text
            style={{
              fontSize: 14,
              lineHeight: 21,
              fontWeight: "500",
            }}
          >
            {item.title}
          </Text>
          <Text
            style={{
              fontSize: 14,
              lineHeight: 21,
              fontWeight: "500",
            }}
          >
            $10
          </Text>
        </View>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default CartItem;
