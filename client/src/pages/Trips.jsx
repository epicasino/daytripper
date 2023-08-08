import Navbar from '../components/navbar/Navbar';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
// import { REMOVE_TRIP } from '../utils/mutations';
import Auth from '../utils/auth';

export default function Trips() {
  const { loading, data } = useQuery(QUERY_ME, { fetchPolicy: 'network-only' });
  // const [removeTrip, { error }] = useMutation(REMOVE_TRIP);

  const userData = data?.me || {};

  // console.log(userData);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Checks to see if user is logged in , if not, returns with this
  if (!Auth.loggedIn()) {
    return (
      <div>
        <Navbar />
        <h1>Well, this is awkward...</h1>
        <h1>You need to be logged in to see your saved trips!</h1>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <h1>Hello, {userData.username}!</h1>
      <div className="tripsContainer">
        {userData.trips?.map((trip) => {
          return (
            <div key={trip._id}>
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
