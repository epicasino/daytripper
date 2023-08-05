import './App.css';
import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Map from './components/maps/Map';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';


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
        <About />
        <Map /> 
      </div>
    </ApolloProvider>
  );
}

export default App;
