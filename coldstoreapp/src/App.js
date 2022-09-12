import React from "react";
import ColdStoreDashboard from "./components/ColdStoreDashboard";
import Dashboard from "./screens/Dashboard";
import ColdStoreNavbar from "./components/ColdStoreNavbar";
import ShipSide from "./components/ShipSide";

function App() {
  return (
    <div className="App">
      <ColdStoreNavbar />
      <ShipSide />
    </div>
  );
}

export default App;
