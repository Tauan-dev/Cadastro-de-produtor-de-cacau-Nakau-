import Box from "@mui/material/Box";
import FormInsideBatchComponent from "./FormInsideBatchComponent";

const BatchComponent = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      style={{ minHeight: "100vh", width: "100%" }}
    >
      <FormInsideBatchComponent />
    </Box>
  );
};

export default BatchComponent;
