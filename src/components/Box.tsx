import React, { useContext } from "react";
import { Store } from "../utils/Store";

const boxStyle = {
  width: "200px",
  height: "200px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  margin: "20px auto"
};

const Box = () => {
  const { state } = useContext(Store);
  const { alertMode } = state;

  const green = alertMode ? "red" : "green";
  const alertText = alertMode ? "Error" : "Everthing ok";

  console.log("Allert in Box", alertMode);
  return (
    <div style={{ ...boxStyle, backgroundColor: `${green}` }}>{alertText}</div>
  );
};

export default Box;
