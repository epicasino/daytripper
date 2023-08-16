import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutText() {
  return (
    <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
      <h1 className="text-3xl md:text-5xl tracking-loose">LIFE IS SHORT</h1>
      <h2 className="text-2xl md:text-3xl py-2 leading-relaxed md:leading-snug mb-2">
        Have you ever thought about planning a road trip, but didn&#39;t know
        where to start?
      </h2>
      <p className="text-sm md:text-base text-white mb-4">
        We&#39;re here to help. Continue below to start planning your trip!
        Skeptical? Check out these testimonials!
      </p>
      {/* <button id="testimonialBtn">
     <a
       href="#"
       className="bg-gradient-to-r from-coral via-sage to-dirt text-white rounded-full py-2 px-4 border hover:border-transparent hover:text-terracotta"
     >
       Testimonials
     </a>
    </button> */}
      {/* Ray: added Link component in react-router-dom to try out functionality of map showing */}
      {/* When button is clicked, it redirects to Map page */}
      <Link to="/map">
        <button
          id="openAppBtn"
          className="bg-gradient-to-r from-coral via-sage to-dirt text-white rounded-full py-2 px-4 border hover:border-transparent hover:text-terracotta mt-5" // mt-5 added for margins, amount & styling can be changed
        >
          Open App
        </button>
      </Link>
      {/* ----------------------------------------------------- */}
    </div>
  );
}
