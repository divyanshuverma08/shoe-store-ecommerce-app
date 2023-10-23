"use client";

import { Provider } from "react-redux";
import { store, persistor } from "../redux/store";
import SocailAuthProvider from "./socialAuthProvider";
import { PersistGate } from "redux-persist/integration/react";

export default function Providers({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SocailAuthProvider>{children}</SocailAuthProvider>
      </PersistGate>
    </Provider>
  );
}
