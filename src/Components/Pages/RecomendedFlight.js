import React from "react";
import { generalGetFunction } from "../Model/GlobalFunction";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { hiddenNumber } from "../GlobalData/GlobalMetaData";

function RecomendedFlight() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const adult = useSelector((state) => state.adult);
  const children = useSelector((state) => state.children);
  const infants = useSelector((state) => state.infants);
  const tripClass = useSelector((state) => state.tripClass);
  const nextDate = new Date();
  nextDate.setDate(nextDate.getDate() + 7);
  const date = nextDate.toISOString().split("T")[0];
  function suggestFlightClick(
    departure,
    arrival,
    arrivalItaCode,
    departureItaCode
  ) {
    dispatch({
      type: "SET_ADULT",
      adult: 1,
    });
    dispatch({
      type: "SET_CHILDREN",
      children: 0,
    });
    dispatch({
      type: "SET_INFANTS",
      infants: 0,
    });
    window.scrollTo(0, 0);
    dispatch({
      type: "SET_FLIGHTWAY",
      flightWay: "One way",
    });
    dispatch({
      type: "SET_DEPARTUREDATE",
      departureDate: date,
    });
    localStorage.setItem("departureDate", date);
    dispatch({
      type: "SET_LOADING",
      loading: true,
    });
    dispatch({
      type: "SET_ARRIVAL",
      arrival: arrival,
    });
    dispatch({
      type: "SET_ARRIVALITACODE",
      arrivalItaCode: arrivalItaCode,
    });
    dispatch({
      type: "SET_DEPARTURE",
      departure: departure,
    });
    dispatch({
      type: "SET_DEPARTUREITACODE",
      departureItaCode: departureItaCode,
    });
    dispatch({
      type: "SET_TRIPCLASS",
      tripClass: "ECONOMY",
    });
    dispatch({
      type: "SET_TOTALPASSENGER",
      totalPassenger: 1,
    });
    localStorage.setItem("totalPassenger", 1);
    localStorage.setItem("tripClass", "ECONOMY");
    localStorage.setItem("adult", 1);
    localStorage.setItem("children", 0);
    localStorage.setItem("infants", 0);
    localStorage.setItem("departure", departure);
    localStorage.setItem("departureItaCode", departureItaCode);
    localStorage.setItem("arrival", arrival);
    localStorage.setItem("arrivalItaCode", arrivalItaCode);
    async function fetchData() {
      // Dispatch data to redux for instant change
      var offerData = await generalGetFunction(
        `v2/shopping/flight-offers?originLocationCode=${departureItaCode}&destinationLocationCode=${arrivalItaCode}&currencyCode=USD&departureDate=${date}&adults=${adult}&travelClass=ECONOMY&children=${children}&infants=${infants}&max=90`
      );
      if (
        (offerData && offerData === "error") ||
        (offerData && offerData.data.length === 0)
      ) {
        setTimeout(() => {
          dispatch({
            type: "SET_LOADING",
            loading: false,
          });
        }, 1000);

        navigate("/flight-not-found");
      } else if (
        offerData !== undefined &&
        offerData !== null &&
        offerData !== ""
      ) {
        var main = offerData.data.map((item) => {
          const itineraries = [];
          item.itineraries.map((data) => {
            const segments = [];
            data.segments.map((innerLevel) => {
              segments.push({
                arrival: {
                  arrivalIataCode: innerLevel.arrival["iataCode"],
                  arrivalAt: innerLevel.arrival["at"],
                },
                departure: {
                  departureAt: innerLevel.departure["at"],
                  departureItaCode: innerLevel.departure["iataCode"],
                },
                segmentDuration: innerLevel.duration,
                number: innerLevel.number,
                carrierCode: {
                  code: innerLevel.carrierCode,
                  value:
                    offerData.dictionaries.carriers[innerLevel.carrierCode],
                },
                aircraft: {
                  code: innerLevel.aircraft["code"],
                  value:
                    offerData.dictionaries.aircraft[
                      innerLevel.aircraft["code"]
                    ],
                },
              });
            });
            var duration = data.duration;

            itineraries.push({ segments, duration });
          });
          return {
            id: item.id,
            total: item.price["total"],
            basePrice: item.price["base"],
            numberOfBookableSeats: item.numberOfBookableSeats,
            itineraries: itineraries,
            rawData: item,
            includedCheckedBags: {
              // weight:item.travelerPricings[0]["fareDetailsBySegment"][0]["includedCheckedBags"]["weight"]!==undefined?"":"",
              // weightUnit:item.travelerPricings[0]["fareDetailsBySegment"][0]["includedCheckedBags"]["weightUnit"]!==undefined?item.travelerPricings[0]["fareDetailsBySegment"][0]["includedCheckedBags"]["weightUnit"]:""
              weight: "",
              weightUnit: "",
            },
          };
        });
        var allAirlines = offerData.dictionaries["carriers"];
        dispatch({
          type: "SET_AIRLINES",
          airlines: { airlines: allAirlines },
        });
        dispatch({
          type: "SET_OFFER",
          payload: { offer: main },
        });
        setTimeout(() => {
          dispatch({
            type: "SET_LOADING",
            loading: false,
          });
        }, 1000);
        // Storing data in localstorage for data avaliablity
        localStorage.setItem("offer", JSON.stringify(main));
        localStorage.setItem(
          "airlines",
          JSON.stringify(offerData.dictionaries["carriers"])
        );

        // Dispatch data to redux for instant change

        navigate("/flight-search");
      }
    }
    fetchData();
  }

  const formattedDate1 = new Date();
  formattedDate1.setDate(formattedDate1.getDate() + 7);

  const formattedDate2 = new Date();
  formattedDate2.setDate(formattedDate2.getDate() + 9);

  const formattedDate3 = new Date();
  formattedDate3.setDate(formattedDate3.getDate() + 20);

  const formattedDate4 = new Date();
  formattedDate4.setDate(formattedDate4.getDate() + 15);

  const formattedDate5 = new Date();
  formattedDate5.setDate(formattedDate5.getDate() + 25);

  const findDayOfWeek = (dateString) => {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const date = new Date(dateString);
    const dayOfWeek = daysOfWeek[date.getDay()];

    return dayOfWeek;
  };
  const findMonthOfWeek = (date) => {
    const month = new Date(date).toLocaleDateString(undefined, {
      month: "long",
    });
    return month.slice(0, 3);
  };
  const findDay = (date) => {
    const day = new Date(date).toLocaleDateString(undefined, {
      day: "numeric",
    });
    return day;
  };

  return (
    <>
      <section className="my-5 recom_flights">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="h1">Personalized Routes Exclusively Designed for You</p>
            </div>
            <div class="col-xl-3 Domestic_Routes_section">
              <div class="row">
                <div class="col-12">
                  <div class="row">
                    <div class="col-12">
                      <div class="roots_box">
                        <div class="list_box">
                          <ul>
                            <li>
                              <a>Los Angeles</a>
                            </li>
                            <li>
                              <a>
                                <span>{findDayOfWeek(formattedDate1)}, {findDay(formattedDate1)} {findMonthOfWeek(formattedDate1)} ,{(new Date(formattedDate1)).getFullYear()}</span>
                              </a>
                            </li>
                            <li>
                              <a>
                                <span>Chicago</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div class="price_box">
                          <a href={hiddenNumber} className="call">
                            Call Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="roots_box">
                        <div class="list_box">
                          <ul>
                            <li>
                              <a>Atlanta </a>
                            </li>
                            <li>
                              <a>
                              <span>{findDayOfWeek(formattedDate2)}, {findDay(formattedDate2)} {findMonthOfWeek(formattedDate2)} ,{(new Date(formattedDate2)).getFullYear()}</span>
                              </a>
                            </li>
                            <li>
                              <a>
                                <span> New York</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div class="price_box">
                          <a href={hiddenNumber} className="call">
                            Call Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="roots_box">
                        <div class="list_box">
                          <ul>
                            <li>
                              <a>Denver </a>
                            </li>
                            <li>
                              <a>
                              <span>{findDayOfWeek(formattedDate3)}, {findDay(formattedDate3)} {findMonthOfWeek(formattedDate3)} ,{(new Date(formattedDate3)).getFullYear()}</span>
                              </a>
                            </li>
                            <li>
                              <a>
                                <span>Phoenix</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div class="price_box">
                          <a href={hiddenNumber} className="call">
                            Call Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="roots_box">
                        <div class="list_box">
                          <ul>
                            <li>
                              <a>Atlanta </a>
                            </li>
                            <li>
                              <a>
                              <span>{findDayOfWeek(formattedDate4)}, {findDay(formattedDate4)} {findMonthOfWeek(formattedDate4)} ,{(new Date(formattedDate4)).getFullYear()}</span>
                              </a>
                            </li>
                            <li>
                              <a>
                                <span>Fort Lauderdale</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div class="price_box">
                          <a href={hiddenNumber} className="call">
                            Call Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="col-12 col-md-12 bg-light p-3 my-4 border border-1 rounded mx-auto">
                <div className="row justify-content-between">
                  <div className="col-12 col-xl-7 col-lg-7">
                    <div className="row text-center">
                      <div className="col-3 col-xl-auto my-auto">
                        <div className="fw-semibold">LOS ANGELES</div>
                        <div className="text-white-1 text-nowrap">1:15 PM</div>
                      </div>
                      <div className="col text-center my-auto">
                        <div className="flightLine">
                          <div />
                          <div />
                          <div />
                        </div>
                        <div className="my-3 text-white-1">
                          5h 4m <br />{" "}
                          <span className="flight_stops">One Stop</span>
                        </div>
                      </div>
                      <div className="col-3 col-xl-auto my-auto">
                        <div className="fw-semibold">SEATTLE</div>
                        <div className="text-white-1 text-nowrap">8:24 PM</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-xl-5 col-lg-5 my-auto">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-end">
                        <div className="fw-semibold">US$103</div>
                        <div className="text-white-1 text-nowrap">10 Deals</div>
                      </div>
                      <button
                        onClick={() =>
                          suggestFlightClick(
                            "LOS ANGELES",
                            "SEATTLE",
                            "SEA",
                            "LAX"
                          )
                        }
                        className="btn"
                      >
                        View Deal <i className="icofont-double-right" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-12 bg-light p-3 my-4 border border-1 rounded mx-auto">
                <div className="row justify-content-between">
                  <div className="col-12 col-xl-7 col-lg-7">
                    <div className="row text-center">
                      <div className="col-3 col-xl-auto my-auto">
                        <div className="fw-semibold">ATLANTA</div>
                        <div className="text-white-1 text-nowrap">4:26 PM</div>
                      </div>
                      <div className="col text-center my-auto">
                        <div className="flightLine">
                          <div />
                          <div />
                        </div>
                        <div className="my-3 text-white-1">
                          1h 31m <br />{" "}
                          <span className="flight_stops">Non Stop</span>
                        </div>
                      </div>
                      <div className="col-3 col-xl-auto my-auto">
                        <div className="fw-semibold">TAMPA</div>
                        <div className="text-white-1 text-nowrap">6:02 PM</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-xl-5 col-lg-5 my-auto">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-end">
                        <div className="fw-semibold">US$36</div>
                        <div className="text-white-1 text-nowrap">10 Deals</div>
                      </div>
                      <button
                        onClick={() =>
                          suggestFlightClick("ATLANTA", "TAMPA", "TPA", "ATL")
                        }
                        className="btn"
                      >
                        View Deal <i className="icofont-double-right" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-12 bg-light p-3 my-4 border border-1 rounded mx-auto">
                <div className="row justify-content-between">
                  <div className="col-12 col-xl-7 col-lg-7">
                    <div className="row text-center">
                      <div className="col-3 col-xl-auto my-auto">
                        <div className="fw-semibold">DENVER</div>
                        <div className="text-white-1 text-nowrap">9:04 PM</div>
                      </div>
                      <div className="col text-center my-auto">
                        <div className="flightLine">
                          <div />
                          <div />
                        </div>
                        <div className="my-3 text-white-1">
                          2h 23m <br />{" "}
                          <span className="flight_stops">Non Stop</span>
                        </div>
                      </div>
                      <div className="col-3 col-xl-auto my-auto">
                        <div className="fw-semibold">CHICAGO</div>
                        <div className="text-white-1 text-nowrap">10:32 PM</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-xl-5 col-lg-5 my-auto">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-end">
                        <div className="fw-semibold">US$109</div>
                        <div className="text-white-1 text-nowrap">10 Deals</div>
                      </div>
                      <button
                        onClick={() =>
                          suggestFlightClick("DENVER", "CHICAGO", "ORD", "DEN")
                        }
                        className="btn"
                      >
                        View Deal <i className="icofont-double-right" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-12 bg-light p-3 my-4 border border-1 rounded mx-auto">
                <div className="row justify-content-between">
                  <div className="col-12 col-xl-7 col-lg-7">
                    <div className="row text-center">
                      <div className="col-3 col-xl-auto my-auto">
                        <div className="fw-semibold">SEATTLE</div>
                        <div className="text-white-1 text-nowrap">12:41 PM</div>
                      </div>
                      <div className="col text-center my-auto">
                        <div className="flightLine">
                          <div />
                          <div />
                        </div>
                        <div className="my-3 text-white-1">
                          5h 2m <br />{" "}
                          <span className="flight_stops">Non Stop</span>
                        </div>
                      </div>
                      <div className="col-3 col-xl-auto my-auto">
                        <div className="fw-semibold">NEW YORK</div>
                        <div className="text-white-1 text-nowrap">8:49 PM</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-xl-5 col-lg-5 my-auto">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-end">
                        <div className="fw-semibold">US$133</div>
                        <div className="text-white-1 text-nowrap">10 Deals</div>
                      </div>
                      <button
                        onClick={() =>
                          suggestFlightClick(
                            "SEATTLE",
                            "NEW YORK",
                            "JFK",
                            "SEA"
                          )
                        }
                        className="btn"
                      >
                        View Deal <i className="icofont-double-right" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-12 bg-light p-3 my-4 border border-1 rounded mx-auto">
                <div className="row justify-content-between">
                  <div className="col-12 col-xl-7 col-lg-7">
                    <div className="row text-center">
                      <div className="col-3 col-xl-auto my-auto">
                        <div className="fw-semibold">LOS ANGELES</div>
                        <div className="text-white-1 text-nowrap">12:50 PM</div>
                      </div>
                      <div className="col text-center my-auto">
                        <div className="flightLine">
                          <div />
                          <div />
                          <div />
                        </div>
                        <div className="my-3 text-white-1">
                          3h 05m <br />{" "}
                          <span className="flight_stops">One Stop</span>
                        </div>
                      </div>
                      <div className="col-3 col-xl-auto my-auto">
                        <div className="fw-semibold">PARIS</div>
                        <div className="text-white-1 text-nowrap">12:21 PM</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-xl-5 col-lg-5 my-auto">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-end">
                        <div className="fw-semibold">US$524</div>
                        <div className="text-white-1 text-nowrap">10 Deals</div>
                      </div>
                      <button
                        onClick={() =>
                          suggestFlightClick(
                            "LOS ANGELES",
                            "PARIS",
                            "CDG",
                            "LAX"
                          )
                        }
                        className="btn"
                      >
                        View Deal <i className="icofont-double-right" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RecomendedFlight;
