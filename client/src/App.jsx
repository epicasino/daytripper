import './App.css';
import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Map from './components/maps/Map';
<<<<<<< HEAD
import Modal from "./components/login/LoginModal"
=======
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Testimonials from './components/testimonials/Testimonials';

>>>>>>> 92dd20332ad7217f587e37fa44fd0f70b1f66bd1

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
        <Testimonials />
        <Map /> 

      </div>
    </ApolloProvider>
  );
}

export default App;
