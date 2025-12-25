import React, { useEffect } from "react";
import TripForm from "./TripForm";
import BottomBanner from "./BottomBanner";
import TopDestination from "./TopDestination";
import FlyingPartners from "./FlyingPartners";
import ChooseUs from "./ChooseUs";
import RecomendedFlight from "./RecomendedFlight";
import Aos from "aos";
import FlightLoader from "./FlightLoader";
import "aos/dist/aos.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import "../assets/css/flightsearchstyle.css";
import "../assets/css/flightsearchstyle_2.css";
import "../assets/icofont/icofont.css";
import { useSelector } from "react-redux";
import {
  hiddenNumber,
  homeDesc,
  homeTitle,
} from "../GlobalData/GlobalMetaData";
import { Helmet } from "react-helmet";
import ChooseUs2 from "./ChooseUs2";
import Deals from "./Deals";

function Home() {
  const loading = useSelector((state) => state.loading);
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>{homeTitle}</title>
        <meta name="description" content={homeDesc} />
      </Helmet>
      {loading ? (
        <FlightLoader />
      ) : (
        <>
          {/* Front Page */}
          <section>
            <div className="flight_front_page">
              <div className="container position-relative z-1">
                <div className="row about">
                  <div className="col-xl-6 col-lg-6 col-12 col-md-12 my-5 py-5 py-lg-5 my-lg-5 py-xl-2 my-xl-0 text-start">
                    <div className="front_page_text p-xl-5">
                      <h1 className="my-1">
                      TAKE OFF WITH THE  <span>MOST AFFORDABLE </span>RATES !
                      </h1>
                      {/* <p className="text-sec mt-3">
                        Incididunt enim amet aute non ad elit. Et eiusmod tempor
                        laboris ea laboris dolor.
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="flights_front_banner d-flex">
                <div className="row flex-nowrap">
                  <div className="col-auto">
                    <img
                      src={require("../assets/img/gallery/frame3.webp")}
                      alt="frame"
                      width={"550"}
                      height={"560"}
                    />
                  </div>
                  <div className="col-auto">
                    <img
                      src={require("../assets/img/gallery/frame4.webp")}
                      alt="frame2"
                      width={"290"}
                      height={"560"}
                    />
                  </div>
                </div>
              </div> */}
            </div>
          </section>

          <div
            className="col-xl-10 col-lg-10 col-12 col-md-12 py-1 py-lg-5 mx-auto my-lg-5 py-xl-2 my-xl-0 pt-5 mt-3"
            style={{ position: "relative", zIndex: "2" }}
          >
            <div className="travel-search about position-relative">
              <TripForm />
            </div>
          </div>
          {/* Search Form End*/}
          <Deals />
          {/* Filler Content */}
          <ChooseUs />
          {/* Filler Content End*/}
          <ChooseUs2 />
          {/* Recommended Flights */}
          <RecomendedFlight />
          {/* Recommended Flights End */}
          {/* Our Partners Start */}
          {/* <FlyingPartners /> */}
          {/* Our Partners End */}
          {/* Top Destinations Start */}

          <TopDestination />

          {/* Top Destinations End */}
          {/* Banner Section */}
          <BottomBanner />
          {/* <section className="cta_section_phn">
            <div className="container">
              <div className="row cta_content_phn mt-1 p-2">
                <div className="col-9 mt-1 text-start">
                  <div className="col-12">
                    <h6>The Gateway of Dreams begins here!</h6>
                  </div>
                  <div className="col-12">
                    <a href={`tel:${hiddenNumber}`}>
                      Start your best Voyage with Us
                    </a>
                  </div>
                </div>
                <div className="col-3 my-auto">
                  <div className="circle-wrapper text-end">
                    <div className="circle">
                      <div className="phone_holder">
                        <a href={`tel:${hiddenNumber}`}>
                          <img
                            src={require("../assets/img/gallery/call-human.webp")}
                            className=""
                            width={"100"}
                            height={"100"}
                            alt="frame3"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </section> */}
          {/* CTA Section Phone End */}
          {/* footer */}
        </>
      )}
    </>
  );
}

export default React.memo(Home);
