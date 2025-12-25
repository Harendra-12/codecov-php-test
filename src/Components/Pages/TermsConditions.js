import React from "react";
import {
  termsDesc,
  termsTitle,
  websiteName,
} from "../GlobalData/GlobalMetaData";
import BreadCrumbs from "./MiscAndCommon/BreadCrumbs";
import { Helmet } from "react-helmet";

const TermsConditions = () => {
  return (
    <div>
      <Helmet>
        <title>{termsTitle}</title>
        <meta name="description" content={termsDesc} />
      </Helmet>
      <section className="sitemap section-padding mt-10 mb-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12 col-lg-12">
              <div className="section-title why_title border-bottom">
                <h1>Terms and Conditions</h1>
                <BreadCrumbs />
              </div>
              <p className="mt-3">
              Welcome to {websiteName}, your trusted platform for convenient flight bookings. Upon choosing us, you do agree to abide by the following rules and regulations, which are as follows: 
              </p>
            </div>
            <div className="col-md-12 col-12 col-lg-12 mt-3">
              <p>
                <b>Booking Process:</b>
              </p>
              <ul className="ul_padding_remove">
                <li>
                  All bookings are subject to availability and airline
                  regulations.
                </li>
                <li>
                  {websiteName} reserves the right to refuse service or cancel
                  bookings at our discretion.
                </li>
              </ul>
            </div>
            <div className="col-md-12 col-12 col-lg-12 mt-2">
              <p>
                <b>Payment:</b>
              </p>
              <ul className="ul_padding_remove">
                <li>
                  Payments can be made using approved credit cards, debit cards,
                  or other payment methods as specified.
                </li>
                {/* <li>
                  Prices are inclusive of taxes and fees unless otherwise
                  stated.
                </li> */}
              </ul>
            </div>
            <div className="col-md-12 col-12 col-lg-12 mt-2">
              <p>
                <b>Cancellations and Changes:</b>
              </p>
              <ul className="ul_padding_remove">
                <li>
               Cancellation and change policies vary, please call us to know more.
                </li>
                {/* <li>
                  {websiteName} may charge service fees for cancellations and
                  changes.
                </li> */}
              </ul>
            </div>
            <div className="col-md-12 col-12 col-lg-12 mt-2">
              <p>
                <b>Refunds:</b>
              </p>
              <ul className="ul_padding_remove">
                <li>{websiteName} is not responsible for any losses incurred due to travel disruptions.</li>
                <li>
                  Requests for refunds must be submitted through our customer
                  support portal or helpline.
                </li>
              </ul>
            </div>
            {/* <div className="col-md-12 col-12 col-lg-12 mt-2">
              <p>
                <b>Travel Insurance:</b>
              </p>
              <ul className="ul_padding_remove">
                <li>
                  We strongly recommend purchasing travel insurance to safeguard
                  against unforeseen events.
                </li>
                <li>
                  {websiteName} is not responsible for any losses incurred due
                  to travel disruptions.
                </li>
              </ul>
            </div> */}
            <div className="col-md-12 col-12 col-lg-12 mt-2">
              <p>
                <b>Passport and Visa:</b>
              </p>
              <ul className="ul_padding_remove">
                <li>
                  It is the passenger's responsibility to ensure valid
                  passports, visas, and other travel documents.
                </li>
                <li>
                  {websiteName} is not liable for denied boarding due to
                  incomplete or expired documentation.
                </li>
              </ul>
            </div>
            {/* <div className="col-md-12 col-12 col-lg-12 mt-2">
              <p>
                <b>Liability:</b>
              </p>
              <ul className="ul_padding_remove">
                <li>
                  {websiteName} is not liable for any direct, indirect, or
                  consequential damages arising from the use of our services.
                </li>
                <li>
                  o We are not responsible for the actions or omissions of
                  airlines, hotels, or other third-party service providers.
                </li>
              </ul>
            </div> */}
            {/* <div className="col-md-12 col-12 col-lg-12 mt-2">
              <p>
                {websiteName} is not liable for disruptions or delays caused by
                unforeseen circumstances, including but not limited to natural
                disasters, strikesor government actions.
              </p>
            </div> */}
            <div className="col-md-12 col-12 col-lg-12 mt-2">
              <p>
                <b>Changes to Terms:</b>
              </p>
              <ul className="ul_padding_remove">
                <li>
                We at {websiteName} do possess the right to revise or alter any of the terms and conditions at any time and without advance notification. You accept these terms and conditions whenever you use our services.
                </li>
                <li>
                If you feel to know more about {websiteName} please feel free to get in touch with our team is that ready to make every upcoming travel adventure of yours successful and also cherishing.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;
