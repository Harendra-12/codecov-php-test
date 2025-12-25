import React from "react";
import TripForm from "./TripForm";
import { Helmet } from "react-helmet";
import {
  hiddenNumber,
  servicesDesc,
  servicesTitle,
  visibleNumber,
  website,
  websiteName,
} from "../GlobalData/GlobalMetaData";

function AllServices() {
  return (
    <>
      <Helmet>
        <title>{servicesTitle}</title>
        <meta name="description" content={servicesDesc} />
      </Helmet>
      {/* Mobile Top */}
      <a href={hiddenNumber} className="mobile_popupsc">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="flex_box">
                <p>
                  <i class="icofont-ui-call"></i>{" "}
                  <strong>{visibleNumber}</strong>
                </p>
              </div>
            </div>
            <div className="col-12 p-0 m-0">
              <p>
                <div className="banner_con">
                  <img
                    src={require("../assets/img/popup/popup_banner.webp")}
                    className="mobile_logo"
                    alt="..."
                  />
                </div>
              </p>
            </div>
            <div className="col-12">
              <p>
                <div className="postion_box">
                  <img
                    src={require("../assets/img/popup/call.webp")}
                    className="mobile_logo"
                    alt="..."
                  />
                </div>
              </p>
            </div>
            <div className="col-12">
              <p>
                <div className="deal_box">
                  <h3>AIRLINE TICKET BOOKINGS</h3>
                </div>
              </p>
            </div>
            <div className="col-12">
              <a href={hiddenNumber}></a>
              <div className="text_box">
                <a href={hiddenNumber}>
                  <h4>Trending Flight Deals</h4>
                  <p>Curated packages &discounts on leading carriers</p>
                  <h5>Call our customer help line for your flawless reservations!</h5>
                </a>
                <div className="button_box">
                  <a href={hiddenNumber}></a>
                  <a href={hiddenNumber} className="link_con">
                    <i className="fa-solid fa-phone-volume call_con" />
                    {visibleNumber}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>

      {/* Front Page */}

      <section className="all-services">
        <div className="about_front_page about">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-12 col-md-12 col-xl-12 text-center aboutBanner_text position-relative">
                <div className="front_page_text">
                  <h1>
                    Get your wings for flying with{" "}
                    <span className="front_page_highlight">our Services</span>
                  </h1>
                  <p className="text-white">
                    Hassle-free Flight Booking, Effortless Cancellations,
                    Personalised First Class Services and More
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
      <section className="servicesPointer mt-5 pt-5 mt-xl-0 pt-xl-0">
        <div className="container">
          <div className="row gx-3">
            <h3 className="text-dark">
              Travel the Globe Encompassing Our{" "}
              <sup>
                <i
                  class="icofont-rounded-left-up prim-color aos-init aos-animate"
                  data-aos="fade"
                ></i>
              </sup>{" "}
              All-Round Services{" "}
              <sub>
                <i
                  class="icofont-rounded-right-down prim-color aos-init aos-animate"
                  data-aos="fade"
                  data-aos-delay="100"
                ></i>
              </sub>
            </h3>
            <div className="my-3"></div>
            <a href={hiddenNumber} className="col-xl-3 text-center">
              <div className="abc">
                <img
                  src={require("../assets/img/gallery/booking_ flights.webp")}
                  alt="choose us"
                  style={{ width: "100%", borderRadius: "5px" }}
                />
                <h2>Securing Flight Tickets</h2>
                <p className="my-1">
                  Effortlessly secure unparalleled convenience when booking
                  domestic and international flights.
                </p>
              </div>
            </a>
            <a href={hiddenNumber} className="col-xl-3 text-center">
              <div className="abc">
                <img
                  src={require("../assets/img/gallery/managing_ reservations.webp")}
                  alt="choose us"
                  style={{ width: "100%", borderRadius: "5px" }}
                />
                <h2>Smooth Ticket Management</h2>
                <p className="my-1">
                  Seamlessly modify or cancel flights, guaranteeing enhanced
                  booking flexibility.
                </p>
              </div>
            </a>
            <a href={hiddenNumber} className="col-xl-3 text-center">
              <div className="abc">
                <img
                  src={require("../assets/img/gallery/world_class_business Travel.webp")}
                  alt="choose us"
                  style={{ width: "100%", borderRadius: "5px" }}
                />
                <h2>Personalised First Class Services</h2>
                <p className="my-1">
                  Experience unparalleled luxury through our custom-made
                  First-Class services.
                </p>
              </div>
            </a>
            <a href={hiddenNumber} className="col-xl-3 text-center">
              <div className="abc">
                <img
                  src={require("../assets/img/gallery/in flight_ amenities.webp")}
                  alt="choose us"
                  style={{ width: "100%", borderRadius: "5px" }}
                />
                <h2>Cutting-edge Aerial Amenities</h2>
                <p className="my-1">
                  Indulge in an array of sophisticated aerial amenities during
                  each trip.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="servicesDesc mt-4 pb-4 bg-light">
        <div className="container">
          <div className="row">
            <div className="content">
              <h2>
                Instant Flight Booking{" "}
                <span className="fw-bold">Made Simple</span>{" "}
                <i class="icofont-space-shuttle"></i>
              </h2>
              <p>
                Discover travel excellence through our user-friendly platform.
                Smoothly navigate diverse options, compare prices, and curate a
                personalized itinerary.{websiteName} is your steadfast
                companion, simplifying the reservation process to effortlessly
                align with your travel aspirations. Rely on us for a journey
                that's not only smooth but also tailored to your preferences
                from beginning to end.
              </p>
              <h2>
                Confidently Handle{" "}
                <span className="fw-bold">Flight Reservations</span>{" "}
                <i class="icofont-space-shuttle"></i>
              </h2>
              <p>
                Seamlessly modify or cancel reservations. Enjoy peace of mind,
                steer clear of inflexible policies. Indulge in unparalleled
                convenience when tweaking journey details. Experience a
                customised, hassle-free ticket management process. With{" "}
                {websiteName}, rest assured your travel plans remain flexible,
                effortlessly adapting to your evolving schedule and preferences,
                ensuring a more accommodating and convenient travel experience.
              </p>
              <h2>
                Elevate Your First-Class Journey to{" "}
                <span className="fw-bold">Unprecedented Heights</span>{" "}
                <i class="icofont-space-shuttle"></i>
              </h2>
              <p>
                Secure your first-class cabin reservations for an elevated
                international journey. Leave compromise behind, indulge in
                relaxation, and receive the attention you deserve. Connect with{" "}
                {websiteName} to commence a First-Class pre-booking, ensuring an
                unmatched experience of personalized service and refined comfort
                for an enjoyable journey!
              </p>
              <h2>
                Indulge in a Superior Journey with Our Exclusive{" "}
                <span className="fw-bold">Air Travel Services</span>{" "}
                <i class="icofont-space-shuttle"></i>
              </h2>
              <p>
                Immerse yourself in a flawless travel experience with our
                guaranteed in-flight amenities. From plush seating to exquisite
                meals, relish a limitless entertainment choice and stay
                connected with onboard Wi-Fi. {website} is dedicated to ensuring
                your journey transcends a mere trip, transforming into a
                memorable and delightful adventure.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="faqSection my-3">
        <div className="container">
          <h3 className="text-dark">
            Frequently <span>Asked</span> Questions <span>!</span>
          </h3>
          <ul className="faq_collapse mt-3">
            <li>
              <a
                href="#drop1"
                className=""
                data-bs-toggle="collapse"
                aria-controls="drop1"
              >
                How the best deals on {websiteName} can be found?{" "}
                <i className="icofont-caret-down" />
              </a>
              <div className="collapse" id="drop1">
                <div className="card card-body">
                  <p className="faq_text">
                    Simply enter your travel details on {websiteName}'s
                    homepage. Our smart algorithms will swiftly present you with
                    a range of options. You can also reach out to our helpline
                    number for additional requirements.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <a
                href="#drop2"
                className=""
                data-bs-toggle="collapse"
                aria-controls="drop2"
              >
                What payment options does {websiteName} support?{" "}
                <i className="icofont-caret-down" />
              </a>
              <div className="collapse" id="drop2">
                <div className="card card-body">
                  <p className="faq_text">
                    {websiteName} accepts major credit cards, debit cards, and
                    various secure online payment methods. Rest assured; your
                    financial transactions are protected by advanced encryption
                    for a worry-free booking experience.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <a
                href="#drop3"
                className=""
                data-bs-toggle="collapse"
                aria-controls="drop3"
              >
                Is it possible to make changes to bookings on {websiteName}?{" "}
                <i className="icofont-caret-down" />
              </a>
              <div className="collapse" id="drop3">
                <div className="card card-body">
                  <p className="faq_text">
                    Yes, it is possible! Reach out to our customer helpline
                    number to get instant help regarding your booking and also
                    be ready to make your travel wish-list true.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default AllServices;
