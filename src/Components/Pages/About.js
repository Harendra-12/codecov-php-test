import React from "react";
import TripForm from "./TripForm";
import BottomBanner from "./BottomBanner";
import FlightLoader from "./FlightLoader";
import { useSelector } from "react-redux";
import {
  aboutDesc,
  aboutTitle,
  websiteName,
} from "../GlobalData/GlobalMetaData";
import { Helmet } from "react-helmet";
function About() {
  const loading = useSelector((state) => state.loading);
  return (
    <>
      <Helmet>
        <title>{aboutTitle}</title>
        <meta name="description" content={aboutDesc} />
      </Helmet>
      {loading ? (
        <FlightLoader />
      ) : (
        <>
          {/* Front Page */}
          <section>
            <div className="about_front_page about">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 col-12 col-md-12 col-xl-12 text-center aboutBanner_text position-relative">
                    <div className="front_page_text">
                      <h1>
                        About <span className="front_page_highlight">Us</span>
                      </h1>
                      <p className="text-white">
                      Step Out as You Wish. Save Bucks as We Offer!
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-12 col-12 col-md-12 mx-auto mt-5 p-5 pb-0 padding_revert">
                    <div className="travel-search position-relative">
                      <TripForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* About Us Details Section */}
          <section className="section_margin">
            <div className="about_content about">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12 pt-xl-0 pt-lg-0 pt-5 mt-xl-0 mt-lg-0 text-center">
                    <h1>{websiteName} at your Service!</h1>
                  </div>
                  <div className="col-xl-8 px-5 pt-4 pb-5 text_content mx-auto">
                    <p>
                    Welcome to {websiteName}, your reliable platform for seamless flight reservations. Committed to delivering excellence, {websiteName} ensures a smooth and carefree travel experience through its user-friendly Portal. Leveraging an extensive network of partnerships, we guarantee competitive prices and a wide array of options for every journey. Rest assured with {websiteName} for your travel needs, where efficiency meets affordability.
                    </p>
                    <p>
                    At {websiteName}, our dedicated team tirelessly provides personalized service, addressing your unique travel requirements. Emphasizing transparency and reliability, {websiteName} empowers you to make informed decisions with real-time information and expert guidance. As your trusted travel companion, {websiteName} stands as a testament to our unwavering commitment to excellence in the realm of flight bookings.
                    </p>
                    <p>
                    Step into a modern age of travel convenience with {websiteName}. Our intuitively designed platform aims to streamline the flight booking process, providing a diverse set of features customized to your preferences. 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* About Us Details Section End */}
          {/* Banner Section */}
          <BottomBanner />
          {/* Banner Section End */}
          {/* About Us Content Table */}
          <section className="my-5">
            <div className="about_content_list about">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-6">
                    <div className="row mx-0">
                      <div className="col-xl-12 col-lg-12 text_content">
                        <h1>Our Mission</h1>
                        <p className="py-4">
                          At {websiteName}, our mission is to redefine the
                          travel experience by effortlessly connecting
                          individuals to their destinations with unparalleled
                          convenience and affordability. We are driven by a
                          commitment to excellence, utilizing cutting-edge
                          technology to curate an extensive network of flights.
                        </p>
                      </div>
                    </div>
                    <div className="row mx-0">
                      <div className="col-xl-12 col-lg-12 text_content">
                        <p>
                        At {websiteName}, we are dedicated to transforming the travel experience by seamlessly connecting individuals with their desired destinations, all while prioritizing convenience and affordability. Our commitment to excellence is the driving force behind the utilization of cutting-edge technology, enabling us to curate a vast network of flights.
                        </p>
                        <p>
                        We strive to empower travelers through a diverse array of choices that cater to their unique preferences, ensuring a personalized journey. With our customer-centric approach, we exceed expectations by offering 24/7 support and fostering traveler relationships.
                        At {websiteName}, our vision extends beyond mere transactions to envision a world where travel becomes an enriching adventure. We are steadfast in our dedication to turning this vision into a reality for each one of our valued customers.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                    <div className="col-xl-12 cl-lg-12 text_content">
                      <h1>Our Visions</h1>
                      <ul className="p-3 py-4">
                        <li className="mb-2">
                          <div className="row">
                            <div className="col-2 d-flex justify-content-center">
                              <img
                                src={require("../assets/img/gallery/saleico.webp")}
                                width={"50"}
                                height={"50"}
                                alt="saleico"
                              />
                            </div>
                            <div className="col-10">
                              <h4>Elevating Experience</h4>
                              <p>
                              Revolutionizing travel through seamless bookings and impeccable service, redefining the journey experience.
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="mb-2">
                          <div className="row">
                            <div className="col-2 d-flex justify-content-center">
                              <img
                                src={require("../assets/img/gallery/officeico.webp")}
                                width={"50"}
                                height={"50"}
                                alt="officeico"
                              />
                            </div>
                            <div className="col-10">
                              <h4>Pioneering Innovation</h4>
                              <p>
                              Harnessing cutting-edge innovations for a streamlined delivery of efficient guidance to the passengers.
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="mb-2">
                          <div className="row">
                            <div className="col-2 d-flex justify-content-center">
                              <img
                                src={require("../assets/img/gallery/planeico.webp")}
                                width={"50"}
                                height={"50"}
                                alt="planeico"
                              />
                            </div>
                            <div className="col-10">
                              <h4>Global Accessibility</h4>
                              <p>
                              Connecting remote places, bringing the world to your fingertips with seamless accessibility and global reach.
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="mb-2">
                          <div className="row">
                            <div className="col-2 d-flex justify-content-center">
                              <img
                                src={require("../assets/img/gallery/globeico.webp")}
                                width={"50"}
                                height={"50"}
                                alt="globeico"
                              />
                            </div>
                            <div className="col-10">
                              <h4>Genuine Loyalty</h4>
                              <p>
                              Securing satisfaction with tailored aid and unceasing backing for top-tier customer care and unrivaled assistance.
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* About Us Content Table End */}
        </>
      )}
    </>
  );
}

export default About;
