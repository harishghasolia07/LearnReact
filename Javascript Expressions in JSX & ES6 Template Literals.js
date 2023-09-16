{} -- this use in js file for take a variable value or expression(Not statement) inside the js file.

Code-
import React from "react";
import ReactDOM from "react-dom";

var fname = "Developer";
var lname = "Harish";
let x = Math.floor(Math.random() * 10 + 1);
ReactDOM.render(
  <div>
    <h1>My name is {fname + " " + lname}</h1>
    <h1>
      My name is {fname} {lname}
    </h1>
    <p>My lucky number is {x}</p>
  </div>,
  document.getElementById("root")
);

