import {
  useJsApiLoader,
  GoogleMap,
  Autocomplete,
  DirectionsRenderer,
} from '@react-google-maps/api';
import { useState, useRef } from 'react';
import MapInfoWindow from './MapInfoWindow';

// Can remove later, used to center maps to coordinates when loaded
const center = { lat: 32.97, lng: -117.11 };

const googleMapLibraries = ['places'];

export default function Map() {
  // Loads the Google Map API w/ hook, renders when its fully loaded
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    mapIds: 'ca50b27b41e91954',
    libraries: googleMapLibraries,
    version: 'beta',
  });

  const styles = {
    maps: {
      position: 'absolute',
      screenLeft: 0,
      screenTop: 0,
      height: '100vh',
      width: '100vw',
    },
  };

  // useState for directions
  const [directionResponse, setDirectionResponse] = useState(null);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');

  // useRefs for direction box inputs
  const originRef = useRef();
  const destinationRef = useRef();

  // useState for user's clicked coordinates and place details
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [placeDetails, setPlaceDetails] = useState(null);

  // Loading text if Google Maps API isn't loaded
  if (!isLoaded) {
    return <div> Loading... </div>;
  }


  // Calculates routes when form is submitted
  async function calculateRoute(event) {
    event.preventDefault();
    if (originRef.current.value === '' || destinationRef.current.value === '') {
      return;
    }

    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();

    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      // waypoints: [{location: center}],
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });

    setDirectionResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }

  // When user clicks on map, if they click on a marker, this will trigger and get coordinates from placeId, along with place details
  const placeIdToCoords = async (e) => {
    setSelectedLocation(null);
    setPlaceDetails(null);
    if (e.placeId) {
      // eslint-disable-next-line no-undef
      const geocoder = new google.maps.Geocoder();
      const location = await geocoder
        .geocode({ placeId: e.placeId })
        .then((data) => {
          return {
            lat: data.results[0].geometry.location.lat(),
            lng: data.results[0].geometry.location.lng(),
          };
        });
      console.log(location);
      setSelectedLocation(location);

      const detailSearch = await fetch(
        `http://localhost:3001/api/placeDetails/${e.placeId}`
      )
        .then((data) => data.json())
        .then((json) => json.result);

      console.log(detailSearch);
      setPlaceDetails(detailSearch);
    }
  };

  return (
    <div style={styles.maps}>
      <form onSubmit={calculateRoute}>
        <Autocomplete>
          <input placeholder="From" ref={originRef}></input>
        </Autocomplete>
        <Autocomplete>
          <input placeholder="Destination" ref={destinationRef}></input>
        </Autocomplete>
        <button
          onClick={calculateRoute}
          className="bg-green font-kawaii text-white px-4 py-1 m-1 rounded-full hover:bg-sage"
        >
          Submit
        </button>
      </form>
      {distance !== '' ? <p>{distance}</p> : <></>}
      {duration !== '' ? <p>{duration}</p> : <></>}
      <GoogleMap
        center={center}
        zoom={15}
        mapContainerStyle={{ width: '75%', height: '75%' }}
        mapContainerClassName="mapContainer"
        onClick={placeIdToCoords}
      >
        {selectedLocation ? (
          // When there is a selectedLocation, an InfoWindow component loads, passing down props for location & place details
          <MapInfoWindow props={{ selectedLocation, placeDetails }} />
        ) : (
          <></>
        )}
        {/* Display markers, directions, etc. */}
        {directionResponse && (
          <DirectionsRenderer directions={directionResponse} />
        )}
      </GoogleMap>
    </div>
  );
}
