import React from "react";
import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

// @components
import Navigation from "../../../components/Navigation";

const CartPage = ({ navigation, route }) => {
  const listCart = useSelector((state) => state.listCart);
  console.log("listCart", listCart);
  return (
    <View>
      <Text>This is CartPage page</Text>
      {/* <Navigation navigation={navigation} route={route} /> */}
    </View>
  );
};

export default CartPage;
