import React from "react";
import ReactDOM  from "react-dom/client";

const header = React.createElement("div",{id:"parent"},
[React.createElement("h1",{id:"child-sibling 1"},"Sibling 1"),
React.createElement("h1",{id:"child-sibling 2"},"Sibling 2")]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(header);