import "./App.css";
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import LoadingSpinner from "./shared/LoadingSpinner/LoadingSpinner";
const Home = lazy(() => import("./shared/home/home"));
const Announce = lazy(() => import("./shared/announcement/announce"));
const Header = lazy(() => import("./shared/header/header"));
const Footer = lazy(() => import("./shared/footer/footer"));
const About = lazy(() => import("./shared/About/About"));
const Electric = lazy(() => import("./shared/Services/Electric"));
const Engine = lazy(() => import("./shared/Services/Engine"));
const OIl = lazy(() => import("./shared/Services/OIl"));
const Tyres = lazy(() => import("./shared/Services/Tyres"));
const CarRepair = lazy(() => import("./shared/Hybrids/CarRepair"));
const BatteryRepair = lazy(() => import("./shared/Hybrids/BatteryRepair"));
const Vehicle = lazy(() => import("./shared/Vehicle/Vehicle"));
const Coupons = lazy(() => import("./shared/Coupons/Coupons"));
const Appointment = lazy(() => import("./shared/Appointment/Appointment"));
const Review = lazy(() => import("./shared/Review/Review"));
const LeaveAReview = lazy(() => import("./shared/Review/LeaveAReview"));
const Directions = lazy(() => import("./shared/Directions/Directions"));
const Contact = lazy(() => import("./shared/Contact/Contact"));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <BrowserRouter>
        <Announce />
        <Header />
        <Switch>
          <Suspense fallback={<LoadingSpinner />}>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/about-us">
              <About />
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
          </Suspense>
        </Switch>
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
