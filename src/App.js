import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './Components/Services/Services';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import SingIn from './Components/SingIn/SingIn';
import SingUp from './Components/SingUp/SingUp';
import OtherServices from './Components/OtherServices/OtherServices';
import Contact from './Components/Contact/Contact';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Details from './Components/Details/Details';
import AuthProvider from './Components/Context/AuthProvider';
import MyOrder from './Components/MyOrder/MyOrder';
import ManageOrder from './Components/ManageOrder/ManageOrder';
import AddEvent from './Components/AddEvent/AddEvent';
import Order from './Components/Order/Order';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <>
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
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/otherservices">
              <OtherServices></OtherServices>
            </Route>
            <PrivateRoute path="/details/:id" >
              <Details></Details>
            </PrivateRoute>
            <Route path="/about" >
              <About></About>
            </Route>
            <PrivateRoute path="/addevent" >
              <AddEvent></AddEvent>
            </PrivateRoute>
            <Route path="/myorder" >
              <MyOrder></MyOrder>
            </Route>
            <Route path="/manageorder" >
              <ManageOrder></ManageOrder>
            </Route>
            <Route path="/order" >
              <Order></Order>
            </Route>
            <Route path="/contact" >
              <Contact></Contact>
            </Route>
            <Route path="/singin" >
              <SingIn></SingIn>
            </Route>
            <Route path="/singup" >
              <SingUp></SingUp>
            </Route>
            <Route path="*" >
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>

        </Router>

      </AuthProvider>
    </>
  );
}

export default App;
