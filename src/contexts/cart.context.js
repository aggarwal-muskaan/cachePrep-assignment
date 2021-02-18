import { createContext } from "react";
import useCart from "../hooks/useCart";

const cartContext = createContext();
const dispatchContext = createContext();

function Cart(props) {
  const [state, dispatch] = useCart([]);
  return (
    <cartContext.Provider value={state}>
      <dispatchContext.Provider value={dispatch}>
        {props.children}
      </dispatchContext.Provider>
    </cartContext.Provider>
  );
}

export { cartContext };
export { dispatchContext };
export { Cart };
