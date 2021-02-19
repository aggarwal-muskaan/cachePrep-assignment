import React, { useContext } from "react";
import { toggleContext } from "../contexts/drawer.context";
import { cartContext, dispatchContext } from "../contexts/cart.context";
import Rating from "@material-ui/lab/Rating";
import PlansDrawer from "./Drawer";
import courses from "../helpers/courses";
import "../styles/CoursesStyle.css";

export default function AllCourses() {
  const showDrawer = useContext(toggleContext);
  const state = useContext(cartContext);
  const dispatch = useContext(dispatchContext);
  //* opening side menu & updating state
  const handleClick = (id, name) => {
    dispatch({ type: "add", id: id, name: name });
    showDrawer(true, id);
  };

  //* mapping over course data
  const printData = courses.map((c) => {
    const addedInCart = state.find((s) => s.packageId === c.packageId);

    return (
      <div className="card" key={c.packageId}>
        <div>
          <div className="card-title">
            <h3>{c.packageName}</h3>
            <h5>
              <em>{c.packageDomain}</em>
            </h5>
          </div>
          <div className="card-info">
            <ul>
              {c.content.map((list) => (
                <li key={list}>{list}</li>
              ))}
            </ul>
            <p>Mentor: {c.mentorName}</p>
          </div>
          <div className="card-footer">
            <div className="card-footer-rating">
              <div>
                Ratings: <h5>{c.ratings}</h5>
              </div>
              {/* <div> */}
              <Rating
                name="half-rating"
                defaultValue={c.ratings}
                precision={0.1}
                size="small"
                readOnly
              />
              {/* </div> */}
            </div>
            <div>
              Enrolled: <h5>{c.currentllyEnrolled}</h5>
            </div>
          </div>
        </div>

        <div className="card-bottom">
          <button
            className={`card-button ${
              addedInCart ? "disable-card-button" : ""
            }`}
            onClick={() => handleClick(c.packageId, c.packageName)}
            disabled={addedInCart ? true : false}
          >
            <h3>{addedInCart ? "Added" : c.status}</h3>
          </button>
        </div>
      </div>
    );
  });

  return (
    <>
      <h3 className="container-heading">Subscription Domains</h3>

      <div className="container">
        {/* printing cards */}
        {printData}
      </div>

      {/* side menu */}
      <PlansDrawer />
    </>
  );
}
