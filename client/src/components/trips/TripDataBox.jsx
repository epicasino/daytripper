import React, { useState } from "react";
import Auth from "../../utils/auth";
import { Autocomplete } from "@react-google-maps/api";
import { useMutation } from "@apollo/client";
import WaypointBox from "./WaypointBox";
import { ADD_TRIP } from "../../utils/mutations";

export default function TripDataBox({ props }) {
  const [from, setFrom] = useState("");
  const [destination, setDestination] = useState("");

  const [addTrip, { error }] = useMutation(ADD_TRIP);

  const trip = {
    startLocation: from,
    destinationLocation: destination,
    waypoints: props.waypoints,
  };

  const saveTrip = async () => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if (!token) {
      return false;
    }
    try {
      const { data } = await addTrip({
        variables: {
          start: trip.startLocation,
          destination: trip.destinationLocation,
          waypoints: trip.waypoints,
        },
      });
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  // console.log(trip)

  return (
    <>
      <h1>Your Trip</h1>
      <form onSubmit={props.calculateRoute} className="tripForm">
        <Autocomplete>
          <input
            placeholder="From"
            ref={props.originRef}
            onChange={(e) => setFrom(e.target.value)}
          ></input>
        </Autocomplete>
        <Autocomplete>
          <input
            placeholder="Destination"
            ref={props.destinationRef}
            onChange={(e) => setDestination(e.target.value)}
          ></input>
        </Autocomplete>
        <button
          onClick={props.calculateRoute}
          className="bg-green font-kawaii text-white px-4 py-1 m-1 rounded-full hover:bg-sage"
        >
          Submit
        </button>
      </form>
      <div className="tripDetails">
        <h1>Trip Details</h1>
        {props.distance !== "" ? <p>Distance: {props.distance}</p> : <></>}
        {props.duration !== "" ? <p>Duration: {props.duration}</p> : <></>}
        {props.waypoints.map((waypoint) => (
          <WaypointBox key={waypoint.placeId} props={waypoint} />
        ))}
      </div>
      {props.directionResponse && (
        <button type="button" onClick={saveTrip}>
          Save Trip
        </button>
      )}
    </>
  );
}

// distance, duration, originRef, destinationRef, waypoints
