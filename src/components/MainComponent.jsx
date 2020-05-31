import React from "react";

import Header from "./HeaderComponent";
import BooksData from "./BooksComponent";

function MainComponent() {
  return (
    <div>
      <Header text="Book Store" />

      <BooksData />
    </div>
  );
}

export default MainComponent;
