import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useState } from "react";
import Header from "./components/Header";
import MainFile from "./components/MainFile";
import Cart from "./components/Cart";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

export const context = createContext();
function App() {
  const [subjectData, setSubjectData] = useState([]);
  return (
    <context.Provider value={{ subjectData, setSubjectData }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
          <Route path="/Home">
            <Header />
            <MainFile />
          </Route>
          <Route path="/my-Cart">
            <Cart />
          </Route>
        </Switch>
      </Router>
    </context.Provider>
  );
}

export default App;
