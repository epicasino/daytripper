import React, { useState } from 'react';
import Auth from '../../utils/auth';
import { Autocomplete } from '@react-google-maps/api';
import { useMutation } from '@apollo/client';
import WaypointBox from './WaypointBox';
import { ADD_TRIP } from '../../utils/mutations';

export default function TripDataBox({ props }) {
  return (
    <>
    <div className="bg-terracotta">
      <h1 className='text-white'>Your Trip</h1>
      <form onSubmit={props.calculateRoute} className="tripForm">
        <Autocomplete>
          <input placeholder="From" ref={props.originRef}></input>
        </Autocomplete>
        <Autocomplete>
          <input placeholder="Destination" ref={props.destinationRef}></input>
        </Autocomplete>
        <button
          onClick={props.calculateRoute}
          className="bg-green font-kawaii text-white px-4 py-1 m-1 rounded-full hover:bg-sage"
        >
          Submit
        </button>
      </form>
      <div className="tripDetails">
        <h1 className='text-white'>Trip Details</h1>
        {props.distance !== '' ? <p>Distance: {props.distance}</p> : <></>}
        {props.duration !== '' ? <p>Duration: {props.duration}</p> : <></>}
        {props.waypoints.map((waypoint) => (
          <WaypointBox key={waypoint.placeId} props={waypoint} />
        ))}
      </div>
      {props.directionResponse && (
        <button 
      className='bg-green font-kawaii text-white px-4 py-1 m-1 rounded-full hover:bg-sage'
      type="button" onClick={saveTrip}>
          Save Trip
        </button>
      )}
    </div>
    </>
  );
}

// distance, duration, originRef, destinationRef, waypoints
