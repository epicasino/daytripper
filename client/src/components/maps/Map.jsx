import {
  useJsApiLoader,
  GoogleMap,
  Autocomplete,
  DirectionsRenderer,
  InfoWindow,
} from '@react-google-maps/api';
import { useState, useRef } from 'react';

const center = { lat: 32.97, lng: -117.11 };

const googleMapLibraries = ['places'];

export default function Map() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: googleMapLibraries,
  });

  const [directionResponse, setDirectionResponse] = useState(null);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(null);

  const originRef = useRef();

  const destinationRef = useRef();

  if (!isLoaded) {
    return <div> Loading... </div>;
  }

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

  const styles = {
    maps: {
      position: 'absolute',
      screenLeft: 0,
      screenTop: 0,
      height: '100vh',
      width: '100vw',
    },
  };

  const onLoad = (infoWindow) => {
    console.log('infoWindow: ', infoWindow);
  };

  const placeIdToCoords = async (e) => {
    setSelectedLocation(null);
    if (e.placeId) {
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
        <button onClick={calculateRoute} className='bg-green font-kawaii text-white px-4 py-1 m-1 rounded-full hover:bg-sage'>Submit</button>
      </form>
      {distance !== '' ? <p>{distance}</p> : <></>}
      {duration !== '' ? <p>{duration}</p> : <></>}
      <GoogleMap
        center={center}
        zoom={15}
        mapContainerStyle={{ width: '50%', height: '50%' }}
        onClick={placeIdToCoords}
      >
        {selectedLocation ? (
          <InfoWindow
            onLoad={onLoad}
            position={selectedLocation}
          >
            <h1>InfoWindow</h1>
          </InfoWindow>
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
