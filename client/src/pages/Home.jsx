import Navbar from '../components/navbar/Navbar';
import About from '../components/about/About';
import Testimonials from '../components/testimonials/Testimonials';

export default function Home() {
  return (
    <div>
      <Navbar />
      <About />
      <Testimonials />
    </div>
  );
}
