export default function SofiaTestimonial() {
  return (
    <div className="border-r-8 border-t-8 mt-3 border-sage mx-3 lg:pl-20">
      <div className="py-10 pb-3 mt-72 relative bg-green hover:bg-sage cursor-pointer transition ease-out duration-300">
        <div>
          <img
            src="sofia.jpeg"
            className="rounded-full"
            alt="happy girl with tinsel in her hair"
          />
        </div>
        <div className="px-7 mt-20 ml-3 mr-2">
          <h1 className="text-3xl font-bold hover:text-green transition ease-out duration-300">
            Sofia T.
          </h1>
          <h2 className="text-2xl mt-4 font-bold">Best. App. Ever.</h2>
          <p className="mt-2 opacity-60 group-hover:opacity-70">
            I never wanted to leave my house before I found this app. Now
            I&#39;m planning a trip to San Diego!
          </p>
        </div>
      </div>
    </div>
  );
}
