import React from "react";

function Appointment() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <ul className="breadcrumbs" itemscope="itemscope">
              <li itemscope="" itemprop="itemListElement">
                <a itemprop="item" title="Home">
                  Home
                </a>
              </li>
              <li itemprop="itemListElement">
                <a itemprop="item" title="Appointments">
                  Appointments
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 module module-appointmentsform">
            <div className="row">
              <div className="col-xs-12">
                <label className="label heading">Personal Information</label>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-5 col-lg-4">
                <input
                  name="ctl00$cphContentSuffix$ctl01$txtFirstName"
                  type="text"
                  maxlength="30"
                  title="Please enter your First Name"
                  className="input"
                  placeholder="First Name"
                />
                <span style={{ display: "none" }}>*</span>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-5 col-lg-4">
                <input
                  name="ctl00$cphContentSuffix$ctl01$txtLastName"
                  type="text"
                  maxlength="30"
                  title="Please enter your Last Name"
                  className="input"
                  placeholder="Last Name"
                />
                <span style={{ display: "none" }}>*</span>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-5 col-lg-4">
                <input
                  name="ctl00$cphContentSuffix$ctl01$txtEmail"
                  type="email"
                  maxlength="40"
                  title="Please enter your Email address"
                  className="input"
                  placeholder="Email"
                />
                <span style={{ display: "none" }}>*</span>
                <span style={{ display: "none" }}>*</span>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-5 col-lg-4">
                <input
                  name="ctl00$cphContentSuffix$ctl01$txtPhone"
                  type="tel"
                  maxlength="15"
                  title="Please enter your Phone number"
                  className="input"
                  placeholder="Phone"
                />
                <span style={{ display: "none" }}>*</span>
                <span style={{ display: "none" }}>*</span>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <label className="label heading">Vehicle Information</label>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <div style={{ display: "none" }}>
                  <div className="preloader">Loading ...</div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-6 col-md-4">
                    <select
                      name="ctl00$cphContentSuffix$ctl01$ddlVehicleMake"
                      title="Please select your Vehicle Make"
                      className="select"
                    >
                      <option selected="selected" value="">
                        Make
                      </option>
                      <option value="1">ACURA</option>
                      <option value="3">AUDI</option>
                      <option value="8">BMW</option>
                      <option value="7">BUICK</option>
                      <option value="9">CADILLAC</option>
                      <option value="11">CHEVROLET</option>
                      <option value="10">CHRYSLER</option>
                      <option value="13">DAEWOO</option>
                      <option value="12">DODGE</option>
                      <option value="16">EAGLE</option>
                      <option value="17">FORD</option>
                      <option value="20">GEO</option>
                      <option value="68">GMC</option>
                      <option value="21">HONDA</option>
                      <option value="90">HUMMER</option>
                      <option value="22">HYUNDAI</option>
                      <option value="24">INFINITI</option>
                      <option value="25">ISUZU</option>
                      <option value="26">JEEP</option>
                      <option value="28">KIA</option>
                      <option value="32">LEXUS</option>
                      <option value="30">LINCOLN</option>
                      <option value="33">MAZDA</option>
                      <option value="69">MERCEDES-BENZ</option>
                      <option value="38">MERCURY</option>
                      <option value="36">MINI</option>
                      <option value="35">MITSUBISHI</option>
                      <option value="70">NISSAN</option>
                      <option value="44">PLYMOUTH</option>
                      <option value="42">PONTIAC</option>
                      <option value="49">SAAB</option>
                      <option value="52">SATURN</option>
                      <option value="53">SCION</option>
                      <option value="55">SUBARU</option>
                      <option value="51">SUZUKI</option>
                      <option value="56">TOYOTA</option>
                      <option value="63">VOLKSWAGEN</option>
                      <option value="62">VOLVO</option>
                    </select>
                    <span style={{ display: "none" }}>*</span>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-4">
                    <div style={{ display: "none" }}>
                      <div className="preloader">Loading ...</div>
                    </div>
                    <select
                      name="ctl00$cphContentSuffix$ctl01$ddlVehicleModel"
                      disabled="disabled"
                      title="Please select your Vehicle Model"
                      className="disabled select"
                    >
                      <option selected="selected" value="">
                        Model
                      </option>
                    </select>
                    <span style={{ display: "none" }}>*</span>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-4">
                    <div style={{ display: "none" }}>
                      <div className="preloader">Loading ...</div>
                    </div>
                    <select
                      name="ctl00$cphContentSuffix$ctl01$ddlVehicleYear"
                      disabled="disabled"
                      title="Please select your Vehicle Year"
                      className="disabled select"
                    >
                      <option selected="selected" value="">
                        Year
                      </option>
                    </select>
                    <span style={{ display: "none" }}>*</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12">
                    <span
                      className="checkbox"
                      title="Please mark this field if you can't find your vehicle int he form above"
                    >
                      <input
                        type="checkbox"
                        name="ctl00$cphContentSuffix$ctl01$chbVehicleUndefined"
                      />
                      <label>My vehicle is not listed in the form above.</label>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <label className="label heading">
                  Please Tell Us Your Reason for Scheduling an Appointment
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <textarea
                  name="ctl00$cphContentSuffix$ctl01$txtReason"
                  rows="2"
                  cols="20"
                  title="Please enter the Reasons for the appointment"
                  className="textarea"
                  placeholder=""
                ></textarea>
                <span style={{ display: "none" }}>*</span>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <label className="label heading">Choose Date and Time </label>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-9 col-md-6">
                <div className="row">
                  <div className="col-xs-12">
                    <label className="label">First Choice</label>
                  </div>
                </div>
                <div className="row wrap-timecontrols">
                  <div className="col-xs-7 col-md-7 col-lg-6">
                    <input
                      name="ctl00$cphContentSuffix$ctl01$txtFirstDate"
                      type="text"
                      maxlength="10"
                      title="Please select a Date for the appointment"
                      className="input input-datepicker"
                      placeholder="MM/DD/YYYY"
                    />
                    <span
                      className="btn btn-datepicker"
                      title="Open calendar"
                      style={{ display: "none" }}
                    >
                      *
                    </span>
                    <span style={{ display: "none" }}>*</span>
                  </div>
                  <div className="col-xs-5 col-md-5 col-lg-4">
                    <select
                      name="ctl00$cphContentSuffix$ctl01$ddlFirstTime"
                      title="Please select a Time for the appointment"
                      className="select select-timelistpicker"
                    >
                      <option value="">HH:MM</option>
                      <option value="07:00">07:00 AM</option>
                      <option value="07:15">07:15 AM</option>
                      <option value="07:30">07:30 AM</option>
                      <option value="07:45">07:45 AM</option>
                      <option value="08:00">08:00 AM</option>
                      <option value="08:15">08:15 AM</option>
                      <option value="08:30">08:30 AM</option>
                      <option value="08:45">08:45 AM</option>
                      <option value="09:00">09:00 AM</option>
                      <option value="09:15">09:15 AM</option>
                      <option value="09:30">09:30 AM</option>
                      <option value="09:45">09:45 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="10:15">10:15 AM</option>
                      <option value="10:30">10:30 AM</option>
                      <option value="10:45">10:45 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="11:15">11:15 AM</option>
                      <option value="11:30">11:30 AM</option>
                      <option value="11:45">11:45 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="12:15">12:15 PM</option>
                      <option value="12:30">12:30 PM</option>
                      <option value="12:45">12:45 PM</option>
                      <option value="13:00">01:00 PM</option>
                      <option value="13:15">01:15 PM</option>
                      <option value="13:30">01:30 PM</option>
                      <option value="13:45">01:45 PM</option>
                      <option value="14:00">02:00 PM</option>
                      <option value="14:15">02:15 PM</option>
                      <option value="14:30">02:30 PM</option>
                      <option value="14:45">02:45 PM</option>
                      <option value="15:00">03:00 PM</option>
                      <option value="15:15">03:15 PM</option>
                      <option value="15:30">03:30 PM</option>
                      <option value="15:45">03:45 PM</option>
                      <option value="16:00">04:00 PM</option>
                      <option value="16:15">04:15 PM</option>
                      <option value="16:30">04:30 PM</option>
                      <option value="16:45">04:45 PM</option>
                      <option value="17:00">05:00 PM</option>
                    </select>
                    <span style={{ display: "none" }}>*</span>
                    <span style={{ display: "none" }}>*</span>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-9 col-md-6">
                <div className="row">
                  <div className="col-xs-12 col-md-11 col-lg-11">
                    <label className="label">Second Choice (optional)</label>
                  </div>
                </div>
                <div className="row wrap-timecontrols">
                  <div className="col-xs-7 col-md-7 col-lg-6">
                    <input
                      name="ctl00$cphContentSuffix$ctl01$txtSecondDate"
                      type="text"
                      maxlength="10"
                      title="Please select Date for alternative appointment"
                      className="input input-datepicker"
                      placeholder="MM/DD/YYYY"
                    />
                    <span className="btn btn-datepicker" title="Open calendar">
                      &nbsp;
                    </span>
                    <span style={{ display: "none" }}>*</span>
                  </div>
                  <div className="col-xs-5 col-md-5 col-lg-4">
                    <select
                      name="ctl00$cphContentSuffix$ctl01$ddlSecondTime"
                      title="Please select Time for alternative appointment"
                      className="select select-timelistpicker"
                    >
                      <option value="">HH:MM</option>
                      <option value="07:00">07:00 AM</option>
                      <option value="07:15">07:15 AM</option>
                      <option value="07:30">07:30 AM</option>
                      <option value="07:45">07:45 AM</option>
                      <option value="08:00">08:00 AM</option>
                      <option value="08:15">08:15 AM</option>
                      <option value="08:30">08:30 AM</option>
                      <option value="08:45">08:45 AM</option>
                      <option value="09:00">09:00 AM</option>
                      <option value="09:15">09:15 AM</option>
                      <option value="09:30">09:30 AM</option>
                      <option value="09:45">09:45 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="10:15">10:15 AM</option>
                      <option value="10:30">10:30 AM</option>
                      <option value="10:45">10:45 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="11:15">11:15 AM</option>
                      <option value="11:30">11:30 AM</option>
                      <option value="11:45">11:45 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="12:15">12:15 PM</option>
                      <option value="12:30">12:30 PM</option>
                      <option value="12:45">12:45 PM</option>
                      <option value="13:00">01:00 PM</option>
                      <option value="13:15">01:15 PM</option>
                      <option value="13:30">01:30 PM</option>
                      <option value="13:45">01:45 PM</option>
                      <option value="14:00">02:00 PM</option>
                      <option value="14:15">02:15 PM</option>
                      <option value="14:30">02:30 PM</option>
                      <option value="14:45">02:45 PM</option>
                      <option value="15:00">03:00 PM</option>
                      <option value="15:15">03:15 PM</option>
                      <option value="15:30">03:30 PM</option>
                      <option value="15:45">03:45 PM</option>
                      <option value="16:00">04:00 PM</option>
                      <option value="16:15">04:15 PM</option>
                      <option value="16:30">04:30 PM</option>
                      <option value="16:45">04:45 PM</option>
                      <option value="17:00">05:00 PM</option>
                    </select>
                    <span style={{ display: "none" }}>*</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <p className="textbox warning">
                  {" "}
                  Please note that the date and time you requested may not be
                  available.
                  <br /> We will contact you to confirm your actual appointment
                  details.{" "}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <div style={{ display: "none" }}>
                  <div className="preloader">Submitting request ...</div>
                </div>
                <div className="row">
                  <div className="col-xs-12">
                    <div className="textbox" style={{ display: "none" }}></div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">
                    <input
                      type="submit"
                      name="ctl00$cphContentSuffix$ctl01$btnSubmit"
                      value="Submit"
                      title="Submit"
                      className="btn btn-submit"
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

export default Appointment;
