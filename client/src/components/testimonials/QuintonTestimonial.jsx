export default function QuintonTestimonial() {
  return (
    <div className="border-r-8 border-t-8 mt-6 border-sand mx-3 lg:pl-20">
      <div className="py-10 pb-3 mb-6 relative bg-dirt hover:bg-sand cursor-pointer transition ease-out duration-300">
        <div>
          <img
            src="quinton.jpeg"
            className="rounded-full"
            alt="man in suit smiling with arms crossed"
          />
        </div>
        <div className="px-7 mt-5 ml-3 mr-2 ">
          <h1 className="text-3xl front-bold hover:text-dirt transition ease-out duration-300">
            Quinton F.
          </h1>
          <h2 className="text-2xl mt-4 font-bold">Vitamin D</h2>
          <p className="mt-2 opacity-60 group-hover:opacity-70">
            Ever since Diablo4 came out, I forgot what the sun looked like. Now
            with DAY TRIPPER, I can finally touch grass again!!
          </p>
        </div>
      </div>
    </div>
  );
}
