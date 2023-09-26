import Box from "@mui/material/Box";
import FormInsideProducerComponent from "./FormInsideProducerComponent";

const ProducerComponent = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      style={{ minHeight: "100vh", width: "100%" }}
    >
      <FormInsideProducerComponent />
    </Box>
  );
};

export default ProducerComponent;
