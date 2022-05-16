import React from "react";

function LeaveAReview() {
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
                <meta itemprop="name" content="Write A Review" />
                <meta itemprop="position" content="2" />
                <a
                  itemprop="item"
                  title="Write A Review"
                >
                  Write A Review
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div class="entry-content">
              <p>
                Thank you for writing a review. We value feedback from our
                customers. Your review will help us to improve our service and
                help others learn about our business.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div
            id="cphContentSuffix_ctl00"
            data-module="writeareviewform"
            class="col-xs-12 module module-writeareviewform"
          >
            <div class="row">
              <div class="col-xs-12">
                <label
                  class="label heading"
                  for="cphContentSuffix_ctl00_txtFirstName"
                >
                  Your Information
                </label>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <span class="remark">
                  The name fields are optional. If entered, your name will be
                  published.
                </span>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12 col-sm-6">
                <input
                  name="ctl00$cphContentSuffix$ctl00$txtFirstName"
                  type="text"
                  maxlength="30"
                  id="cphContentSuffix_ctl00_txtFirstName"
                  title="Please enter your First Name"
                  class="input"
                  placeholder="First Name"
                />
              </div>
              <div class="col-xs-12 col-sm-6">
                <input
                  name="ctl00$cphContentSuffix$ctl00$txtLastName"
                  type="text"
                  maxlength="30"
                  id="cphContentSuffix_ctl00_txtLastName"
                  title="Please enter your Last Name"
                  class="input"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <span class="remark">
                  The email field is required but won't be published.
                </span>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12 col-sm-6">
                <input
                  name="ctl00$cphContentSuffix$ctl00$txtEmail"
                  type="email"
                  maxlength="40"
                  id="cphContentSuffix_ctl00_txtEmail"
                  title="Please enter your Email address"
                  class="input"
                  placeholder="Email"
                />
                <span
                  data-val-controltovalidate="cphContentSuffix_ctl00_txtEmail"
                  data-val-errormessage="Please enter your <b>Email</b> address."
                  data-val-display="Dynamic"
                  data-val-validationgroup="vg_cphContentSuffix_ctl00"
                  id="cphContentSuffix_ctl00_rvEmail"
                  class="validator"
                  data-val="true"
                  data-val-evaluationfunction="CustomValidatorEvaluateIsValid"
                  data-val-clientvalidationfunction="Sys.Cms.Vld.ValidateRequiredField"
                  data-val-validateemptytext="true"
                  style={{ display: "none" }}
                >
                  *
                </span>
                <span
                  data-val-controltovalidate="cphContentSuffix_ctl00_txtEmail"
                  data-val-errormessage="The <b>Email</b> address you entered doesn't appear to be valid."
                  data-val-display="Dynamic"
                  data-val-validationgroup="vg_cphContentSuffix_ctl00"
                  id="cphContentSuffix_ctl00_evEmail"
                  class="validator"
                  data-val-validationexpression="^\s*\w+(?:[-+.']\w+)*@\w+(?:[-.]\w+)*\.\w+(?:[-.]\w+)*\s*$"
                  data-val="true"
                  data-val-evaluationfunction="CustomValidatorEvaluateIsValid"
                  data-val-clientvalidationfunction="Sys.Cms.Vld.ValidateEmailField"
                  style={{ display: "none" }}
                >
                  *
                </span>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <label
                  class="label heading"
                  for="cphContentSuffix_ctl00_rbtnlRating"
                >
                  Your Rating
                </label>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <span class="remark">Click stars to rate.</span>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <ul
                  id="cphContentSuffix_ctl00_rbtnlRating"
                  class="rating rating-scale rating-50"
                  data-uic-rating="cphContentSuffix_ctl00_rbtnlRating"
                >
                  <li>
                    <input
                      id="cphContentSuffix_ctl00_rbtnlRating_0"
                      type="radio"
                      name="ctl00$cphContentSuffix$ctl00$rbtnlRating"
                      value="0.0"
                    />
                    <label for="cphContentSuffix_ctl00_rbtnlRating_0">
                      0.0
                    </label>
                  </li>
                  <li>
                    <input
                      id="cphContentSuffix_ctl00_rbtnlRating_1"
                      type="radio"
                      name="ctl00$cphContentSuffix$ctl00$rbtnlRating"
                      value="0.5"
                    />
                    <label for="cphContentSuffix_ctl00_rbtnlRating_1">
                      0.5
                    </label>
                  </li>
                  <li>
                    <input
                      id="cphContentSuffix_ctl00_rbtnlRating_2"
                      type="radio"
                      name="ctl00$cphContentSuffix$ctl00$rbtnlRating"
                      value="1.0"
                    />
                    <label for="cphContentSuffix_ctl00_rbtnlRating_2">
                      1.0
                    </label>
                  </li>
                  <li>
                    <input
                      id="cphContentSuffix_ctl00_rbtnlRating_3"
                      type="radio"
                      name="ctl00$cphContentSuffix$ctl00$rbtnlRating"
                      value="1.5"
                    />
                    <label for="cphContentSuffix_ctl00_rbtnlRating_3">
                      1.5
                    </label>
                  </li>
                  <li>
                    <input
                      id="cphContentSuffix_ctl00_rbtnlRating_4"
                      type="radio"
                      name="ctl00$cphContentSuffix$ctl00$rbtnlRating"
                      value="2.0"
                    />
                    <label for="cphContentSuffix_ctl00_rbtnlRating_4">
                      2.0
                    </label>
                  </li>
                  <li>
                    <input
                      id="cphContentSuffix_ctl00_rbtnlRating_5"
                      type="radio"
                      name="ctl00$cphContentSuffix$ctl00$rbtnlRating"
                      value="2.5"
                    />
                    <label for="cphContentSuffix_ctl00_rbtnlRating_5">
                      2.5
                    </label>
                  </li>
                  <li>
                    <input
                      id="cphContentSuffix_ctl00_rbtnlRating_6"
                      type="radio"
                      name="ctl00$cphContentSuffix$ctl00$rbtnlRating"
                      value="3.0"
                    />
                    <label for="cphContentSuffix_ctl00_rbtnlRating_6">
                      3.0
                    </label>
                  </li>
                  <li>
                    <input
                      id="cphContentSuffix_ctl00_rbtnlRating_7"
                      type="radio"
                      name="ctl00$cphContentSuffix$ctl00$rbtnlRating"
                      value="3.5"
                    />
                    <label for="cphContentSuffix_ctl00_rbtnlRating_7">
                      3.5
                    </label>
                  </li>
                  <li>
                    <input
                      id="cphContentSuffix_ctl00_rbtnlRating_8"
                      type="radio"
                      name="ctl00$cphContentSuffix$ctl00$rbtnlRating"
                      value="4.0"
                    />
                    <label for="cphContentSuffix_ctl00_rbtnlRating_8">
                      4.0
                    </label>
                  </li>
                  <li>
                    <input
                      id="cphContentSuffix_ctl00_rbtnlRating_9"
                      type="radio"
                      name="ctl00$cphContentSuffix$ctl00$rbtnlRating"
                      value="4.5"
                    />
                    <label for="cphContentSuffix_ctl00_rbtnlRating_9">
                      4.5
                    </label>
                  </li>
                  <li>
                    <input
                      id="cphContentSuffix_ctl00_rbtnlRating_10"
                      type="radio"
                      name="ctl00$cphContentSuffix$ctl00$rbtnlRating"
                      value="5.0"
                      checked="checked"
                      class="uic-selected"
                    />
                    <label
                      for="cphContentSuffix_ctl00_rbtnlRating_10"
                      class="uic-selected selected"
                    >
                      5.0
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <label
                  class="label heading"
                  for="cphContentSuffix_ctl00_txtReview"
                >
                  Your Review
                </label>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <textarea
                  name="ctl00$cphContentSuffix$ctl00$txtReview"
                  rows="2"
                  cols="20"
                  id="cphContentSuffix_ctl00_txtReview"
                  title="Please enter your Review"
                  class="textarea"
                  placeholder="Your text here ..."
                ></textarea>
                <span
                  data-val-controltovalidate="cphContentSuffix_ctl00_txtReview"
                  data-val-errormessage="Please enter your <b>Review</b>."
                  data-val-display="Dynamic"
                  data-val-validationgroup="vg_cphContentSuffix_ctl00"
                  id="cphContentSuffix_ctl00_rfvReview"
                  class="validator"
                  data-val="true"
                  data-val-evaluationfunction="CustomValidatorEvaluateIsValid"
                  data-val-clientvalidationfunction="Sys.Cms.Vld.ValidateRequiredField"
                  data-val-validateemptytext="true"
                  style={{ display: "none" }}
                >
                  *
                </span>
                <span
                  data-val-controltovalidate="cphContentSuffix_ctl00_txtReview"
                  data-val-errormessage="Please don't write URL addresses in the <b>Review</b> field."
                  data-val-display="Dynamic"
                  data-val-validationgroup="vg_cphContentSuffix_ctl00"
                  id="cphContentSuffix_ctl00_auvReview"
                  class="validator"
                  data-val="true"
                  data-val-evaluationfunction="RegularExpressionValidatorEvaluateIsValid"
                  data-val-validationexpression="^(?!(.|\n)*?[hH][tT][tT][pP][sS]?:|(.|\n)*?[wW]{3,3}\.\w+\.\w+)(.|\n)*"
                  style={{ display: "none" }}
                >
                  *
                </span>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <label
                  class="label heading"
                  for="cphContentSuffix_ctl00_txtPersonalReview"
                >
                  Personal Review
                </label>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <span class="remark">
                  The personal review field is optional and it won't be
                  published.
                </span>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <textarea
                  name="ctl00$cphContentSuffix$ctl00$txtPersonalReview"
                  rows="2"
                  cols="20"
                  id="cphContentSuffix_ctl00_txtPersonalReview"
                  title="Please enter your Personal Review"
                  class="textarea"
                  placeholder="Your text here ..."
                ></textarea>
                <span
                  data-val-controltovalidate="cphContentSuffix_ctl00_txtPersonalReview"
                  data-val-errormessage="Please don't write URL addresses in the <b>Personal Review</b> field."
                  data-val-display="Dynamic"
                  data-val-validationgroup="vg_cphContentSuffix_ctl00"
                  id="cphContentSuffix_ctl00_auvPersonalReview"
                  class="validator"
                  data-val="true"
                  data-val-evaluationfunction="RegularExpressionValidatorEvaluateIsValid"
                  data-val-validationexpression="^(?!(.|\n)*?[hH][tT][tT][pP][sS]?:|(.|\n)*?[wW]{3,3}\.\w+\.\w+)(.|\n)*"
                  style={{ display: "none" }}
                >
                  *
                </span>
              </div>
            </div>
            <div class="row">
              <div
                id="cphContentSuffix_ctl00_UpdatePanelResponse"
                class="col-xs-12"
              >
                <div
                  id="cphContentSuffix_ctl00_ctl02"
                  style={{ display: "none" }}
                  role="status"
                  aria-hidden="true"
                >
                  <div class="preloader">Submitting request ...</div>
                </div>
                <div class="row">
                  <div class="col-xs-12">
                    <div
                      data-val-validationgroup="vg_cphContentSuffix_ctl00"
                      id="cphContentSuffix_ctl00_vsResponse"
                      class="textbox"
                      data-valsummary="true"
                      style={{ display: "none" }}
                    ></div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-12 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">
                    <input
                      type="submit"
                      name="ctl00$cphContentSuffix$ctl00$btnSubmit"
                      value="Submit"
                      id="cphContentSuffix_ctl00_btnSubmit"
                      title="Submit"
                      class="btn btn-submit"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeaveAReview;
