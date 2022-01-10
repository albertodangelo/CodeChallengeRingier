import Box from "./Box";

const boxStyle = {
  marginTop: "10px",
  border: "1px solid black"
};

const BoxContainer = () => {
  return (
    <div style={boxStyle}>
      <Box />
    </div>
  );
};

export default BoxContainer;
