import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import BookingList from "./Components/Dashboard/BookingList/BookingList";
import AddService from "./Components/Dashboard/AddService/AddService";
// import AddTeacher from "./Components/Dashboard/AddTeacher/AddTeacher";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
// import OrderList from "./Components/Dashboard/TutorBookingList/TutorBookingList";
import WriteReview from "./Components/Dashboard/WriteReview/WriteReview";
import Home from './Components/Home/Home/Home';
import MakeAdmin from "./Components/Dashboard/MakeAdmin/MakeAdmin";
import ManageService from "./Components/Dashboard/ManageService/ManageService";
import Login from "./Components/Login/Login";
import Contact from "./Components/Contact/Contact";
import AboutUs from "./Components/AboutUs/AboutUs";
import BookTutor from "./Components/Dashboard/BookTutor/BookTutor";
import { createContext, useState } from "react";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import BookedTutorList from "./Components/Dashboard/BookedTutorList/BookedTutorList";
import ManageReview from "./Components/Dashboard/ManageReview/ManageReview";
export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <div className="container">
      <Router>
        <Switch>

          <Route exact path="/">
          <Home></Home>
          </Route>

          <PrivateRoute path="/dashboard/:serviceId">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/booking">
           <BookingList> </BookingList>
          </PrivateRoute>
          <PrivateRoute path="/review">
            <WriteReview></WriteReview>
          </PrivateRoute>
    
          <Route path="/addService">
           <AddService></AddService>
          </Route>
        
          <Route path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <PrivateRoute path="/manageService">
          <ManageService></ManageService>
          </PrivateRoute>

          <Route path="/contact">
              <Contact></Contact>
          </Route>

          <Route path="/aboutUs">
          <AboutUs></AboutUs>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute path="/bookTutor">
            <BookTutor></BookTutor>
          </PrivateRoute>

          <Route path="/bookedTutorList">
            <BookedTutorList></BookedTutorList>
          </Route>

          <Route path="/manageReview">
            <ManageReview></ManageReview>
          </Route>
         
        </Switch>
      </Router>
    </div>
    </UserContext.Provider>

  );
}

export default App;
