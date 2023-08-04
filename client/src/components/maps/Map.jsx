import {
  useJsApiLoader,
  GoogleMap,
  Autocomplete,
  DirectionsRenderer,
} from '@react-google-maps/api';
import { useState, useRef } from 'react';

const center = { lat: 32.97, lng: -117.11 };

export default function Map() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  });

  const [directionResponse, setDirectionResponse] = useState(null);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef();

  /** @type React.MutableRefObject<HTMLInputElement> */
  const destinationRef = useRef();

  if (!isLoaded) {
    return <div> Loading... </div>;
  }

  async function calculateRoute(event) {
    event.preventDefault();
    if (originRef.current.value === '' || destinationRef.current.value === '') {
      return;
    }

    const directionsService = new google.maps.DirectionsService();

    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
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

  return (
    <div style={styles.maps}>
      <form onSubmit={calculateRoute}>
        <Autocomplete>
          <input placeholder="To" ref={originRef}></input>
        </Autocomplete>
        <Autocomplete>
          <input placeholder="Destination" ref={destinationRef}></input>
        </Autocomplete>
        <button onClick={calculateRoute}>Submit</button>
      </form>
      {distance !== '' ? (<p>{distance}</p>) : (<></>)}
      {duration !== '' ? (<p>{duration}</p>) : (<></>)}
      <GoogleMap
        center={center}
        zoom={15}
        mapContainerStyle={{ width: '100%', height: '100%' }}
      >
        {/* Display markers, directions, etc. */}
        {directionResponse && (
          <DirectionsRenderer directions={directionResponse} />
        )}
      </GoogleMap>
    </div>
  );
}
