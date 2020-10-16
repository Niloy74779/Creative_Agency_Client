import React, { useState } from "react";
import { createContext } from "react";
import "./App.css";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import ServicesList from "./components/ServicesList/ServicesList";
import AddService from "./components/AddService/AddService";
import MakeAdmin from "./components/MakeAdmin/MakeAdmin";
import Order from "./components/Order/Order";
import Review from "./components/Review/Review";
import ClientServiceList from "./components/ClientServiceList/ClientServiceList";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    isLoggedIn: false,
    name: null,
    email: null,
    error: null,
    isAdmin: false,
    image: null,
  });
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <PrivateRoute exact path="/servicelist">
              <ServicesList />
            </PrivateRoute>
            <PrivateRoute exact path="/clientservicelist">
              <ClientServiceList />
            </PrivateRoute>
            <PrivateRoute exact path="/addservice">
              <AddService />
            </PrivateRoute>
            <PrivateRoute exact path="/makeadmin">
              <MakeAdmin />
            </PrivateRoute>
            <PrivateRoute exact path="/order/:id">
              <Order />
            </PrivateRoute>
            <PrivateRoute exact path="/review">
              <Review />
            </PrivateRoute>
            <Route path="*">
              <NotFound />
            </Route>
            <Redirect from="/dashboard" to="/servicelist" />
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
