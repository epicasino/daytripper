export default function TripsBox({ userData }) {
  return (
    <section className="flex flex-row justify-center">
      <div
        className="tripsContainer border-box rounded-lg w-3/4 p-4 border-4
       bg-green font-kawaii text-white border-sage m-6 flex flex-col items-center"
      >
        <h2>Trips</h2>
        {userData.trips?.map((trip) => {
          return (
            <article
              key={trip._id}
              className="border-box rounded-lg h-fit w-100 p-4 border-4 bg-dirt font-kawaii text-white border-sand m-2"
            >
              <h5>From: {trip.startLocation}</h5>
              <h5>To: {trip.destinationLocation}</h5>
              <h5>Waypoints: </h5>
              {trip.waypoints.map((waypoint) => {
                return <p key={waypoint.name}>{waypoint.name}</p>;
              })}
            </article>
          );
        })}
      </div>
    </section>
  );
}
