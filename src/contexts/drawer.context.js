import { createContext } from "react";
import useDrawer from "../hooks/useDrawer";

const openContext = createContext();
const toggleContext = createContext();

function Drawer(props) {
  const [state, showDrawer] = useDrawer(false);
  return (
    <openContext.Provider value={state}>
      <toggleContext.Provider value={showDrawer}>
        {props.children}
      </toggleContext.Provider>
    </openContext.Provider>
  );
}

export { openContext };
export { toggleContext };
export { Drawer };
