import JeffTestimonial from './JeffTestimonial';
import QuintonTestimonial from './QuintonTestimonial';
import SofiaTestimonial from './SofiaTestimonial';
export default function Testimonials() {
  return (
    <section>
      <header className="text-center font-kawaii text-4xl p-1 bg-green text-white ">
        Testimonials
      </header>
      <div className="bg-gradient-to-r from-terracotta via-dirt to-sage h-full text-white font-kawaii">
        <div className="container mx-auto lg:px-20">
          <div className="grid grid-cols-3 h-full pb-40">
            <SofiaTestimonial />
            <JeffTestimonial />
            <QuintonTestimonial />
          </div>
        </div>
      </div>
    </section>
  );
}
