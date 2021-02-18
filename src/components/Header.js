import React from "react";
import { Link } from "react-router-dom";

import "../styles/HeaderStyle.css";

import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  return (
    <div className="Header">
      <h1>Header</h1>
      <div className="Header-cart-icon">
        <Link to="/checkout">
          <FontAwesomeIcon icon={faCartPlus} size="2x" />
        </Link>
      </div>
    </div>
  );
}
