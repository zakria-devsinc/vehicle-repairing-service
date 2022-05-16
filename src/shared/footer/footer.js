import React from "react";
import logo from "./../../assets/images/logo.jpg";
function Footer() {
  return (
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-lg-3 footer-logo-container">
            <a
              title="Savage Automotive and Hybrid Shop"
              class="footer-logo"
            >
              <img
                src={logo}
                class=""
                alt="Savage Automotive and Hybrid Shop"
              />
            </a>
          </div>
          <div class="col-xs-12 col-lg-9">
            <div class="row location">
              <div class="col-xs-12 col-md-4 footer-phone-wrapper">
                <span>Call Us:</span>
                <a
                  title="Call Savage Automotive and Hybrid Shop"
                  class="phone"
                >
                  <strong>(215) 268-6918</strong>
                </a>
                <div class="footer-wh-wrapper">
                  <span class="footer-wh">Mon - Fri: 7:00 AM - 5:00 PM</span>
                </div>
              </div>
              <div class="col-xs-12 col-md-4 footer-address-wrapper">
                <span class="title">Our Address:</span>
                <a
                  title="Get directions"
                  class="address"
                >
                  <span>9101 Ashton Rd.</span> ,{" "}
                  <span>Philadelphia, PA 19114</span>
                </a>
              </div>
              <div class="col-xs-12 col-md-4 direction-box">
                <input
                  type="text"
                  class="input"
                  placeholder="Enter Your Location"
                  data-uic-map-directionfrom="preview"
                />
                <a
                  data-uic-map-trigger="preview"
                  data-uic-map-action="redirect"
                  title="Visit page"
                  class="btn btn-getdirections"
                >
                  {" "}
                  GO!{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-disclaimers">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-6">
              <div
                itemprop="address"
                itemscope=""
                itemtype="http://schema.org/PostalAddress"
                class="nap"
              >
                {" "}
                9101 Ashton Rd. Philadelphia, PA 19114 (215) 333-8444{" "}
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 footer-photocredits-container">
              <div
                id="cphFooter_ctl03"
                hidden="hidden"
                data-lightbox-window="cphFooter_ctl03"
                data-lightbox-template="default"
                class="mod-lightbox"
              >
                <ul class="photocredits-list">
                  <li>
                    <a
                      class="photo"
                      rel="follow noopener"
                    >
                      Precision Bumper Insert on Silverado
                    </a>{" "}
                    by{" "}
                    <a
                      class="owner"
                      rel="follow noopener"
                    >
                      Truck Hardware
                    </a>{" "}
                    /{" "}
                    <a
                      class="license"
                      rel="follow noopener"
                    >
                      CC BY 2.0
                    </a>{" "}
                    website -{" "}
                    <a
                      class="website"
                      rel="follow noopener"
                    >
                      Flickr.com
                    </a>
                  </li>
                  <li>
                    <a
                      class="photo"
                      rel="follow noopener"
                    >
                      Lexus RX 2016
                    </a>{" "}
                    by{" "}
                    <a
                      class="owner"
                      rel="follow noopener"
                    >
                      Kārlis Dambrāns
                    </a>{" "}
                    /{" "}
                    <a
                      class="license"
                      rel="follow noopener"
                    >
                      CC BY 2.0
                    </a>{" "}
                    website -{" "}
                    <a
                      class="website"
                      rel="follow noopener"
                    >
                      Flickr.com
                    </a>
                  </li>
                  <li>
                    <a
                      class="photo"
                      rel="follow noopener"
                    >
                      Toyota Prius 2016
                    </a>{" "}
                    by{" "}
                    <a
                      class="owner"
                      rel="follow noopener"
                    >
                      Kārlis Dambrāns
                    </a>{" "}
                    /{" "}
                    <a
                      class="license"
                      rel="follow noopener"
                    >
                      CC BY 2.0
                    </a>{" "}
                    website -{" "}
                    <a
                      class="website"
                      rel="follow noopener"
                    >
                      Flickr.com
                    </a>
                  </li>
                  <li>
                    <a
                      class="photo"
                      rel="follow noopener"
                    >
                      Schuylkill Banks
                    </a>{" "}
                    by{" "}
                    <a
                      class="owner"
                      rel="follow noopener"
                    >
                      Montgomery County Planning Commission
                    </a>{" "}
                    /{" "}
                    <a
                      class="license"
                      rel="follow noopener"
                    >
                      CC BY-SA 2.0
                    </a>{" "}
                    website -{" "}
                    <a
                      class="website"
                      rel="follow noopener"
                    >
                      Flickr.com
                    </a>
                  </li>
                  <li>
                    <a
                      class="photo"
                      rel="follow noopener"
                    >
                      Go Further - All-New Ford Mondeo (UK)
                    </a>{" "}
                    by{" "}
                    <a
                      class="owner"
                      rel="follow noopener"
                    >
                      Jason Cartwright
                    </a>{" "}
                    /{" "}
                    <a
                      class="license"
                      rel="follow noopener"
                    >
                      CC BY 2.0
                    </a>{" "}
                    website -{" "}
                    <a
                      class="website"
                      rel="follow noopener"
                    >
                      Flickr.com
                    </a>
                  </li>
                </ul>
              </div>
              <a
                title="Photo credits"
                data-lightbox-open="cphFooter_ctl03"
                class="link link-photocredits"
              >
                Image Credits
              </a>
              <a
                class="link link-webmaster"
                target="_blank"
                rel="nofollow noopener"
                title="Website by Kukui"
              >
                Website by <span>kukui</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
