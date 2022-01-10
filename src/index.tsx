/*
Code challenge 2:

- Trigger an action on one button to make the box inside the other component red and add the word "ALERT!". 
- Trigger an action on the other button and make the box inside the other component green and add the words "Everything ok"

Please use either Redux or React Context for this
*/

import { render } from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
render(<App />, rootElement);
