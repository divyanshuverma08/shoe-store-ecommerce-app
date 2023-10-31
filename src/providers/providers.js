"use client";

import { Provider } from "react-redux";
import { store } from "../redux/store";
import SocailAuthProvider from "./socialAuthProvider";

export default function Providers({ children }) {
  return (
    <Provider store={store}>
      <SocailAuthProvider>{children}</SocailAuthProvider>
    </Provider>
  );
}
