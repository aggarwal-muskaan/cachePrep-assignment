import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext, dispatchContext } from "../contexts/cart.context";
import { toggleContext } from "../contexts/drawer.context";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import plans from "../helpers/plans";
import "../styles/CheckoutStyle.css";
import PlansDrawer from "./Drawer";

export default function Cart() {
  const showDrawer = useContext(toggleContext);
  const currentProducts = useContext(cartContext);
  const dispatch = useContext(dispatchContext);

  const handleDelete = (id) => {
    dispatch({ type: "delete", id: id });
  };

  let userCost = 0,
    baseCost = 0;
  for (let i = 0; i < currentProducts.length; i++) {
    userCost += parseInt(
      plans[currentProducts[i].plan].actualCost.replace(/,/g, "")
    );
    baseCost += parseInt(plans[currentProducts[i].plan].cost.replace(/,/g, ""));
  }

  const printItems = currentProducts.map((p) => (
    <tr key={p.packageId} className="each-item">
      {/* starts here */}
      <td colSpan="2">
        <h4>{p.packageName}</h4>
        <small>Validity: {plans[p.plan].time}</small>
        <button
          onClick={() => showDrawer(true, p.packageId)}
          className="change-plan-button"
        >
          Change Plan
        </button>
      </td>

      <td colSpan="2">
        <div className="item-amount">
          <h4>{plans[p.plan].actualCost}</h4>
          <small>{plans[p.plan].cost}</small>
        </div>
      </td>

      <td>
        <FontAwesomeIcon
          icon={faTrashAlt}
          size="1.5x"
          className="delete-icon"
          onClick={() => handleDelete(p.packageId)}
        />
      </td>
    </tr>
    // <hr />
  ));

  const empty = (
    <div>
      <h3>Nothing has been added🙄</h3>
      <Link to="/">
        <button className="view-cart-button">Show All Courses</button>
      </Link>
    </div>
  );

  return (
    <div className="Checkout">
      {currentProducts.length ? (
        <div className="summary-container">
          <div className="Checkout-summary">
            {/* <hr /> border-bottom */}
            <table className="item-bill">
              <tr>
                <th colSpan="5">
                  <h3 className="heading-summary">Summary</h3>
                </th>
              </tr>
              {printItems}
              {/* <hr /> border-top */}
              <tr className="total">
                <td colSpan="3">
                  <h3>Total</h3>
                </td>
                <td colSpan="2">
                  <div>
                    <h3>{userCost} </h3>
                    <small>{baseCost}</small>
                  </div>
                </td>
              </tr>
            </table>

            <button className="card-button checkout-button">Checkout</button>
            <div className="congrats-text">
              <p>Congratulations!</p>
              <p className="saved-text">You saved {baseCost - userCost}!</p>
            </div>
          </div>

          {/* side menu */}
          <PlansDrawer />
        </div>
      ) : (
        empty
      )}
    </div>
  );
}
