import React from "react";

function Directions() {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <ul
              class="breadcrumbs"
              itemscope="itemscope"
            >
              <li
                itemscope=""
                itemprop="itemListElement"
              >
                <meta
                  itemprop="url"
                />
                <meta itemprop="name" content="Home" />
                <meta itemprop="position" content="1" />
                <a
                  itemprop="item"
                  title="Home"
                >
                  Home
                </a>
              </li>
              <li
                itemscope=""
                itemprop="itemListElement"
              >
                <meta
                  itemprop="url"
                />
                <meta itemprop="name" content="Directions" />
                <meta itemprop="position" content="2" />
                <a
                  itemprop="item"
                  title="Directions"
                >
                  Directions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div
            id="cphContentSuffix_ctl00"
            data-module="directionsform"
            class="col-xs-12 module module-directionsform"
          >
            <div class="row">
              <div class="col-xs-12">
                <div class="row">
                  <div class="col-xs-12 col-sm-8 col-md-5 col-lg-5">
                    <input
                      type="text"
                      class="input"
                      placeholder="Enter your starting address"
                      data-uic-map-directionfrom="vg_cphContentSuffix_ctl00"
                    />
                    <input
                      type="hidden"
                      data-uic-map-directionto="vg_cphContentSuffix_ctl00"
                      value="Savage Automotive and Hybrid Shop"
                    />
                  </div>
                  <div class="col-xs-12 col-sm-2 col-md-2 col-lg-1">
                    <button
                      class="btn btn-routemap"
                      data-uic-map-trigger="vg_cphContentSuffix_ctl00"
                      data-uic-map-action="update"
                    >
                      Go
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-xs-12">
                <div
                  class="textbox map-vsummary uic-hidden"
                  data-uic-map-validationsummary="vg_cphContentSuffix_ctl00"
                ></div>
              </div>
              <div class="col-xs-12">
                <div class="map">
                  <div
                    class="map-canvas"
                    data-uic-map="vg_cphContentSuffix_ctl00"
                    style={{ position: "relative", overflow: "hidden" }}
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13607.242072471043!2d74.30007635!3d31.501891699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e0!4m0!4m0!5e0!3m2!1sen!2s!4v1647185404052!5m2!1sen!2s"
                      width="100%"
                      height="100%"
                      style={{ border: "0" }}
                      allowfullscreen=""
                      loading="lazy"
                      title="map"
                    ></iframe>
                  </div>
                  <div
                    class="map-directions"
                    data-uic-map-directionroutes="vg_cphContentSuffix_ctl00"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Directions;
