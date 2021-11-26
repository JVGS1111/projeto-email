import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { DataContextData } from "./hooks/dataContext";
import { Dashboard } from "./pages/Dashboard";

import { Login } from "./pages/Login";
import { ToastContainer } from "react-toastify";
import { BtnThemeColor } from "./components/BtnThemeColor";

import './styles/global.scss'
import 'react-toastify/dist/ReactToastify.css';

export default function App() {

  const [theme, setTheme] = useState("black");
  const [light, setLight] = useState(false);

  useEffect(() => {

    if (!light) {
      setTheme("black")
    } else {
      setTheme("white");
    }
    console.log(theme);

  }, [light]);


  function toggleLight() {
    setLight(!light);
  }
  return (
    <div className={theme}>
      <Router >
        <DataContextData>
          <ToastContainer autoClose={3000} />

          <Switch>
            <Route exact path='/'>
              <Login />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>

          </Switch>
          <BtnThemeColor toggleLight={toggleLight} light={light} />
        </DataContextData>
      </Router>
    </div >
  );
}







