import React from "react";
import "./coupons.css";
function Coupons() {
  return (
    <div className="coupon-height">
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
                <a
                  itemprop="item"
                  title="Specials"
                >
                  Specials
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container pb-5">
        <div class="row">
          <div
            data-module="couponslist"
            class="col-xs-12 module module-couponslist"
          >
            <p class="textbox error">No specials available at this time.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coupons;
