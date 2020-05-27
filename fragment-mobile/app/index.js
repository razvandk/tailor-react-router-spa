import React from "react";
import { render } from "react-dom";
import Routes from "./routes.jsx";

import "core-js/stable";
import "regenerator-runtime";

render(<Routes />, document.getElementById("mobile"));
