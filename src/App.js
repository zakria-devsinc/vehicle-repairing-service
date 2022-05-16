import './App.css';
import Home from './shared/home/home';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Announce from './shared/announcement/announce';
import Header from './shared/header/header';
import Footer from './shared/footer/footer';
import About from './shared/About/About';
import Electric from './shared/Services/Electric';
import Engine from './shared/Services/Engine';
import OIl from './shared/Services/OIl';
import Tyres from './shared/Services/Tyres';
import CarRepair from './shared/Hybrids/CarRepair';
import BatteryRepair from './shared/Hybrids/BatteryRepair';
import Vehicle from './shared/Vehicle/Vehicle';
import Coupons from './shared/Coupons/Coupons';
import Appointment from './shared/Appointment/Appointment';
import Review from './shared/Review/Review';
import LeaveAReview from './shared/Review/LeaveAReview';
import Directions from './shared/Directions/Directions';
import Contact from './shared/Contact/Contact';
function App() {
  return (
    <BrowserRouter>
      <Announce />
      <Header />
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/about-us">
          <About />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/services">
          <Electric />
        </Route>
        <Route exact path="/services/engine">
          <Engine />
        </Route>
        <Route exact path="/services/oil">
          <OIl />
        </Route>
        <Route exact path="/services/tyres">
          <Tyres />
        </Route>
        <Route exact path="/hybrid">
          <CarRepair />
        </Route>
        <Route exact path="/hybrid/battery">
          <BatteryRepair />
        </Route>
        <Route exact path="/vehicles">
          <Vehicle />
        </Route>
        <Route exact path="/coupons">
          <Coupons />
        </Route>
        <Route exact path="/appointments">
          <Appointment />
        </Route>
        <Route exact path="/reviews">
          <Review />
        </Route>
        <Route exact path="/reviews/leave">
          <LeaveAReview />
        </Route>
        <Route exact path="/directions">
          <Directions />
        </Route>
        <Route exact path="/contactus">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
