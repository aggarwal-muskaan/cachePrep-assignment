import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          packageId: action.id,
          packageName: action.name,
          plan: 1,
        },
      ];
    case "editPlan":
      return state.map((s) =>
        s.packageId === action.id ? { ...s, plan: action.plan } : s
      );
    case "delete":
      return state.filter((s) => s.packageId !== action.id);
    default:
      return state;
  }
}

function useCart(initialState) {
  const [state, dispatch] = useReducer(reducer, initialState);
  //   console.log(state, state.length);
  return [state, dispatch];
}

export default useCart;
