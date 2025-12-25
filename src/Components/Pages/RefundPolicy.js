import React from "react";
import BreadCrumbs from "./MiscAndCommon/BreadCrumbs";
import { Helmet } from "react-helmet";
import {
  refundDesc,
  refundTitle,
  websiteName,
} from "../GlobalData/GlobalMetaData";

const RefundPolicy = () => {
  return (
    <div>
      <Helmet>
        <title>{refundTitle}</title>
        <meta name="description" content={refundDesc} />
      </Helmet>
      <section className="sitemap section-padding mt-10 mb-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12 col-lg-12">
              <div className="section-title why_title border-bottom">
                <h1>Refund Policy</h1>
                <BreadCrumbs />
              </div>
              <p className="mt-3">
                {websiteName} understands that travel plans can be unpredictable, and we want to assure you that our refund policy is designed with flexibility and accuracy in mind.
              </p>
            </div>
            <div className="col-md-12 col-12 col-lg-12 mt-3">
              <p>
                <b>Considerations to Cancellation :</b>
              </p>
              <ul className="ul_padding_remove">
                <li>
                If you need to cancel within the first 24 hours of booking, please reach out to our helpline number.
                </li>
              </ul>
            </div>
            <div className="col-md-12 col-12 col-lg-12 mt-2">
              <p>
                <b>Flight Changes:</b>
              </p>
              <ul className="ul_padding_remove">
                <li>
                  Changes to your flight details may incur additional fees as
                  determined by the specific airline.
                </li>
                {/* <li>
                  Please be aware that {websiteName} service fees are
                  non-refundable.
                </li> */}
              </ul>
            </div>
            <div className="col-md-12 col-12 col-lg-12 mt-2">
              <p>
                <b>Refund Request Process:</b>
              </p>
              <ul className="ul_padding_remove">
                <li>
                  To initiate a refund, you can easily submit your request
                  through our dedicated customer support portal or helpline.
                </li>
              </ul>
            </div>
            <div className="col-md-12 col-12 col-lg-12 mt-2">
              <p>
                <b>Airline Policy Compliance:</b>
              </p>
              <ul className="ul_padding_remove">
                <li>
                Non-refundable tickets follow the terms and conditions outlined by the respective airline.
                </li>
                {/* <li>
                  Non-refundable tickets follow the terms and conditions
                  outlined by the respective airline.
                </li> */}
              </ul>
            </div>
            <div className="col-md-12 col-12 col-lg-12 mt-2">
              {/* <p>
                <b>Exceptional Circumstances:</b>
              </p>
              <p>
                In cases of airline-initiated cancellations or unforeseen
                circumstances, we are committed to facilitating refunds or
                providing alternative arrangements. Our 24/7 customer support
                team is always ready to assist with any inquiries related to
                refunds.
              </p> */}
              <p>
              At {websiteName}, we do strive to render the best travel experiences to our customers in the best way possible. If you wish to know more about our refund policy, makes sure to get in touch with our helpline number for any assistance. Our team is here to assist you all in the best way. 
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RefundPolicy;
