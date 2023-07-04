import React from "react";
import { createRoot } from 'react-dom/client';
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import reducers from "reducers";
import { createStore, applyMiddleware } from "redux";
// Remove these lines
import thunk from "redux-thunk";
import { Provider } from "react-redux";

const container = document.getElementById('root');
// Remove these lines
let createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
let store = createStoreWithMiddleware(reducers);


if (process.env.NODE_ENV === "production") {
  Sentry.init({
    dsn:
      "https://6d740d803d2a4a07a51cfbaaa93e3d3a@o456774.ingest.sentry.io/5571933",
    autoSessionTracking: true,
    integrations: [new Integrations.BrowserTracing()],

    tracesSampleRate: 1.0,
  });
} 



const root = createRoot(container); 
root.render(<Provider store={store}>
  <App />
</Provider>);

serviceWorker.register();
