
import { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddAdmin from "./components/Dashboard/AddAdmin/AddAdmin";
import AddFeedback from "./components/Dashboard/AddFeedback/AddFeedback";
import AddService from "./components/Dashboard/AddService/AddService";
import ClientOrderCollection from "./components/Dashboard/AdminOrderCollection/ClientOrderCollection";
import AdminServiceList from "./components/Dashboard/AdminServiceList/AdminServiceList";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import PlaceOrder from "./components/Dashboard/PlaceOrder/PlaceOrder";
import UserBookings from "./components/Dashboard/UserBookingList/UserBookings";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import './App.css';
import ManageService from "./components/Dashboard/ManageService/ManageService";
export const UserContext = createContext();
export const AdminContext = createContext();

function App() {
  const [loggedInUser, SetLoggedInUser] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);
  console.log(isAdmin)
  useEffect(() => {
    fetch('https://cryptic-escarpment-88718.herokuapp.com/isAdmin', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, [loggedInUser.email]);

  const bodyStyle = {
    margin:'0px'
  }

  return (
    <div className="body">
      <AdminContext.Provider value={[isAdmin, setIsAdmin]}>
        <UserContext.Provider value={[loggedInUser, SetLoggedInUser]}>
          <Router>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route exact path="/login">
                <Login></Login>
              </Route>

              {/* Admin Tasks */}

              <PrivateRoute path="/dashboard">
                <Dashboard />
              </PrivateRoute>
              <PrivateRoute path="/bookingList">
                <UserBookings />
              </PrivateRoute>
              <PrivateRoute path="/addService">
                <AddService />
              </PrivateRoute>
              <PrivateRoute path="/clientOrderList">
                <ClientOrderCollection />
              </PrivateRoute>
              <PrivateRoute path="/addAdmin">
                <AddAdmin />
              </PrivateRoute>
              <PrivateRoute path="/manageService">
                <ManageService />
              </PrivateRoute>
              <PrivateRoute path="/orderList">
                <AdminServiceList />
              </PrivateRoute>

              {/* User Tasks */}

              <PrivateRoute path="/dashboard">
                <Dashboard />
              </PrivateRoute>
              <PrivateRoute path="/placeOrder">
                <PlaceOrder />
              </PrivateRoute>
              <PrivateRoute path="/addFeedback">
                <AddFeedback />
              </PrivateRoute>
              <PrivateRoute path="/bookingList">
                <UserBookings />
              </PrivateRoute>
              <PrivateRoute path="/service/:_id">
                <PlaceOrder />
              </PrivateRoute>
            </Switch>
          </Router>
        </UserContext.Provider>
      </AdminContext.Provider >
    </div>

  );
}

export default App;
