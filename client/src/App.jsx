import './App.css';
import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Map from './components/maps/Map';
import Navbar from './components/navbar/Navbar';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Outlet />
        <Navbar />
        <Map />
      </div>
    </ApolloProvider>
  );
}

export default App;
