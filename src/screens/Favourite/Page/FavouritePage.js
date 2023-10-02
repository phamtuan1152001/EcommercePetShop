import React from "react";
import { Text, View } from "react-native";

// @components
import Navigation from "../../../components/Navigation";

const FavouritePage = ({ navigation, route }) => {
  console.log("route", route);
  return (
    <View>
      <Text>This is FavouritePage page</Text>
      {/* <Navigation navigation={navigation} route={route} /> */}
    </View>
  );
};

export default FavouritePage;
