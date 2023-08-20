import TripsBox from '../components/trips/TripsBox';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

export default function Trips() {
  const { loading, data } = useQuery(QUERY_ME, { fetchPolicy: 'network-only' });

  const userData = data?.me || {};

  // console.log(userData);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Checks to see if user is logged in , if not, returns with this
  if (!Auth.loggedIn()) {
    return (
      <main className="bg-gradient-to-r from-terracotta via-sand to-sage h-screen font-kawaii text-white text-center align-middle object-contain">
        <header className="text-center font-kawaii text-white text-2xl p-1 bg-terracotta border-b-2 border-green">
          Uh... Awkward...
        </header>
        <h1 className="m-2 p-xl">Well, this is awkward...</h1>
        <h1>You need to be logged in to see your saved trips!</h1>
      </main>
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
        <h1 className="font-kawaii text-white mt-5 text-4xl">
          Hello, {userData.username}!
        </h1>
        <p className="font-kawaii text-white">A look at your saved trips:</p>
      </subheader>
      <TripsBox userData={userData} />
    </main>
  );
}
