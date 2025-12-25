import React from "react";
import BreadCrumbs from "./MiscAndCommon/BreadCrumbs";
import {
  privacyDesc,
  privacyTitle,
  websiteName,
} from "../GlobalData/GlobalMetaData";
import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {
  return (
    <div>
      <Helmet>
        <title>{privacyTitle}</title>
        <meta name="description" content={privacyDesc} />
      </Helmet>
      <section className="sitemap section-padding mt-10 mb-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12 col-lg-12">
              <div className="section-title why_title border-bottom">
                <h1>Privacy Policy</h1>
                <BreadCrumbs />
              </div>
              <p className="mt-3">
              Hello from {websiteName} !Wethe team of {websiteName} is dedicated to preserving your privacy. As you trust us, we appreciate your dependence. When you use our flight booking services, your personal information is collected, used, and disclosed in accordance with our privacy policies, which are described in this document.
              </p>
            </div>
            <div className="col-md-12 col-12 col-lg-12 mt-3">
              <p>
                <b>1. Data That We Gather</b>
              </p>
              <p>
                <strong>Personal Data: </strong>
                We may gather personal data, including your name, contact information, and payment details, when you book flights on {websiteName}. This data is required to process your reservations and guarantee a convenient travel experience.
              </p>
              <p>
                <strong>Log Data: </strong>
                When you visit {websiteName} your browser sends information to us automatically, just like it does to many other websites. This could include the Internet Protocol (IP) address of your computer, the kind and version of your browser, the pages you visit on our website, the time and date of your visit, and other statistics.
              </p>
              {/* <p>
                It's crucial to note that adherence to our data collection
                principles is contingent upon your voluntary agreement with
                these policies.
              </p> */}
            </div>
            <div className="col-md-12 col-12 col-lg-12 mt-3">
              <p>
                <b>2. How We Use Your Information:</b>
              </p>
              <p>
                <strong>Flight Reservations:  </strong>
                The main purpose of your personal data is to help you make reservations for flights. These covers taking payments, confirming reservations, and giving you pertinent travel details.
              </p>
              <p>
                <strong>Communication:</strong>
                We might get in touch with you regarding {websiteName} related bookings, updates, and promotions using your contact information. At any time, you have the right to stop getting our promotional emails.
              </p>
              <p>
                <strong>Enhancing Services: </strong>
                We use data analysis to improve user experience overall, customize our website based on user preferences, and improve our services.
              </p>
            </div>
            <div className="col-md-12 col-12 col-lg-12 mt-3">
              <p>
                <b>3. Information Sharing: </b>
              </p>
              <p>
                <strong>Third-Party Service Providers: </strong>
                To make flight reservations, handle payments, and enhance our services, we might disclose your personal information to third-party service providers. Though the service providers are not given permission to utilize your personal information anywhere because they are bound to confidentiality agreements.
              </p>
              <p>
                <strong>Legal Compliance: </strong>
                If required by law or in response to legitimate requests from public authorities (such as a court or government agency), we may divulge your personal information.
              </p>
            </div>
            <div className="col-md-12 col-12 col-lg-12 mt-3">
              <p>
                <b>4. Data Security: </b>
              </p>
              <p>
              We at {websiteName} are dedicated to safeguard the confidentiality of your personal data. We protect your data against unauthorized access, disclosure, alteration, and destruction by putting in place industry-standard security measures.
              </p>
              <p>
              No method of transmission over the internet or electronic storage is 100% secure, despite our best efforts. Therefore, even though we work hard to safeguard your personal information using methods that are acceptable to businesses, we are unable to guarantee its complete security.
              </p>
              <p>
              You consent to information collection and use in line with this privacy policy when you use {websiteName}. Periodically, we might update this policy; any updates will be reflected on this page. It is your duty to regularly check this Privacy Policy for updates.
              </p>
            </div>
            {/* <div className="col-md-12 col-12 col-lg-12 mt-4">
              <p>
                <b>Storage and Confidentiality</b>
              </p>
              <p>
                We retain personal information only for the duration we deem
                necessary, depending on the reasons for data collection and any
                extended legal requirements. Access to your personal information
                is crucial for handling travel reservations and bookings,
                facilitating communication about booking details, issuing
                confirmations, and updating or altering your itinerary.
              </p>
            </div>
            <div className="col-md-12 col-12 col-lg-12 mt-4">
              <p>
                <b>Optional Input</b>
              </p>
              <p>
                During the registration process, customers have the option to
                skip providing specific information they consider sensitive.
                It's important to be aware that skipping certain information may
                result in less effective optimization of the site's search
                options.
              </p>
            </div>
            <div className="col-md-12 col-12 col-lg-12 mt-4">
              <p>
                <b>Privacy Rights and Choices</b>
              </p>
              <p>
                User information and marketing preferences stored in your{" "}
                {websiteName} account is managed solely by you, the user.
              </p>
            </div>
            <div className="col-md-12 col-12 col-lg-12 mt-4">
              <p>
                <b>Changes to Policy</b>
              </p>
              <p>
                The policies outlined here are subject to periodic updates,
                including additions or withdrawals. Visit this page frequently
                to stay updated on our policy.
              </p>
            </div>
            <div className="col-md-12 col-12 col-lg-12 mt-4">
              <p>
                <b>Contact Information</b>
              </p>
              <p>
                {websiteName} maintains a customer-centric desk to address any
                queries, doubts, or functional issues. Feel free to reach out to
                us at our helpline number.
              </p>
            </div> */}
            <div className="mt-2">
              <p>
                <b>
                Please do not hesitate to contact us with any queries or worries regarding our privacy policy. We appreciate you selecting {websiteName} for your travel reservations!
                </b>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default React.memo(PrivacyPolicy);
