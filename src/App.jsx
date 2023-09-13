import "./App.css";
import AllRoutes from "./Routes/AllRoutes";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Sidebar />
      <AllRoutes />
    </div>
  );
}

export default App;
