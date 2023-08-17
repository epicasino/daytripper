import TripsBox from '../components/trips/TripsBox';
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
      <div className="bg-gradient-to-r from-terracotta via-sand to-sage h-screen font-kawaii text-white text-center align-middle object-contain">
        <h1 className="m-2 p-xl">Well, this is awkward...</h1>
        <h1>You need to be logged in to see your saved trips!</h1>
      </div>
    );
  }
  // commenting out height and width removed white on bottom
  const styles = {
    tripsContainer: {
      minHeight: '100vh',
      maxWidth: '100vw',
      width: '100%',
    },
  };

  return (
    <main
      className="bg-gradient-to-r from-terracotta via-sand to-sage"
      style={styles.tripsContainer}
    >
      <header className="text-center font-kawaii text-white text-2xl p-1 bg-terracotta border-b-2 border-green">
        My Saved Trips
      </header>
      <subheader className="text-center">
        <h1 className="font-kawaii text-white mt-5">
          Hello, {userData.username}!
        </h1>
        <p className="font-kawaii text-white">A look at your saved trips:</p>
      </subheader>
      <TripsBox userData={userData} />
    </main>
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
