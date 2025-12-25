import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { email, websiteName } from "../GlobalData/GlobalMetaData";
import { useParams } from 'react-router-dom';
import axios from "axios";
import FlightBookingLoader from "./FlightBookingLoader";

function PreBooking() {
  //   const bookingDetails = useSelector((state) => state.bookingDetails);
  const { leadId } = useParams();
  const navigate = useNavigate();
  const [bookingDetails, setBookingDetails] = useState();
  const tripClass = useSelector((state) => state.tripClass);
  const flightWay = useSelector((state) => state.flightWay);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(
        `https://api.theinfinitytravel.com/index.php/api/flight/lead/${leadId}`
      )
      .then((res) => {
        if(res.data.lead.length===0){
            navigate("/");
            setLoading(false);
        }else{
            setLoading(false);
            setBookingDetails(res.data);
        }
       
      })
      .catch((err) => {
        setLoading(false);
        navigate("/");
      });
  }, []);
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

  const formatTimeToAmPm = (timeString) => {
    const [hours, minutes] = timeString.split(":");
    const hour = parseInt(hours, 10);
    const minute = parseInt(minutes, 10);
    const period = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
    const formattedMinute = minute < 10 ? `0${minute}` : minute;

    return `${formattedHour}:${formattedMinute} ${period}`;
  };
  return (
    <>
    {loading?<FlightBookingLoader />:  <section className="flight_list mt-9 main_wrapper mb-2">
        <div className="container">
          <div className="row">
            <div className="flight_list_item row col-xl-9 gx-0">
              <div className="flight_booking_id pb-3 border-bottom">
                <div className="content text-center">
                  <div className="progressBar mx-auto">
                    <div className="a">1</div>
                    <div className="b">2</div>
                    <div className="c">3</div>
                  </div>
                  <h4>Congratulations!</h4>
                  <div className="subtext">
                    You have successfully completed your booking
                  </div>
                  <div className="details">
                    <div className="booking">
                      AirTkt Booking ID:{" "}
                      <span>{bookingDetails.lead.lead_id}</span>
                    </div>
                    <div className="email">
                      Verification is completed, E-ticket shall be sent at{" "}
                      <span>{bookingDetails.lead.email}</span>
                    </div>
                    <div className="disclaimer">
                      Please allow 1-5 business hours for E-Ticket processing.
                    </div>
                  </div>
                </div>
              </div>
              <h4 className="p-2 mt-3" style={{ color: "#006ee3" }}>
                Itinerary (Flight Details)
              </h4>
              <div className="d-flex flex-wrap my-auto justify-content-evenly">
                <div className="col-xl-12 row justify-content-start pt-1 border-bottom px-2">
                  <div className="col-12 col-xl-4 text-left text-xl-center">
                    <div className="fw-semibold mb-3">Customer Name</div>
                    <div className="mb-3">{bookingDetails.lead.cxname}</div>
                  </div>
                  <div className="col-12 col-xl-4 text-left text-xl-center">
                    <div className="fw-semibold mb-3">Customer Email</div>
                    <div className="mb-3">{bookingDetails.lead.email}</div>
                  </div>
                  <div className="col-12 col-xl-4 text-left text-xl-center">
                    <div className="fw-semibold mb-3">
                      Total No. Of Passengers
                    </div>
                    <div className="mb-3">{bookingDetails.lead.total_pax}</div>
                  </div>
                </div>

                <div className="col-12 col-xl-12 row pt-4 pb-3 px-2">
                  <div className="col-4 my-auto">
                    <div className="flightTime">
                      {formatTimeToAmPm(bookingDetails.lead.flightdata.itineraries[0].origin_departure_time
                        .split("T")[1]
                        .slice(0, 5))}
                    </div>
                    <div className="flightPlace">
                      {
                        bookingDetails.lead.flightdata.itineraries[0]
                          .origin_iatacode
                      }
                    </div>
                    <div className="flightPlaceDetail">
                      {
                        bookingDetails.lead.flightdata.itineraries[0]
                          .origin_city
                      }
                    </div>
                  </div>
                  <div className="col-4 durationWrap my-auto">
                    <div className="duration">
                      {
                        bookingDetails.lead.flightdata.itineraries[0].duration.match(
                          /PT(.*?)H/
                        )?.[1]
                      }
                      H{" "}
                      {bookingDetails.lead.flightdata.itineraries[0].duration.match(
                        /H(.*?)M/
                      )?.[1] === undefined
                        ? ""
                        : `${
                            bookingDetails.lead.flightdata.itineraries[0].duration.match(
                              /H(.*?)M/
                            )?.[1]
                          }M`}{" "}
                      <span>travel time</span>
                    </div>
                    <div className="durationDivider my-2">
                      <div />
                      <div />
                      <div />
                    </div>
                    <div className="stops">
                      {bookingDetails.lead.flightdata.itineraries.length - 1 ===
                      0
                        ? "Non"
                        : bookingDetails.lead.flightdata.itineraries.length -
                          1}{" "}
                      stop
                    </div>
                  </div>
                  <div className="col-4 my-auto text-end">
                    <div className="flightTime">
                      {formatTimeToAmPm(bookingDetails.lead.flightdata.itineraries[0].destination_departure_time
                        .split("T")[1]
                        .slice(0, 5))}
                    </div>
                    <div className="flightPlace">
                      {
                        bookingDetails.lead.flightdata.itineraries[0]
                          .destination_iatacode
                      }
                    </div>
                    <div className="flightPlaceDetail">
                      {
                        bookingDetails.lead.flightdata.itineraries[0]
                          .destination_city
                      }
                    </div>
                  </div>
                  <div className="col-12 my-2">
                    <div className="bs">
                      FL-
                      {
                        bookingDetails.lead.flightdata.itineraries[0]
                          .aircraft_number
                      }{" "}
                      <span className="fw-semibold">{tripClass} Class</span>{" "}
                      {
                        bookingDetails.lead.flightdata.itineraries[0]
                          .aircraft_code
                      }
                    </div>
                  </div>
                </div>
              </div>
              {bookingDetails.lead.flightdata.itineraries.length > 1 ? (
                <div className="col-12 col-xl-12 row pt-4 pb-3 px-2">
                  <div className="col-3 my-auto">
                    <div className="flightTime">
                      {bookingDetails.lead.flightdata.itineraries[1].origin_departure_time
                        .split("T")[1]
                        .slice(0, 5)}
                    </div>
                    <div className="flightPlace">
                      {
                        bookingDetails.lead.flightdata.itineraries[1]
                          .origin_iatacode
                      }
                    </div>
                    <div className="flightPlaceDetail">
                      {
                        bookingDetails.lead.flightdata.itineraries[1]
                          .origin_city
                      }
                    </div>
                  </div>
                  <div className="col-6 durationWrap my-auto">
                    <div className="duration">
                      {
                        bookingDetails.lead.flightdata.itineraries[1].duration.match(
                          /PT(.*?)H/
                        )?.[1]
                      }
                      H{" "}
                      {bookingDetails.lead.flightdata.itineraries[1].duration.match(
                        /H(.*?)M/
                      )?.[1] === undefined
                        ? ""
                        : `${
                            bookingDetails.lead.flightdata.itineraries[1].duration.match(
                              /H(.*?)M/
                            )?.[1]
                          }M`}{" "}
                      <span>travel time</span>
                    </div>
                    <div className="durationDivider my-2">
                      <div />
                      <div />
                      <div />
                    </div>
                    <div className="stops">
                      {bookingDetails.lead.flightdata.itineraries.length - 1 ===
                      0
                        ? "Non"
                        : bookingDetails.lead.flightdata.itineraries.length -
                          1}{" "}
                      stop
                    </div>
                  </div>
                  <div className="col-3 my-auto">
                    <div className="flightTime">
                      {bookingDetails.lead.flightdata.itineraries[1].destination_departure_time
                        .split("T")[1]
                        .slice(0, 5)}
                    </div>
                    <div className="flightPlace">
                      {
                        bookingDetails.lead.flightdata.itineraries[1]
                          .destination_iatacode
                      }
                    </div>
                    <div className="flightPlaceDetail">
                      {
                        bookingDetails.lead.flightdata.itineraries[1]
                          .destination_city
                      }
                    </div>
                  </div>
                  <div className="col-12 my-2">
                    <div className="bs">
                      FL-
                      {
                        bookingDetails.lead.flightdata.itineraries[1]
                          .aircraft_number
                      }{" "}
                      <span className="fw-semibold">{tripClass} Class</span>{" "}
                      {
                        bookingDetails.lead.flightdata.itineraries[1]
                          .aircraft_code
                      }
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
              <div className="info-box border-top">
                <h4 className="p-2 mt-3" style={{ color: "rgb(0, 110, 227)" }}>
                  Important
                </h4>
                <div className="content">
                  <ul>
                    <li>
                      Please note that we have successfully received your
                      booking confirmation.
                    </li>
                    <li>
                      Your official booking confirmation will be dispatched to
                      your designated email address within the next 1-5 business
                      days. Also, tickets once booked, cannot be altered,
                      cancelled or refunded.
                    </li>
                    <li>
                      We sincerely appreciate your choice in selecting{" "}
                      {websiteName}, and we are dedicated to ensuring your
                      experience with us is seamless and enjoyable. If you have
                      any questions or require further assistance, please feel
                      free to contact our esteemed customer service team at the
                      provided {email}.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 px-0 px-xl-2">
              <div className="tripSummary">
                <div className="border-bottom">
                  <h5>Trip Summary</h5>
                </div>
                <div className="content mt-2">
                  <div>Booking ID: {bookingDetails.lead.lead_id}</div>
                  <div>
                    {bookingDetails.lead.origin_city} to{" "}
                    {bookingDetails.lead.destination_city}
                  </div>
                  <div>{flightWay}</div>
                  <div>
                    {findDayOfWeek(bookingDetails.lead.fly_date)},
                    {findDay(bookingDetails.lead.fly_date)}{" "}
                    {findMonthOfWeek(bookingDetails.lead.fly_date)}{" "}
                    {new Date(bookingDetails.lead.fly_date).getFullYear()}
                  </div>
                  <div>{bookingDetails.lead.total_pax} Adult</div>
                  <div className="cost">
                    Final Cost: $
                    {Number(
                      bookingDetails.lead.flightdata.price.grandTotal
                    ).toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>}
    
    </>
  );
}

export default PreBooking;
