import React from "react";
import "../styles/header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1 className="logo">Dev Insights</h1>
      <nav>
        <a href="#" className="nav-link">New Post</a>
      </nav>
    </header>
  );
};

export default Header;
