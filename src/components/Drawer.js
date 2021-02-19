import React, { useContext } from "react";

import Drawer from "@material-ui/core/Drawer";
import SideMenu from "./SideMenu";
import { openContext, toggleContext } from "../contexts/drawer.context";

export default function PlansDrawer() {
  const val = useContext(openContext);
  const showDrawer = useContext(toggleContext);

  return (
    <Drawer anchor="left" open={val.open} onClose={() => showDrawer(false)}>
      <SideMenu courseId={val.courseId} />
    </Drawer>
  );
}
