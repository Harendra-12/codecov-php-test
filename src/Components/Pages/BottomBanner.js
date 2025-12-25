import React from "react";
import { hiddenNumber } from "../GlobalData/GlobalMetaData";

function BottomBanner() {
  return (
    <>
      <section className="filler_banner">
        <div className="container-fluid px-0">
          <div className="row">
            <div className="col-lg-6 col-12 p-5">
              <h1 className="my-2 position-relative" style={{ zIndex: "10" }}>
              Bring your Travel Dreams to Us now! 
              </h1>

              <a
                href={hiddenNumber}
                className="btn my-2 position-relative bg-light"
                style={{ zIndex: "10", color: "var(--prim-color)" }}
              >
                Book Now <i className="icofont-caret-right" />
              </a>
            </div>
            <div className="col-lg-6 d-none d-xl-block p-0">
              <div className="imgWrapper">
                <img
                  src={require("../assets/img/banners/home_sub_image.webp")}
                  width={"100%"}
                  height={"100%"}
                  alt="saleico"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BottomBanner;
