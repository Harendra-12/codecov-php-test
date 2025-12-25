import React from "react";
import { Link } from "react-router-dom";
import PhoneInput from "./PhoneInput";
import { useDispatch } from "react-redux";
import {
  address,
  email,
  hiddenEmail,
  hiddenNumber,
  visibleNumber,
  website,
  websiteName,
} from "../GlobalData/GlobalMetaData";
function Footer() {
  const dispatch = useDispatch();
  function scrollToTop() {
    dispatch({
      type: "SET_COUNTER",
      counter: window.location.pathname,
    });
    window.scrollTo(0, 0);
  }
  return (
    <>
      {/* <PhoneInput /> */}
      <section className="footer">
        <footer className=" text-white" style={{ backgroundColor: "#1e1e1e" }}>
          {/* Grid container */}
          <div className="container-fluid">
            {/* Section: Links */}
            <section className="">
              {/* Grid row*/}
              <div className="row  d-flex justify-content-center pt-4">
                <div className="col-xl-3 col-12">
                <Link
                    to="/"
                    onClick={scrollToTop}
                    className="w-100 p-0 logo_sidenav"
                  >
                    <img
                      src={require("../assets/img/gallery/go-fare-hub.png")}
                      alt="LOGO"
                      height={"50"}
                      // width={"50"}
                      className="ms-3 mt-1 mb-3"
                    />
                  </Link>
                  <p>
                  Experience the magic of travel at {websiteName}, where dreams unfold with unmatched precision. Our commitment to excellence crafts each service, making your wanderlust a symphony of unforgettable moments.
                  </p>
                </div>
                <div className="col-xl-6 col-12 sub-footer-text">
                  <ul className="sub-footer-nav">
                    <li>
                      <Link
                        className="mx-xl-2"
                        to="/about-us"
                        onClick={scrollToTop}
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="mx-xl-2"
                        to="/privacy-policy"
                        onClick={scrollToTop}
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={scrollToTop}
                        className="mx-xl-2"
                        to="/terms-conditions"
                      >
                        Terms & Conditions
                      </Link>
                    </li>
                    {/* <li>
                      <Link className="mx-xl-2" to="/flights" onClick={scrollToTop}>
                        Flight
                      </Link>
                    </li> */}
                    <li>
                      <Link
                        className="mx-xl-2"
                        to="/refund-policy"
                        onClick={scrollToTop}
                      >
                        Refund Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="mx-xl-2"
                        onClick={scrollToTop}
                        to="/sitemap"
                      >
                        Site Map
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="mx-xl-2"
                        to="/contact"
                        onClick={scrollToTop}
                      >
                        Support
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-3 col-12">
                  <ul className="p-0">
                    <li>
                      <a href={hiddenNumber}>
                        <i class="icofont-ui-call"></i> {visibleNumber}
                      </a>
                    </li>
                    <li>
                      <a href={hiddenEmail}>
                        <i class="icofont-email"></i> {email}
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i class="icofont-location-pin"></i> {address}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Grid row*/}
            </section>
            {/* Section: Links */}
            <hr className="my-2" />
            {/* Section: Text */}
            <section className="pt-3 disclaimer">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-12">
                  <p className="text-center">
                  Disclaimer- {websiteName} is an online flight booking platform. We provide flight information and booking services as a third-party platform. We strive for accuracy, but airline schedules, prices, and availability are subject to change. {websiteName} is not responsible for any discrepancies or disruptions in travel plans. Users are advised to verify details with the respective airlines and review terms and conditions before booking. Safe travels!
                  </p>
                </div>
              </div>
            </section>
            {/* Section: Text */}
          </div>
          {/* Grid container */}
          {/* Copyright */}
          <div
            className="text-center p-3"
            style={{ backgroundColor: "#1e1e1e" }}
          >
            © {new Date().getFullYear()} Copyright:&nbsp;
            <span className="text-white">{websiteName}</span>
          </div>
          {/* Copyright */}
        </footer>
      </section>
    </>
  );
}

export default Footer;
