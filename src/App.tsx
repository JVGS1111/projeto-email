import React from "react";
import { Sidebar } from "./components/Sidebar";
import { BrowserRouter as Router, Route, Routes as Switch } from "react-router-dom";


export default function App() {
  return (
    <Router>
      <Sidebar />
    </Router>
  );
}


