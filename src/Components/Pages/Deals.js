import React from "react";
import { hiddenNumber } from "../GlobalData/GlobalMetaData";
import { Link } from "react-router-dom";

const Deals = () => {
  return (
    <>
      <div className="container chooseUs">
        <div className="row">
          <h4 className="my-4">
          Where is your {" "}
            <span style={{ color: "var(--prim-color)" }}>heart's desired </span>{" "}
            place to wander?
          </h4>
          <div className="col-xl-4">
            <div className="dealsContent">
              <div className="imgWrapper">
                <img
                  src="https://zumpermedia.s3.amazonaws.com/blog/2017/12/Screen-Shot-2017-12-14-at-4.46.30-PM.png"
                  alt="frame"
                  width={"100%"}
                  height={"100%"}
                />
              </div>
              <div className="row px-3 pt-1">
                <div className="col-6">
                  <div
                    style={{
                      fontSize: 20,
                      color: "#313541",
                      fontWeight: "600",
                    }}
                  >
                    Denver
                  </div>
                  <div>SEA - DEN</div>
                  <div style={{ color: "#73767f" }}>2h 39m</div>
                </div>
                <div className="col-6 text-end">
                  <div
                    style={{
                      fontSize: 22,
                      color: "#008a04",
                      fontWeight: "700",
                    }}
                  >
                    $53.97*
                  </div>
                  <div style={{ fontSize: 15, color: "#777a83" }}>One Way</div>
                </div>
              </div>
              <div className="p-3">
                <a className="funnyBtn" href={hiddenNumber}>
                  <div className="text-white fw-bold mx-auto my-auto">
                    Call Now!
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="dealsContent">
              <div className="imgWrapper">
                <img
                  src="https://static.independent.co.uk/2023/07/07/10/iStock-515064346.jpg"
                  alt="frame"
                  width={"100%"}
                  height={"100%"}
                />
              </div>
              <div className="row px-3 pt-1">
                <div className="col-6">
                  <div
                    style={{
                      fontSize: 20,
                      color: "#313541",
                      fontWeight: "600",
                    }}
                  >
                    Los Angeles
                  </div>
                  <div>ATL - LAX</div>
                  <div style={{ color: "#73767f" }}>5h 13m</div>
                </div>
                <div className="col-6 text-end">
                  <div
                    style={{
                      fontSize: 22,
                      color: "#008a04",
                      fontWeight: "700",
                    }}
                  >
                    $158.11*
                  </div>
                  <div style={{ fontSize: 15, color: "#777a83" }}>One Way</div>
                </div>
              </div>
              <div className="p-3">
                <a className="funnyBtn" href={hiddenNumber}>
                  <div className="text-white fw-bold mx-auto my-auto">
                    Call Now!
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="dealsContent">
              <div className="imgWrapper">
                <img
                  src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/167000/167578-Las-Vegas-Nevada.jpg"
                  alt="frame"
                  width={"100%"}
                  height={"100%"}
                />
              </div>
              <div className="row px-3 pt-1">
                <div className="col-6">
                  <div
                    style={{
                      fontSize: 20,
                      color: "#313541",
                      fontWeight: "600",
                    }}
                  >
                    Las Vegas
                  </div>
                  <div>ORD - LAS</div>
                  <div style={{ color: "#73767f" }}>4h 5m</div>
                </div>
                <div className="col-6 text-end">
                  <div
                    style={{
                      fontSize: 22,
                      color: "#008a04",
                      fontWeight: "700",
                    }}
                  >
                    $191.11*
                  </div>
                  <div style={{ fontSize: 15, color: "#777a83" }}>One Way</div>
                </div>
              </div>
              <div className="p-3">
                <a className="funnyBtn" href={hiddenNumber}>
                  <div className="text-white fw-bold mx-auto my-auto">
                    Call Now!
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 text-center" style={{ fontSize: 13 }}>
        *The showcased prices are based on historical data, susceptible to changes, and not assured during the booking process. Please call us for more details{" "}
          <Link onClick={()=>window.scrollTo(0,0)} to="/terms-conditions">terms and conditions</Link>
        </div>
      </div>
    </>
  );
};

export default Deals;
