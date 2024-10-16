import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import theme from "./theme";
import initRequest from "./utilities/services/initRequest";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

const container = document.getElementById("root")!;
const root = createRoot(container);

initRequest();

root.render(
  <Provider store={store}>
    <CssVarsProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <CssBaseline />

        <App />
      </I18nextProvider>
    </CssVarsProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
