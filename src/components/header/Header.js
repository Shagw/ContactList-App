import { Link, useHistory } from "react-router-dom";
import React from "react";
import logo from "../../logo.svg";

const Header = () => {
  const history = useHistory();
  const redirect = () => {
    history.push("/");
  };
  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container" onClick={redirect}>
          <img className="logo" src={logo} />
          <h4 className="logo-heading">AppName</h4>
        </div>
      </div>
      <ul className="nav-options">
        <li className="option">
          <Link to="./">Home</Link>
        </li>
        <li className="option">
          <Link to="./contacts">Contacts</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
