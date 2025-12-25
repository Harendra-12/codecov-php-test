import React from "react";
import { Helmet } from "react-helmet";
import TripForm from "../Pages/TripForm-p";
import FlightLoader from "./FlightLoader";

import {
  firstClassDesc,
  firstClassTitle,
  websiteName,
} from "../GlobalData/GlobalMetaData";
import { useSelector } from "react-redux";
function FirstClass() {
  const loading = useSelector((state) => state.loading);
  return (
    <>
      <Helmet>
        <title>{firstClassTitle}</title>
        <meta name="description" content={firstClassDesc} />
      </Helmet>
      {loading ? (
        <FlightLoader />
      ) : (
        <section className="my-5 airlines_page">
          <div className="container">
            <div className="row containBox">
              <div className="col-lg-8 col-md-12 col-12">
                <div className="airlines_text p-xl-5">
                  <span className="front_page_span">First Class Elegance</span>
                  <h1>One step closer to ultimate luxury with First Class flights</h1>
                  <p className="mt-3 py-2">
                  Take off on an experience of unmatched luxury with {websiteName} First Class offerings. Savor the comfort and abundanceon First Class flights, where each component of the flight has been carefully selected to deliver the greatest possible travel experience.Raise the levels of your travel with priority boarding and enhanced amenities, personalized services, and exclusive servicesto make every moment in First Class exceptional.
                  </p>
                  <div className="mt-4">
                    <img
                      src={require("../assets/img/banners/first_class.webp")}
                      width="100%"
                    />
                  </div>
                  <h1 className="mt-5">
                  Experience the finesse of <span>First Class</span>{" "}
                  with our flight offerings
                  </h1>
                  <p className="fw-semibold py-2">
                  Experience the epitome of travel sophistication with {websiteName} First Class tickets. 
                  </p>
                  <ul className="ul_padding_remove">
                    <li className="py-3">
                      <b>Personalized Service:</b>Enjoy personalized attention on your First-Class flights with {websiteName}.Ensure a smooth journey with a dedicated flight attendant who will cater to all your needs and serve you according to your preferences.
                    </li>
                    <li className="py-3">
                      <b>Culinary Excellence: </b>The dining experience in First Class surpasses that of Business Class, offering gourmet menus curated by renowned chefs, paired with an extensive selection of fine wines and spirits.
                    </li>
                    <li className="py-3">
                      <b>Exclusive Lounges: </b> First Class travelers also have access to exclusive lounges with premium amenities, including spa services, fine dining, and a serene environment to unwind before their flight.
                    </li>
                    <li className="py-3">
                      <b>Luxurious Amenities: </b> From designer amenity kits to high-end bedding, First Class passengers enjoy a range of luxurious amenities that enhance their overall travel experience, ensuring a journey that is both comfortable and extraordinary.
                    </li>
                    {/* <li className="py-3">
                      <b>Chauffeur Services and VIP Transfers:</b> Experience
                      door-to-door luxury with complimentary chauffeur services
                      and VIP transfers. Smooth ground transportation ensures a
                      stress-free travel experience, complementing the luxury of
                      your First-Class journey.
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
      )}
    </>
  );
}

export default FirstClass;
