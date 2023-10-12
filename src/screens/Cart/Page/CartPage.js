import React from "react";
import { Text, View, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";

// @components
import CartItem from "../Components/CartItem";

const CartPage = ({ navigation, route }) => {
  const listCart = useSelector((state) => state.listCart);
  console.log("listCart", listCart.length);
  return (
    <View
      style={{
        backgroundColor: "#F8FBFF",
        height: "100%",
        paddingHorizontal: 10,
      }}
    >
      <FlatList
        data={listCart}
        renderItem={(item) => {
          return <CartItem data={item} />;
        }}
      />
    </View>
  );
};

export default CartPage;
