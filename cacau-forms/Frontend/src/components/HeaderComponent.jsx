//import styles from "./HeaderComponents.module.css";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function HeaderComponent() {
  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: " #6d4428",
        height: "130px",
        margin: 0,
        padding: 0,
        width: "100%",
      }}
    >
      <Toolbar>
        <Typography variant="h6">
          <div>
            <img src="Logo.png" alt="logo" />
          </div>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default HeaderComponent;
