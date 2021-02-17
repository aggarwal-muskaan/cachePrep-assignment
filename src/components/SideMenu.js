import React from "react";
import plans from "../helpers/plans";

import "../styles/DrawerStyle.css";

export default function SideMenu() {
  return (
    <div className="Side-menu">
      {plans.map((p) => (
        <div className="plan-card">
          <h2 className="plan-card-duration">{p.time}</h2>
          {p.recommended && (
            <small className="default-plan-text">(Recommended)</small>
          )}
          <h3 className="plan-card-cost">&#8377;{p.actualCost}</h3>
          <small className="plan-card-strike">&#8377;{p.cost}</small>
          <div className="plan-add-button">
            <button className="card-button">ADD</button>
          </div>
        </div>
      ))}
    </div>
  );
}
