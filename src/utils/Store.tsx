import React, { createContext, useReducer } from "react";

export const Store = createContext();

const initialState = {
  alertMode: false
};

function reducer(state, action) {
  console.log(action.payload);
  switch (action.type) {
    case "IS_ALERT_MODE":
      return { ...state, alertMode: true };

    case "RESET_ALERT":
      return { ...state, alertMode: false };

    default:
      return state;
  }
}

export default function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
