import React from "react";
import { Text, View } from "react-native";

// @components
import Navigation from "../../../components/Navigation";

const NotificationPage = ({ navigation, route }) => {
  return (
    <View>
      <Text>This is NotificationPage page</Text>
      <Navigation navigation={navigation} route={route} />
    </View>
  );
};

export default NotificationPage;
