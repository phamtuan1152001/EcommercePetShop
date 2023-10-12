import { applyMiddleware, createStore } from "redux";
import { cartReducer } from "./cart/reducers";
import { persistReducer, persistStore } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

const store = createStore(persistedReducer, applyMiddleware());

const Persistor = persistStore(store);

export { Persistor };
export default store;
