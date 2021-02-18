import React from "react";
import Rating from "@material-ui/lab/Rating";
import Drawer from "@material-ui/core/Drawer";
import SideMenu from "./SideMenu";
import courses from "../helpers/courses";
import useDrawer from "../hooks/useDrawer";
import "../styles/CoursesStyle.css";

export default function AllCourses() {
  // custom hook
  const [val, showDrawer] = useDrawer(false);

  //mapping over course data
  const printData = courses.map((c) => (
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
          className="card-button"
          onClick={() => showDrawer(true, c.packageId)}
        >
          <h3>{c.status}</h3>
        </button>
      </div>
    </div>
  ));

  return (
    <>
      <h3 className="container-heading">Subscription Domains</h3>

      <div className="container">
        {/* printing cards */}
        {printData}
      </div>

      {/* side menu */}
      <Drawer anchor="left" open={val.open} onClose={() => showDrawer(false)}>
        <SideMenu courseId={val.courseId} />
      </Drawer>
    </>
  );
}
