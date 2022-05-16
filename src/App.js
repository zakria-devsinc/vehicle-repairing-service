import "./App.css";
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import LoadingSpinner from "./shared/LoadingSpinner/LoadingSpinner";
const Home = lazy(() => {
  return new Promise(resolve =>  import("./shared/home/home")).then(
    () =>
         import("./shared/home/home")
  );
});
// const Home = lazy(() => import("./shared/home/home").default);
// const Announce = lazy(() => import("./shared/announcement/announce").default);
// const Header = lazy(() => import("./shared/header/header").default);
// const Footer = lazy(() => import("./shared/footer/footer").default);
// const About = lazy(() => import("./shared/About/About").default);
// const Electric = lazy(() => import("./shared/Services/Electric").default);
// const Engine = lazy(() => import("./shared/Services/Engine").default);
// const OIl = lazy(() => import("./shared/Services/OIl").default);
// const Tyres = lazy(() => import("./shared/Services/Tyres").default);
// const CarRepair = lazy(() => import("./shared/Hybrids/CarRepair").default);
// const BatteryRepair = lazy(() => import("./shared/Hybrids/BatteryRepair").default);
// const Vehicle = lazy(() => import("./shared/Vehicle/Vehicle").default);
// const Coupons = lazy(() => import("./shared/Coupons/Coupons").default);
// const Appointment = lazy(() => import("./shared/Appointment/Appointment").default);
// const Review = lazy(() => import("./shared/Review/Review").default);
// const LeaveAReview = lazy(() => import("./shared/Review/LeaveAReview").default);
// const Directions = lazy(() => import("./shared/Directions/Directions").default);
// const Contact = lazy(() => import("./shared/Contact/Contact").default);

function App() {
  return (
    <BrowserRouter>
    {/* <Suspense fallback={<LoadingSpinner/>}>
      <Announce />
      <Header />
      </Suspense> */}
      <Switch>
        <Suspense fallback={<LoadingSpinner/>}>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          {/* <Route exact path="/about-us">
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
          </Route> */}
        </Suspense>
      </Switch>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
