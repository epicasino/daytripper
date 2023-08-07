import React, { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import WaypointBox from './WaypointBox';

export default function TripDataBox({ props }) {
  const [from, setFrom] = useState('');
  const [destination, setDestination] = useState('');

  const trip = {
    startLocation: from,
    destinationLocation: destination,
    waypoints: props.waypoints,
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
        {props.distance !== '' ? <p>Distance: {props.distance}</p> : <></>}
        {props.duration !== '' ? <p>Duration: {props.duration}</p> : <></>}
        {props.waypoints.map((waypoint) => (
          <WaypointBox key={waypoint.placeId} props={waypoint} />
        ))}
      </div>
      {props.directionResponse && <button type="button">Save Trip</button>}
    </>
  );
}

// distance, duration, originRef, destinationRef, waypoints
