import { InfoWindow } from '@react-google-maps/api';

export default function MapInfoWindow({ props }) {
  return (
    <InfoWindow position={props.selectedLocation}>
      {props.placeDetails ? (
        <>
          <h5 className="font-bold">{props.placeDetails.name}</h5>
          <p>{props.placeDetails.formatted_address}</p>
          {props.placeDetails.website ? (
            <a
              href={props.placeDetails.website}
              target="_blank"
              rel="noreferrer"
            >
              <p>Website</p>
            </a>
          ) : (
            <p className="text-sm">Website: N/A</p>
          )}
          {props.placeDetails.url && (
            <a href={props.placeDetails.url} target="_blank" rel="noreferrer">
              View in Google Maps
            </a>
          )}
          <button
            type="button"
            className="block text-base hover:text-green hover:underline"
          >
            Save Location
          </button>
        </>
      ) : (
        <></>
      )}
    </InfoWindow>
  );
}
