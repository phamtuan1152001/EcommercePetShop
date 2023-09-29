import * as React from "react";
import { Button, Text, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// @components
import Login from "./src/screens/Authenticate/Page/Login";
import Homepage from "./src/screens/Home/Page/Homepage";
import ProductPage from "./src/screens/Products/Page/ProductPage";
import FavouritePage from "./src/screens/Favourite/Page/FavouritePage";
import NotificationPage from "./src/screens/Notification/Page/NotificationPage";
import CartPage from "./src/screens/Cart/Page/CartPage";

const Stack = createNativeStackNavigator();

// const HomeScreen = ({ navigation }) => {
//   return (
//     <Button
//       title="Go to Jane's profile"
//       onPress={() => navigation.navigate("Profile", { name: "Jane" })}
//     />
//   );
// };

// const ProfileScreen = ({ navigation, route }) => {
//   return <Text>This is {route.params.name}'s profile</Text>;
// };

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Homepage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Product"
          component={ProductPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Heart"
          component={FavouritePage}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Noti"
          component={NotificationPage}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Cart"
          component={CartPage}
          options={{ headerShown: true }}
        />
        {/* <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
