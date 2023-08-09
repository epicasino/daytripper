import Auth from '../../utils/auth';
import { Autocomplete } from '@react-google-maps/api';
import { useMutation } from '@apollo/client';
import WaypointBox from './WaypointBox';
import { ADD_TRIP } from '../../utils/mutations';
import { useEffect } from 'react';

export default function TripDataBox({ props }) {
  const [addTrip, { error }] = useMutation(ADD_TRIP);

  const saveTrip = async (e) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if (!token) {
      // If user isn't logged in, 'save trip' button's text is replace with this
      e.target.innerHTML = 'You need to be logged in!';
    }

    const formattedWaypoints = props.waypoints.map((waypoint) => {
      return {
        formatted_address: waypoint.formatted_address,
        lat: waypoint.geometry.location.lat,
        lng: waypoint.geometry.location.lng,
        name: waypoint.name,
        placeId: waypoint.placeId,
      };
    });
    // console.log(formattedWaypoints);

    const trip = {
      startLocation: props.originRef.current.value,
      destinationLocation: props.destinationRef.current.value,
      waypoints: formattedWaypoints,
    };

    try {
      // console.log(trip.waypoints);
      const { data } = await addTrip({
        variables: {
          start: trip.startLocation,
          destination: trip.destinationLocation,
          waypoints: trip.waypoints,
        },
      });
      // console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  // console.log(trip)

  return (
    <>
      <div className="bg-terracotta">
        <h1 className="text-white">Your Trip</h1>
        <form onSubmit={props.calculateRoute} className="tripForm grid grid-cols-2 gap-2">
          <Autocomplete>
            <input
              className="p-2 col-span-1"
              placeholder="From"
              ref={props.originRef}
            ></input>
          </Autocomplete>
          <Autocomplete>
            <input
              className="p-2 col-span-1"
              placeholder="Destination"
              ref={props.destinationRef}
            ></input>
          </Autocomplete>
          <button
            onClick={props.calculateRoute}
            className="bg-green font-kawaii text-white py-1 rounded-full hover:bg-sage col-span-2"
          >
            Submit
          </button>
        </form>
        <div className="tripDetails">
          <h1 className="text-white">Trip Details</h1>
          {props.duration && props.distance ? (
            <div className="bg-white flex flex-col items-center justify-center my-5 rounded">
              <p>Distance: {props.distance}</p>
              <p>Duration: {props.duration}</p>
            </div>
          ) : (
            <></>
          )}
          {props.waypoints.map((waypoint) => (
            <WaypointBox key={waypoint.placeId} props={waypoint} />
          ))}
        </div>
        {props.directionResponse && (
          <button
            className="bg-green font-kawaii text-white px-4 py-1 m-1 rounded-full hover:bg-sage"
            type="button"
            onClick={saveTrip}
          >
            Save Trip
          </button>
        )}
      </div>
    </>
  );
}

// distance, duration, originRef, destinationRef, waypoints
