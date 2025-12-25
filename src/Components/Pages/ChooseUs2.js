import React from "react";
import { websiteName } from "../GlobalData/GlobalMetaData";

const ChooseUs2 = () => {
  return (
    <div>
      <div class="container letsgoFunnyChoose">
        <div class="row">
          <h4 className="mb-5">
          What makes {" "}
            <span style={{ color: "var(--prim-color)" }}> {websiteName}</span>{" "}
            a traveler favorite?
          </h4>
          <div className="col-xl-3">
            <ul>
              <li>
                <strong>Exclusive Flight Offers</strong>
                {/* Choose from 500+ airlines for
                low airfares! */}
              </li>
            </ul>
          </div>
          <div className="col-xl-3">
            <ul>
              <li>
                <strong>Premier Airlines Selection</strong>
                {/* Choose from 500+ airlines for
                low airfares! */}
              </li>
            </ul>
          </div>
          <div className="col-xl-3">
            <ul>
              <li>
                <strong>Carefully Curated Routes</strong>
                {/* Choose from 500+ airlines for
                low airfares! */}
              </li>
            </ul>
          </div>
          <div className="col-xl-3">
            <ul>
              <li>
                <strong>Verified Services</strong>
                {/* Choose from 500+ airlines for
                low airfares! */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs2;
