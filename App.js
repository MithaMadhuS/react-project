import React from "react";
import  ReactDOM  from "react-dom";
const heading1 = React.createElement("h1", {id: "heading1"}, "heading1")
const heading2 = React.createElement("h1", {id: "heading2"}, "heading2")
const parent = 
    React.createElement("div", {id: "parent"}, React.createElement("div", {id: "child"}, [heading1, heading2]))
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent)
root.render(parent)