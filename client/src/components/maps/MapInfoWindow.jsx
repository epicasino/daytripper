export default function MapInfoWindow({ props }) {
  return (
    <div className="absolute bottom-2 p-5 bg-sand rounded-lg"
    >
      {props.placeDetails ? (
        <>
          {/* InfoWindow proving to be buggy, debug if have spare time, if not then its ok */}
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
          {/* Button that will save location to trip data when clicked */}
          <button
            type="button"
            className="bg-green font-kawaii text-white px-4 py-1 m-1 rounded-full hover:bg-sage"
            onClick={props.saveWaypoint}
          >
            Save Location
          </button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
