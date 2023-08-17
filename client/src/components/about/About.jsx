import AboutImg from './AboutImg';
import AboutText from './AboutText';

export default function About() {
  return (
    <hero>
      <div className="bg-gradient-to-r from-sage via-dirt to-terracotta text-white font-kawaii py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center mt-10 my-12 md:my-24">
          <AboutText />
          <AboutImg />
        </div>
      </div>
    </hero>
  );
}
