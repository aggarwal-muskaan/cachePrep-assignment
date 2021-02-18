import React, { useContext } from "react";
import { cartContext } from "../contexts/cart.context";
import { Link } from "react-router-dom";

import "../styles/HeaderStyle.css";

import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  const currentProducts = useContext(cartContext);
  const badgeCount = currentProducts.length;
  return (
    <div className="Header">
      <h1>Header</h1>

      {/* fix shifting of badgeCount on drawer open */}
      <div className="Header-cart-icon">
        <Link to="/checkout" data-count={badgeCount}>
          <FontAwesomeIcon icon={faCartPlus} size="2x" className="badge" />
        </Link>
      </div>
    </div>
  );
}
