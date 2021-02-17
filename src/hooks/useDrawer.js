import { useState } from "react";

export default function useDrawer(init) {
  const [value, setValue] = useState(init);
  const showDrawer = (val) => {
    setValue(val);
  };
  return [value, showDrawer];
}
