import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { DataContextData, useData } from "./hooks/dataContext";
import { Dashboard } from "./pages/Dashboard";
import 'react-toastify/dist/ReactToastify.css';
import { Login } from "./pages/Login";
import './styles/global.scss'
import { useEffect, useState } from "react";


export default function App() {

  const { light, isLogged } = useData();
  const [theme, setTheme] = useState("black");

  useEffect(() => {

    if (!light) {
      setTheme("black")
    } else {
      setTheme("white");
    }


  }, [light]);

  return (
    <div className={theme}>
      <Router >
        <ToastContainer autoClose={3000} />

        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>

        </Switch>

      </Router>
    </div>
  );
}





