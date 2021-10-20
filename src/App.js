import Home from "../src/Pages/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Pages/Home/Header/Header";
import Doctors from "./Pages/Home/Doctors/Doctors";
import ServiceDetail from "./Pages/Home/ServiceDetail/ServiceDetail";
import Login from "./Pages/Home/Login/Login/Login";
import Register from "./Pages/Home/Login/Register/Register";
import AuthProvider from "./Pages/context/AuthProvider";
import PrivateRoute from "./Pages/Home/Login/PrivateRoute/PrivateRoute";
import Footer from "./Pages/Home/Footer/Footer";
import NotFound from "../src/Pages/Home/NotFound/NotFound";
import ContactUs from "./Pages/Home/ContactUs/ContactUs";
import Services from "./Pages/Home/Services/Services";
function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <Route path="/doctors">
            <Doctors></Doctors>
          </Route>
          <Route path="/contact-us">
            <ContactUs></ContactUs>
          </Route>
          <PrivateRoute path="/services/:servicesID">
            <ServiceDetail></ServiceDetail>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
