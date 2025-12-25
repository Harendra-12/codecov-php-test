import React, { useEffect, useState } from "react";
import FlightLoader from "./FlightLoader";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { generalGetFunction } from "../Model/GlobalFunction";
import { markupPercentage } from "../GlobalData/GlobalMetaData";

function SearchFlightLookUp() {
    const dispatch = useDispatch()
  const navigate = useNavigate();
  const url = window.location;
  const queryParams = new URLSearchParams(url.search);
  const page = queryParams.get("page");
  const [travelType, setTravelType] = useState(
    decodeURIComponent(queryParams.get("travel_type"))
  );
  const [originCode, setOriginCode] = useState(queryParams.get("origincode"));
  const [originIataCodeCity, setOriginIataCodeCity] = useState(
    decodeURIComponent(queryParams.get("origin_iata_code_city"))
  );
  const [originCityName, setOriginCityName] = useState(
    decodeURIComponent(queryParams.get("origin_cityname"))
  );
  const [destinationCode, setDestinationCode] = useState(
    queryParams.get("destinationcode")
  );
  const [destinationIataCodeCity, setDestinationIataCodeCity] = useState(
    decodeURIComponent(queryParams.get("destination_iata_code_city"))
  );
  const [destinationCityName, setDestinationCityName] = useState(
    decodeURIComponent(queryParams.get("destination_cityname"))
  );
  const [dateFrom, setDateFrom] = useState(queryParams.get("date_from"));
  const [dateTo, setDateTo] = useState(queryParams.get("date_to"));
  const [traveller, setTraveller] = useState(queryParams.get("traveller"));
  const [fareClass, setFareClass] = useState(
    decodeURIComponent(queryParams.get("fare_class"))
  );
  const [noOfAdults, setNoOfAdults] = useState(queryParams.get("no_of_adults"));
  const [noOfChild, setNoOfChild] = useState(queryParams.get("no_of_child"));
  const [noOfInfant, setNoOfInfant] = useState(queryParams.get("no_of_infant"));

  useEffect(() => {
    if (
        travelType === null ||
        originCode === null ||
        originIataCodeCity === null ||
        originCityName === null ||
        destinationCode === null ||
        destinationIataCodeCity === null ||
        destinationCityName === null ||
        dateFrom === null ||
        dateTo === null ||
        traveller === null ||
        fareClass === null ||
        noOfAdults === null ||
        noOfChild === null ||
        noOfInfant ===null
    ) {
        navigate("/")
      
    } else {
       
        function suggestFlightClick() {
            dispatch({
              type: "SET_ADULT",
              adult: noOfAdults,
            });
            dispatch({
              type: "SET_CHILDREN",
              children: noOfChild,
            });
            dispatch({
              type: "SET_INFANTS",
              infants: noOfInfant,
            });
            window.scrollTo(0, 0);
            dispatch({
              type: "SET_FLIGHTWAY",
              flightWay: travelType,
            });
            dispatch({
              type: "SET_DEPARTUREDATE",
              departureDate: dateFrom,
            });
            localStorage.setItem("departureDate", dateFrom);
            dispatch({
              type: "SET_LOADING",
              loading: true,
            });
            dispatch({
              type: "SET_ARRIVAL",
              arrival: destinationCityName,
            });
            dispatch({
              type: "SET_ARRIVALITACODE",
              arrivalItaCode: destinationCode,
            });
            dispatch({
              type: "SET_DEPARTURE",
              departure: originCityName,
            });
            dispatch({
              type: "SET_DEPARTUREITACODE",
              departureItaCode: originCode,
            });
            dispatch({
              type: "SET_TRIPCLASS",
              tripClass: fareClass,
            });
            dispatch({
              type: "SET_TOTALPASSENGER",
              totalPassenger: traveller,
            });
            localStorage.setItem("totalPassenger", traveller);
            localStorage.setItem("tripClass", fareClass);
            localStorage.setItem("adult", noOfAdults);
            localStorage.setItem("children", noOfChild);
            localStorage.setItem("infants", noOfInfant);
            localStorage.setItem("departure", originCityName);
            localStorage.setItem("departureItaCode", originCode);
            localStorage.setItem("arrival", destinationCityName);
            localStorage.setItem("arrivalItaCode", destinationCode);
            async function fetchData() {
              // Dispatch data to redux for instant change
              var offerData = await generalGetFunction(
                `v2/shopping/flight-offers?originLocationCode=${originCode}&destinationLocationCode=${destinationCode}&currencyCode=USD&departureDate=${dateFrom.split("/")[2]}-${dateFrom.split("/")[0]}-${dateFrom.split("/")[1]}&adults=${noOfAdults}&travelClass=ECONOMY&children=${noOfChild}&infants=${noOfInfant}&max=90${travelType==="One way"?"":`&returnDate=${dateTo.split("/")[2]}-${dateTo.split("/")[0]}-${dateTo.split("/")[1]}`}`
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
                    adultPrice: Number(Number(item.travelerPricings[0]["price"]["total"])+Number(markupPercentage*Number(item.travelerPricings[0]["price"]["total"]))).toFixed(2),
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

          suggestFlightClick()
    }
  }, [
    travelType,
    originCode,
    originIataCodeCity,
    originCityName,
    destinationCode,
    destinationIataCodeCity,
    destinationCityName,
    dateFrom,
    dateTo,
    traveller,
    fareClass,
    noOfAdults,
    noOfChild,
    noOfInfant,
  ]);
  return (
    <>
      <FlightLoader />
    </>
  );
}

export default SearchFlightLookUp;
