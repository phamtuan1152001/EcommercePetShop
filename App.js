import * as React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import store, { Persistor } from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";

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
  const [navRef, setNavRef] = React.useState();
  const [tabName, setTabName] = React.useState("Home");

  const navigationRef = React.useCallback((node) => {
    if (node !== null) {
      setNavRef(node);
    }
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={Persistor}>
        <SafeAreaView style={{ flex: 1, backgroundColor: "#F8FBFF" }}>
          <NavigationContainer
            ref={navigationRef}
            onStateChange={(item) => {
              // console.log("item", item);
              const { routes, index } = item || {};
              setTabName(routes[index].name);
            }}
          >
            <Header route={tabName} navigation={navRef} />
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
            <Navigation
              navigation={navRef}
              navRef={navRef?.getCurrentRoute()}
              route={tabName}
            />
          </NavigationContainer>
          <StatusBar
            animated={true}
            backgroundColor="#F8FBFF"
            barStyle={"dark-content"}
          />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}
