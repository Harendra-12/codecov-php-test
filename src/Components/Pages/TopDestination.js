import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { hiddenNumber, websiteName } from "../GlobalData/GlobalMetaData";

function TopDestination() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // Handle calling
  function handleCall() {
    window.location.href = hiddenNumber;
  }
  return (
    <>
      <section className="my-5">
        <div className="container">
          <div className="row">
            <p className="h1">Hear it from our Happy Customers!   </p>
          </div>
          {/* <div className="flights-slider"> */}
          {/* <Slider {...settings} className="flights-slider"> */}
          <Carousel
            responsive={responsive}
            autoPlay={true}
            infinite={true}
            showDots={false}
            showArrows={true}
          >
            <figure class="snip1533">
              <figcaption>
                <blockquote>
                  <p>
                    "Had to attend my business meeting in Vancouver, for which I had to book an urgent flight. With the help of {websiteName}, my team managed to get the confirmed tickets, atan affordable rate. Thanks to the team for their coordination and support."
                  </p>
                </blockquote>
                <h3>Sarah Thompson</h3>
                <h4>
                  <div style={{ color: "#ffbf00" }}>
                    <i class="icofont-star"></i>
                    <i class="icofont-star"></i>
                    <i class="icofont-star"></i>
                    <i class="icofont-star"></i>
                    <i class="icofont-star"></i>
                  </div>
                </h4>
              </figcaption>
            </figure>
            <figure class="snip1533">
              <figcaption>
                <blockquote>
                  <p>
                    "Tried hard to fly to Calgary for missing the former one. After hours of waiting at the airport, I came across {websiteName}. The customer support is too good and polite, gave me window seats also."
                  </p>
                </blockquote>
                <h3>James Rodriguez</h3>
                <h4>
                  <div style={{ color: "#ffbf00" }}>
                    <i class="icofont-star"></i>
                    <i class="icofont-star"></i>
                    <i class="icofont-star"></i>
                    <i class="icofont-star"></i>
                    <i class="icofont-star"></i>
                  </div>
                </h4>
              </figcaption>
            </figure>
            <figure class="snip1533">
              <figcaption>
                <blockquote>
                  <p>
                    "Last week, I had huge trouble for flying from CA to DEN, until I came across {websiteName} that gave me immense support to get what I had wanted. Very co-operative and polite."
                  </p>
                </blockquote>
                <h3>Emily Chen</h3>
                <h4>
                  <div style={{ color: "#ffbf00" }}>
                    <i class="icofont-star"></i>
                    <i class="icofont-star"></i>
                    <i class="icofont-star"></i>
                    <i class="icofont-star"></i>
                    <i class="icofont-star"></i>
                  </div>
                </h4>
              </figcaption>
            </figure>
          </Carousel>
          {/* </div> */}
        </div>
      </section>
    </>
  );
}

export default TopDestination;
