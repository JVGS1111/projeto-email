

import { BrowserRouter as Router, Route, Routes as Switch } from "react-router-dom";
import { DataContextData } from "./hooks/dataContext";
import { Dashboard } from "./pages/Dashboard";


export default function App() {
  return (
    <Router>
      <DataContextData>
        <Dashboard />
      </DataContextData>
    </Router>
  );
}


