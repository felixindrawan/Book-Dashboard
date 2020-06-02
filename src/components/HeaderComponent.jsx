import React from "react";
import "../styles/HeaderComponent.css";

function Header(props) {
  return (
    <header className="header-background">
      <h1 className="page-title">{props.text}</h1>
    </header>
  );
}

export default Header;
