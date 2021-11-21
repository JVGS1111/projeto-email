import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { DataContextData } from "./hooks/dataContext";
import { Dashboard } from "./pages/Dashboard";


export default function App() {
  return (
    <Router>

      <Switch>
        <Route path="/dashboard">
          <DataContextData>
            <Dashboard />
          </DataContextData>
        </Route>
      </Switch>

    </Router>
  );
}





