import React from "react";
import  ReactDOM  from "react-dom/client";
//React element(React.createElement) is an object
// const heading = React.createElement("h1", {id: "heading1"}, "heading1")
const jsxHeading = <h1 id="heading1">heading1</h1>
const root = ReactDOM.createRoot(document.getElementById("root"));
//when we render the react element on DOM it is converted to HTML element/tag
root.render(jsxHeading)