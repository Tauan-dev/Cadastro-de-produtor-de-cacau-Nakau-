import Box from "@mui/material/Box";
import FormInsideProductionComponent from "./FormInsideProductionComponent";

//import FormInsideComponent from "./FormInsideComponent";

const ProductionComponent = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      style={{ minHeight: "100vh", width: "100%" }}
    >
      <FormInsideProductionComponent />
    </Box>
  );
};

export default ProductionComponent;
