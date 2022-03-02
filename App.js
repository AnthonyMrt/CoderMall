import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import AppNav from "./routes/AppNav";
import "react-native-gesture-handler";

export default function App() {
  return (
    <Provider store={store}>
      <AppNav />
    </Provider>
  );
}
