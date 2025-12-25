import React from "react";
import { Helmet } from "react-helmet";
import TripForm from "../Pages/TripForm-p";
import FlightLoader from "./FlightLoader";
import BottomBanner from "./BottomBanner";

import {
  BusinessClassDesc,
  BusinessClassTitle,
  websiteName,
} from "../GlobalData/GlobalMetaData";
import { useSelector } from "react-redux";

function Business() {
  const loading = useSelector((state) => state.loading);
  return (
    <>
      <Helmet>
        <title>{BusinessClassTitle}</title>
        <meta name="description" content={BusinessClassDesc} />
      </Helmet>
      {loading ? (
        <FlightLoader />
      ) : (
        <>
          <section className="my-5 airlines_page">
            <div className="container">
              <div className="row containBox">
                <div className="col-lg-8 col-md-12 col-12">
                  <div className="airlines_text p-xl-5">
                    <span className="front_page_span">Business Class Bliss</span>
                    <h1>Turn Up ComfortLevels with Business Class Sophistication</h1>
                    <p className="mt-3 py-2">
                    Step into a world of refined travel sophistication with our Business Class offerings. Enjoy spacious cabins, attentive service, and exquisite cuisine, designed to cater to all your needs. Access exclusive lounges and priority services, all while securing the best prices for your ultimate in-flight comfort.
                    </p>
                    <div className="mt-4">
                      <img
                        src={require("../assets/img/banners/business_class.webp")}
                        width="100%"
                      />
                    </div>
                    <h1 className="mt-5">
                    Secure Unparalleled Comfort  <span>in the Skies </span>{" "}
                    with Business Class
                    </h1>
                    <p className="fw-semibold py-2">
                    Experience unmatched Business Class luxury with {websiteName} hassle-free bookings
                    </p>
                    <ul>
                      <li className="py-3">
                        <b>Enhanced Privacy and Comfort: </b> Business Class offers an exclusive and private setting providing travellers with a heightened sense of privacy. The cabin layout features fewer seats, ensuring a quieter and more relaxed atmosphere for passengers seeking a peaceful journey.
                      </li>
                      <li className="py-3">
                        <b>Flexible Seating Arrangements: </b> Enjoy versatile seating arrangements with Business Class’s lie-flat beds and enhanced recline options. This flexibility allows passengers to adapt their space according to personal preferences, ensuring a restful and comfortable flight experience.
                      </li>
                      <li className="py-3">
                        <b>Customized Dining Experience: </b>Enjoy a curated dining experience with a diverse menu of gourmet options on Business Class flights. From fine wines to personalized meal choices, the culinary offerings in Business Class cater to individual tastes. 
                      </li>
                      <li className="py-3">
                        <b>Priority Services & Boarding: </b> Benefit from advanced boarding procedures and priority services, ensuring a seamless journey from check-in to baggage claim. This exclusive treatment enhances the overall travel experience, emphasizing on heightened convenience and efficiency.
                      </li>
                      {/* <li className="py-3">
                        <b>Exclusive Lounge Access:</b> Relax and unwind in
                        luxury lounges before your flight. Enjoy premium
                        amenities, Wi-Fi, and a tranquil environment, ensuring a
                        productive and peaceful pre-flight experience.
                      </li> */}
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-12 busiFormParentWrapper">
                  <div className="travel-search">
                    <TripForm />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <BottomBanner />
          </section>
        </>
      )}
    </>
  );
}

export default Business;
