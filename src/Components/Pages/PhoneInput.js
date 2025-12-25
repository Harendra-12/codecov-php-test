import React from "react";
import { hiddenNumber } from "../GlobalData/GlobalMetaData";

function PhoneInput() {
  return (
    <>
      <section className="cta_section">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-auto">
              <div className="row flex-wrap align-items-center">
                <div className="col-auto">
                  <img
                    src={require("../assets/img/gallery/travel.webp")}
                    alt="footer"
                    height={"50"}
                    width={"50"}
                  />
                </div>
                <div className="col-auto">
                  <h1>The Gateway of Dreams begins here!</h1>
                  <p className="my-1">Start your best Voyage with Us</p>
                </div>
              </div>
            </div>
            <div className="col-auto text-end">
              <div className="d-flex">
                {/* <input
                  type="text"
                  placeholder="Your Phone Number"
                  className="cta_input"
                /> */}
                <a href={hiddenNumber} aria-label="Go" className="btn mx-2">
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PhoneInput;
