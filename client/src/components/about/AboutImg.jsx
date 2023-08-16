export default function AboutImg() {
  return (
    <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3 justify-center">
      <div className="h-48 flex flex-wrap content-center">
        <div>
          <img
            className="inline-block mt-24 md:mt-0 p-8 md:p-0 hover:animate-spin-slow"
            src="map.png"
            alt="illustration of map"
          />
        </div>
      </div>
    </div>
  );
}
