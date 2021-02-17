import React from "react";
import "../styles/HeaderStyle.css";

import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  return (
    <div className="Header">
      <h1>Header</h1>
      <FontAwesomeIcon icon={faCartPlus} size="2x" />
    </div>
  );
}
