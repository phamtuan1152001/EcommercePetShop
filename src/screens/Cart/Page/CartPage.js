import React from "react";
import { Text, View } from "react-native";

// @components
import Navigation from "../../../components/Navigation";

const CartPage = ({ navigation, route }) => {
  return (
    <View>
      <Text>This is CartPage page</Text>
      {/* <Navigation navigation={navigation} route={route} /> */}
    </View>
  );
};

export default CartPage;
