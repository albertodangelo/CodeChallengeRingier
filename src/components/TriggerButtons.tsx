import React, { useContext } from "react";
import { Store } from "../utils/Store";

const buttonStyle = {
  width: "200px",
  height: "40px"
};

const TriggerButtons = () => {
  const { dispatch } = useContext(Store);

  const clickedAlertButton = () => {
    // Trigger the alert with a red background color
    // and ALERT! as text
    dispatch({
      type: "IS_ALERT_MODE",
      payload: { isAlert: true }
    });
  };

  const clickedResetButton = () => {
    // Reset the alert with a green background color
    // and Everything ok as text
    dispatch({
      type: "RESET_ALERT",
      payload: { isAlert: false }
    });
  };

  return (
    <>
      <button style={buttonStyle} onClick={clickedResetButton}>
        Reset alert
      </button>

      <button style={buttonStyle} onClick={clickedAlertButton}>
        Trigger alert
      </button>
    </>
  );
};

export default TriggerButtons;
