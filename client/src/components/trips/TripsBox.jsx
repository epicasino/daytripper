import { useMutation } from '@apollo/client';
import { REMOVE_TRIP } from '../../utils/mutations';

export default function TripsBox({ userData }) {
  const [removeTrip, { error }] = useMutation(REMOVE_TRIP);

  const deleteTrip = async (e) => {
    const selectedTrip = e.target.dataset.id;

    try {
      const { data } = await removeTrip({
        variables: {
          tripId: selectedTrip,
        },
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-row justify-center">
      <section
        className="tripsContainer border-box rounded-lg w-3/4 p-4 border-4
       bg-green font-kawaii text-white border-sage m-6 flex flex-col items-center"
      >
        <h2>Trips</h2>
        {userData.trips?.map((trip) => {
          return (
            <article
              key={trip._id}
              className="border-box rounded-lg h-fit w-100 p-4 border-4 bg-dirt font-kawaii text-white border-sand m-2 relative"
            >
              <h5>From: {trip.startLocation}</h5>
              <h5>To: {trip.destinationLocation}</h5>
              {trip.waypoints.length !== 0 ? (
                <h5>Waypoints: </h5>
              ) : (
                <small>No Waypoints...</small>
              )}
              <ol className="list-decimal">
                {trip.waypoints.map((waypoint) => {
                  return (
                    <li className="ms-5" key={waypoint.name}>
                      {waypoint.name}
                    </li>
                  );
                })}
              </ol>
              <button
                type="button"
                className="absolute -right-1 -top-2 bg-terracotta py-1 px-2 rounded-full border-coral border-2 text-center"
                data-id={trip._id}
                onClick={deleteTrip}
              >
                X
              </button>
            </article>
          );
        })}
      </section>
    </div>
  );
}
