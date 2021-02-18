import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { toggleContext } from "../contexts/drawer.context";
import { dispatchContext } from "../contexts/cart.context";
import plans from "../helpers/plans";
import "../styles/DrawerStyle.css";

export default function SideMenu({ courseId }) {
  // provide method for editing subscription plans
  const dispatch = useContext(dispatchContext);

  const showDrawer = useContext(toggleContext);

  const handleEnroll = (planId) => {
    showDrawer(false);
    dispatch({ type: "editPlan", id: courseId, plan: planId });
  };

  return (
    <>
      <div className="Side-menu">
        <h3 className="container-heading">Subscription Plans</h3>

        {plans.map((p) => (
          <div className="plan-card" key={p.id}>
            <h2 className="plan-card-duration">{p.time}</h2>
            {p.recommended && (
              <small className="default-plan-text">(Recommended)</small>
            )}
            <h3 className="plan-card-cost">&#8377;{p.actualCost}</h3>
            <small className="plan-card-strike">&#8377;{p.cost}</small>
            <div className="plan-add-button">
              <button
                onClick={() => handleEnroll(p.id)}
                className="card-button"
              >
                CHOOSE
              </button>
            </div>
          </div>
        ))}
      </div>
      <Link to="/checkout">
        <button className="view-cart-button">View Cart</button>
      </Link>
    </>
  );
}
