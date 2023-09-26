import Box from "@mui/material/Box";
import FormInsidePropertyComponent from "./FormInsidePropertyComponent";

const PropertyComponent = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      style={{ minHeight: "100vh", width: "100%" }}
    >
      <FormInsidePropertyComponent />
    </Box>
  );
};

export default PropertyComponent;
