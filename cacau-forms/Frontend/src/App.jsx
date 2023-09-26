/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import "./App.css";
import "./index.css";
//import CustomTabs from "./components/CustomTabs";
import HeaderComponent from "./components/HeaderComponent";
import CustomTabs from "./components/CustomTabs";

function App() {
  return (
    <div style={{ width: "100%" }}>
      <HeaderComponent />
      <CustomTabs />
    </div>
  );
}

export default App;
