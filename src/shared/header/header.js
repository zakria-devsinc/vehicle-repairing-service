import React from "react";
import logo from "./../../assets/images/logo.jpg";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-lg-3 header-logo-container">
            <Link
              to="/"
              title="Savage Automotive and Hybrid Shop"
              className="header-logo"
            >
              <img src={logo} alt="Savage Automotive and Hybrid Shop" />
            </Link>
          </div>
          <div className="col-xs-12 col-md-4 col-lg-3 header-reviews-rating">
            <h1 className="header-keywords"> Philadelphia Auto Repair </h1>
            <div
              itemscope="itemscope"
              className="header-review-info"
            >
              <meta itemprop="votes" content="374" />
              <meta itemprop="rating" content="4.91978609625668" />
              <Link to="/reviews" title="See all reviews">
                {" "}
                based on 374 reviews{" "}
              </Link>
            </div>
          </div>
          <div className="col-xs-12 col-md-4 col-lg-3 header-locations-wrapper">
            <div
              itemscope="itemscope"
              className="header-location-info"
            >
              <meta itemprop="streetAddress" content="9101 Ashton Rd." />
              <meta itemprop="addressLocality" content="Philadelphia" />
              <meta itemprop="addressRegion" content="PA" />
              <meta itemprop="postalCode" content="19114" />
              <meta itemprop="telephone" content="+1 (215) 268-6918" />
              <span className="header-phone-text">Call Us:</span>
              <Link
                title="Call Savage Automotive and Hybrid Shop"
              >
                <strong className="header-phone-link">(215) 268-6918</strong>
              </Link>
              <div className="header-worktime">
                {" "}
                Mon - Fri: 7:00 AM - 5:00 PM{" "}
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-4 col-lg-3 btn-wrapper">
            <Link to="/appointments" title="Visit page" className="btn">
              Schedule an Appointment
            </Link>
          </div>
        </div>
      </div>
      <div className="nav-section">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <button
                className="nav-trigger"
                type="button"
                title="Toggle navigation."
                data-uic-navigation-trigger="header"
              >
                <span className="icon"></span>
              </button>
              <div data-uic-navigation="header" className="nav nav-hidden">
                <ul className="static" role="menubar">
                  <li className="static selected current" role="menuitem">
                    <Link to="/" title="Home" className="selected current">
                      Home
                    </Link>
                  </li>
                  <li className="static has-dynamic" role="menuitem">
                    <Link to="/about-us" title="About Us">
                      About Us
                    </Link>
                    <ul className="dynamic">
                      <li className="dynamic" role="menuitem">
                        <Link href="/news" title="News">
                          News
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="static has-dynamic" role="menuitem">
                    <Link to="/services" title="Services">
                      Services
                    </Link>
                    <ul className="dynamic">
                      <li className="dynamic" role="menuitem">
                        <Link to="/services" title="Electric Car Repair">
                          Electric Car Repair
                        </Link>
                      </li>
                      <li className="dynamic" role="menuitem">
                        <Link to="/services/engine" title="Check Engine Light">
                          Check Engine Light
                        </Link>
                      </li>
                      <li className="dynamic" role="menuitem">
                        <Link
                          to="/services/tyres"
                          title="Low Rolling Resistance Tires"
                        >
                          Low Rolling Resistance Tires
                        </Link>
                      </li>
                      <li className="dynamic" role="menuitem">
                        <Link to="/services/oil" title="Oil Change">
                          Oil Change
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="static has-dynamic" role="menuitem">
                    <Link to="/hybrid" title="">
                      Hybrids
                    </Link>
                    <ul className="dynamic">
                      <li className="dynamic" role="menuitem">
                        <Link to="/hybrid" title="Hybrid Car Repair">
                          Hybrid Car Repair
                        </Link>
                      </li>
                      <li className="dynamic" role="menuitem">
                        <Link
                          to="/hybrid/battery"
                          title="Hybrid Battery Conditioning"
                        >
                          Hybrid Battery Conditioning
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="static" role="menuitem">
                    <Link to="/vehicles" title="Vehicles">
                      Vehicles
                    </Link>
                  </li>
                  <li className="static" role="menuitem">
                    <Link to="/coupons" title="Specials">
                      Coupons
                    </Link>
                  </li>
                  <li className="static" role="menuitem">
                    <Link to="/appointments" title="Appointments">
                      Appointments
                    </Link>
                  </li>
                  <li className="static" role="menuitem">
                    <Link to="/reviews" title="Reviews">
                      Reviews
                    </Link>
                  </li>
                  <li className="static" role="menuitem">
                    <Link to="/directions" title="Directions">
                      Directions
                    </Link>
                  </li>
                  <li className="static" role="menuitem">
                    <Link to="/contactus" title="Contact Us">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
