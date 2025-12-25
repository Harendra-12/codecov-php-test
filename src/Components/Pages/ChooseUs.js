import React from "react";

function ChooseUs() {
  return (
    <>
      <section className="section_margin">
        <div className="container">
          <div className="row text-center pt-lg-0 my-lg-0">
            <h1>
            How Do {" "}
              <span style={{ color: "var(--prim-color)" }}>We Stand Out </span>{" "}
              as Your Top Pick?{" "}
            </h1>

            <div className="col-lg-3 col-12 col-md-6 my-5 margin_revert">
              <div className="filler_content">
                <div className="filler_content_img">
                  {/* <img
                    src={require("../assets/img/gallery/deal.webp")}
                    alt="choose us"
                    height={"91"}
                    width={"91"}
                  /> */}
                  <i class="icofont-headphone-alt"></i>
                </div>
                <div className="filler_content_text my-2">
                  <h2>Unparalleled Convenience</h2>
                  <p className="my-1">
                  From pre-trip inquiries to post-travel support, we're here for you in every step of the way.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-12 col-md-6 my-5 margin_revert">
              <div className="filler_content">
                <div className="filler_content_img">
                  {/* <img
                    src={require("../assets/img/gallery/customer-sup.webp")}
                    alt="choose us"
                    height={"91"}
                    width={"91"}
                  /> */}
                  <i class="icofont-holding-hands"></i>
                </div>
                <div className="filler_content_text my-2">
                  <h2>Comprehensive Support</h2>
                  <p className="my-1">
                  Our experts are ready to address your concerns and provide solutions that make your journey truly exceptional.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-12 col-md-6 my-5 margin_revert">
              <div className="filler_content">
                <div className="filler_content_img">
                  {/* <img
                    src={require("../assets/img/gallery/quote.webp")}
                    alt="choose us"
                    height={"91"}
                    width={"91"}
                  /> */}
                  <i class="icofont-price"></i>
                </div>
                <div className="filler_content_text my-2">
                  <h2>Instant Booking Confirmations</h2>
                  <p className="my-1">
                  Receive prompt confirmations, allowing you to land into your choicest dreamland, effectively.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-12 col-md-6 my-5 margin_revert">
              <div className="filler_content">
                <div className="filler_content_img">
                  {/* <img
                    src={require("../assets/img/gallery/instant-booking.webp")}
                    alt="choose us"
                    height={"91"}
                    width={"91"}
                  /> */}
                  <i class="icofont-fast-delivery"></i>
                </div>
                <div className="filler_content_text my-2">
                  <h2>Affordable Airfares</h2>
                  <p className="my-1">
                  Forget the jitters that you received while trying to find airfares within your budget! Contact us now to fly with ease.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUs;
