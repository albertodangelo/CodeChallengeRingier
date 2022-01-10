import "./styles.css";
import BoxContainer from "./components/BoxContainer";
import TriggerButtons from "./components/TriggerButtons";
import StoreProvider from "./utils/Store";

export default function App() {
  return (
    <div className="App">
      <h1>Hello Code challenge Redux / Context</h1>
      <StoreProvider>
        <TriggerButtons />
        <BoxContainer />
      </StoreProvider>
    </div>
  );
}
