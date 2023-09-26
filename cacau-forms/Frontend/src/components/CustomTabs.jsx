import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PropertyComponent from "./PropertyComponent";
import ProductionComponent from "./ProductionComponent";
import ProducerComponent from "./ProducerComponent";
import BatchComponent from "./BatchComponent";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function CustomTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          backgroundColor: "#52331E",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{ style: { backgroundColor: "#FEE0C1" } }}
        >
          <Tab
            label="Produtor"
            {...a11yProps(0)}
            sx={{
              "&.Mui-selected": {
                color: "#FEE0C1",
              },
              width: "25%",
            }}
          />
          <Tab
            label="Propriedade"
            {...a11yProps(1)}
            sx={{
              "&.Mui-selected": {
                color: "#FEE0C1",
              },
              width: "25%",
            }}
          />
          <Tab
            label="Produção"
            {...a11yProps(2)}
            sx={{
              "&.Mui-selected": {
                color: "#FEE0C1",
              },
              width: "25%",
            }}
          />
          <Tab
            label="Lote"
            {...a11yProps(3)}
            sx={{
              "&.Mui-selected": {
                color: "#FEE0C1",
              },
              width: "25%",
            }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <ProducerComponent />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <PropertyComponent />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <ProductionComponent />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <BatchComponent />
      </CustomTabPanel>
    </Box>
  );
}

//  bgcolor: "#fff2e0dc",
