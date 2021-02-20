import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { cartContext, dispatchContext } from "../contexts/cart.context";
import { toggleContext } from "../contexts/drawer.context";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dialog from "@material-ui/core/Dialog";

import plans from "../helpers/plans";
import "../styles/CheckoutStyle.css";
import PlansDrawer from "./Drawer";

export default function Cart() {
  const showDrawer = useContext(toggleContext);
  const currentProducts = useContext(cartContext);
  const dispatch = useContext(dispatchContext);

  const [open, setOpen] = useState(false);

  //opens Dialog
  const handleOpen = () => {
    setOpen(true);
  };

  //closes Dialog
  const handleClose = () => {
    setOpen(false);
  };

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
          <h4>&#8377;{plans[p.plan].actualCost}</h4>
          <small>&#8377;{plans[p.plan].cost}</small>
        </div>
      </td>

      <td>
        <FontAwesomeIcon
          icon={faTrashAlt}
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
            <table className="item-bill">
              <thead>
                <tr>
                  <th colSpan="5">
                    <h3 className="heading-summary">Summary</h3>
                  </th>
                </tr>
              </thead>

              <tbody>{printItems}</tbody>

              <tfoot>
                <tr className="total">
                  <td colSpan="3">
                    <h3>Total</h3>
                  </td>
                  <td colSpan="2">
                    <div>
                      <h3>&#8377;{userCost} </h3>
                      <small>&#8377;{baseCost}</small>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>

            <button
              className="card-button checkout-button"
              onClick={handleOpen}
            >
              Checkout
            </button>
            <div className="congrats-text">
              <p>Congratulations!</p>
              <p className="saved-text">
                You saved &#8377;{baseCost - userCost}!
              </p>
            </div>
          </div>

          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <h2>🎉You are successfully enrolled.🎉</h2>
          </Dialog>

          {/* side menu */}
          <PlansDrawer />
        </div>
      ) : (
        empty
      )}
    </div>
  );
}
