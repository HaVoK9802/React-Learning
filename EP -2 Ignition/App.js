import React from "react";
import ReactDOM from "react-dom";

const header = React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},
[React.createElement("h1",{id:"sibling1"},"sibling 1"),React.createElement("h1",{id:"sibling2"},"sibling 2")]));


console.log(header);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header);