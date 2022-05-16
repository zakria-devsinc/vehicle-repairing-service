import React from "react";

function Contact() {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <ul class="breadcrumbs" itemscope="itemscope">
              <li itemscope="" itemprop="itemListElement">
                <meta itemprop="url" />
                <meta itemprop="name" content="Home/" />
                <meta itemprop="position" content="1" />
                <a itemprop="item" title="Home">
                  Home
                </a>
              </li>
              <li itemscope="" itemprop="itemListElement">
                <meta itemprop="url" />
                <meta itemprop="name" content="Contact Us" />
                <meta itemprop="position" content="2" />
                <a itemprop="item" title="Contact Us">
                  Contact Us
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
            data-module="contactsform"
            class="col-xs-12 module module-contactsform"
          >
            <div class="row">
              <div class="col-xs-12">
                <label
                  class="label heading"
                  for="cphContentSuffix_ctl00_txtName"
                >
                  Your Information
                </label>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12 col-sm-6">
                <input
                  name="ctl00$cphContentSuffix$ctl00$txtName"
                  type="text"
                  maxlength="30"
                  id="cphContentSuffix_ctl00_txtName"
                  title="Please enter your Name"
                  class="input"
                  placeholder="Name"
                />
                <span
                  data-val-controltovalidate="cphContentSuffix_ctl00_txtName"
                  data-val-errormessage="Please enter your <b>Name</b>."
                  data-val-display="Dynamic"
                  data-val-validationgroup="vg_cphContentSuffix_ctl00"
                  id="cphContentSuffix_ctl00_rvName"
                  class="validator"
                  data-val="true"
                  data-val-evaluationfunction="CustomValidatorEvaluateIsValid"
                  data-val-clientvalidationfunction="Sys.Cms.Vld.ValidateRequiredField"
                  data-val-validateemptytext="true"
                  style={{ display: "none" }}
                >
                  *
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
              <div class="col-xs-12 col-sm-6">
                <input
                  name="ctl00$cphContentSuffix$ctl00$txtPhone"
                  type="tel"
                  maxlength="15"
                  id="cphContentSuffix_ctl00_txtPhone"
                  title="Please enter your Phone number"
                  class="input"
                  placeholder="Phone (optional)"
                />
                <span
                  data-val-controltovalidate="cphContentSuffix_ctl00_txtPhone"
                  data-val-errormessage="The <b>Phone</b> you entered doesn't appear to be valid."
                  data-val-display="Dynamic"
                  data-val-validationgroup="vg_cphContentSuffix_ctl00"
                  id="cphContentSuffix_ctl00_pvPhone"
                  class="validator"
                  data-val-validationexpression="^\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})$"
                  data-val="true"
                  data-val-evaluationfunction="CustomValidatorEvaluateIsValid"
                  data-val-clientvalidationfunction="Sys.Cms.Vld.ValidatePhoneField"
                  style={{ display: "none" }}
                >
                  *
                </span>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <input
                  name="ctl00$cphContentSuffix$ctl00$txtSubject"
                  type="text"
                  maxlength="30"
                  id="cphContentSuffix_ctl00_txtSubject"
                  title="Please enter a Subject for your message"
                  class="input"
                  placeholder="Subject"
                />
                <span
                  data-val-controltovalidate="cphContentSuffix_ctl00_txtSubject"
                  data-val-errormessage="Please enter the <b>Subject</b> of your message."
                  data-val-display="Dynamic"
                  data-val-validationgroup="vg_cphContentSuffix_ctl00"
                  id="cphContentSuffix_ctl00_rvSubject"
                  class="validator"
                  data-val="true"
                  data-val-evaluationfunction="CustomValidatorEvaluateIsValid"
                  data-val-clientvalidationfunction="Sys.Cms.Vld.ValidateRequiredField"
                  data-val-validateemptytext="true"
                  style={{ display: "none" }}
                >
                  *
                </span>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <textarea
                  name="ctl00$cphContentSuffix$ctl00$txtMessage"
                  rows="2"
                  cols="20"
                  id="cphContentSuffix_ctl00_txtMessage"
                  title="Please enter your Message"
                  class="textarea"
                  placeholder="Message"
                ></textarea>
                <span
                  data-val-controltovalidate="cphContentSuffix_ctl00_txtMessage"
                  data-val-errormessage="Please enter your <b>Message</b>."
                  data-val-display="Dynamic"
                  data-val-validationgroup="vg_cphContentSuffix_ctl00"
                  id="cphContentSuffix_ctl00_rvMessage"
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
                  data-val-controltovalidate="cphContentSuffix_ctl00_txtMessage"
                  data-val-errormessage="Please don't write URL addresses in your <b>Message</b>."
                  data-val-display="Dynamic"
                  data-val-validationgroup="vg_cphContentSuffix_ctl00"
                  id="cphContentSuffix_ctl00_auvMessage"
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
                  id="cphContentSuffix_ctl00_ctl03"
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

export default Contact;
