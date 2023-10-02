import * as React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { navigationRef } from "./src/routes/RootNavigation";

// @components
import Header from "./src/components/Header";
import Navigation from "./src/components/Navigation";

// Screens
import Login from "./src/screens/Authenticate/Page/Login";
import Homepage from "./src/screens/Home/Page/Homepage";
import ProductPage from "./src/screens/Products/Page/ProductPage";
import FavouritePage from "./src/screens/Favourite/Page/FavouritePage";
import NotificationPage from "./src/screens/Notification/Page/NotificationPage";
import CartPage from "./src/screens/Cart/Page/CartPage";

const Stack = createNativeStackNavigator();

export default function App() {
  const [refVisible, setRefVisible] = React.useState(false);
  React.useEffect(() => {
    if (!refVisible) {
      return;
    }
    // detected rendering
  }, [refVisible]);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8FBFF" }}>
      <NavigationContainer
        ref={(el) => {
          // console.log("el", el);
          navigationRef.current = el;
          setRefVisible(!!el);
        }}
      >
        <React.Fragment>
          <Header />
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
          <Navigation />
        </React.Fragment>
      </NavigationContainer>
      <StatusBar
        animated={true}
        backgroundColor="#FFFFFF"
        barStyle={"dark-content"}
      />
    </SafeAreaView>
  );
}
