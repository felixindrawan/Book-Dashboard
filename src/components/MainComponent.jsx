import React from "react";

import Header from "./HeaderComponent";
import BooksData from "./BooksComponent";

import "../styles/MainComponent.css";


function MainComponent() {
  return (
    <div>
      <Header text="Book Store" />

      <BooksData />
    </div>
  );
}

export default MainComponent;
