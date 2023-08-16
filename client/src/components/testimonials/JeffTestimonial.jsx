export default function JeffTestimonial() {
  return (
    <div className="border-r-8 border-t-8 mt-5 border-coral mx-3 lg:pl-20">
      <div className="py-10 pb-3 relative bg-terracotta hover:bg-coral cursor-pointer transition ease-out duration-300">
        <div>
          <img
            src="jeff2.jpeg"
            className="rounded-full"
            alt="happy man making cocktails"
          />
        </div>
        <div className="px-7 mt-20 ml-3 mr-3">
          <h1 className="text-3xl font-bold hover:text-terracotta transition ease-out duration-300">
            Jeff P.
          </h1>
          <h2 className="text-2xl mt-4 font-bold">Where am I?</h2>
          <p className="mt-2 opacity-60 group-hover:opacity-70">
            Was a question I often asked myself. Now I know the answer thanks to
            DAY TRIPPER
          </p>
        </div>
      </div>
    </div>
  );
}
