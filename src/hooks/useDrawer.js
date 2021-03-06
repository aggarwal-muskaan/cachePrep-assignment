import { useState } from "react";

export default function useDrawer(init) {
  const [value, setValue] = useState({ open: init, courseId: null });
  const showDrawer = (val, id = null) => {
    setValue({ open: val, courseId: id });
  };

  return [value, showDrawer];
}
