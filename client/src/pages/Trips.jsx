import Navbar from "../components/navbar/Navbar";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
// import { REMOVE_TRIP } from '../utils/mutations';
import Auth from "../utils/auth";

export default function Trips() {
  const { loading, data } = useQuery(QUERY_ME, { fetchPolicy: "network-only" });
  // const [removeTrip, { error }] = useMutation(REMOVE_TRIP);

  const userData = data?.me || {};

  // console.log(userData);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Checks to see if user is logged in , if not, returns with this
  if (!Auth.loggedIn()) {
    return (
      <div className="bg-sage h-screen font-kawaii text-white text-center align-middle object-contain">
        <Navbar />
        <h1 className="m-2 p-xl">Well, this is awkward...</h1>
        <h1>You need to be logged in to see your saved trips!</h1>
      </div>
    );
  }
  // commenting out height and width removed white on bottom
  const styles = {
    tripsContainer: {
      // height: '100vh',
      // width: '100vw'
    },
  };

  return (
    <div
      className="bg-gradient-to-r from-terracotta via-sand to-sage"
      style={styles.tripsContainer}
    >
      <Navbar />
      <header className="text-center font-kawaii text-white text-3xl p-1 bg-terracotta border-b-2 border-green ">
        My Saved Trips
      </header>
      <subheader className="text-center">
        <h1 className="font-kawaii text-white m-4">
          Hello, {userData.username}!
        </h1>
        <p className="font-kawaii text-white m-4">
          A look at your saved trips:
        </p>
      </subheader>
      <div className="flex flex-row justify-center">
        <div
          className="tripsContainer border-box rounded-lg w-2/4 p-4 border-4
       bg-green font-kawaii text-white border-sage m-6 flex flex-col items-center"
        >
          <h2>Trips</h2>
          {userData.trips?.map((trip) => {
            return (
              <div
                key={trip._id}
                className="border-box rounded-lg h-fit p-4 border-4 bg-dirt font-kawaii text-white border-sand m-2"
              >
                <h5>From: {trip.startLocation}</h5>
                <h5>To: {trip.destinationLocation}</h5>
                <h5>Waypoints: </h5>
                {trip.waypoints.map((waypoint) => {
                  return <p key={waypoint.name}>{waypoint.name}</p>;
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// {
//   __typename: 'User',
//   _id: '64d12ed6d7f1dd83872ccff6',
//   username: 'bob2',
//   email: 'bob@gmail.com',
//   trips: [
//     {
//       __typename: 'Trip',
//       _id: '64d1a2508616b29650c2532c',
//       destinationLocation: 'San Marcos, CA',
//       startLocation: 'San Diego, CA',
//       waypoints: [
//         {
//           __typename: 'Waypoint',
//           formatted_address: '14823 Pomerado Rd, Poway, CA 92064, USA',
//           lat: '32.9805582',
//           lng: '-117.0602928',
//           name: 'Target',
//           placeId: 'ChIJtUElhQ7624AR0hwMtfwVkdA'
//         }
//       ]
//     }
//   ]
// }
