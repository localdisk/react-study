import React from "react";
import ReactDOM from "react-dom";
import ShoppingList from "./components/ShoppingList";

ReactDOM.render(
  <div>
    <h1>Hello, world!</h1>
    <ShoppingList name="sample"></ShoppingList>
  </div>,
  document.getElementById('root')
);
