// import 'core-js/stable';
// import 'regenerator-runtime/runtime';

import React from "react";
import { createRoot } from "react-dom/client";

// Note: Using an Alias in Webpack
import App from "components/App/";

// Note: Using an Alias in Webpack
import "styles/index.scss";
const domNode = document.getElementById("root");
if (domNode) {
  const root = createRoot(domNode);

  root.render(<App />);
}
