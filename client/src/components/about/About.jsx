export default function Navbar() {
    return (
        <hero>
            <div className="bg-gradient-to-r from-sage via-dirt to-terracotta text-white font-kawaii py-20">
                <div className="container mx-auto flex flex-col md:flex-row items-center mt-10 my-12 md:my-24">
                    <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
                        <h1 className="text-3xl md:text-5xl tracking-loose">DAY TRIPPER</h1>
                        <h2 className="text-2xl md:text-3xl py-2 leading-relaxed md:leading-snug mb-2">Have you ever thought about planning a road trip, but didn't know where to start?</h2>
                        <p className="text-sm md:text-base text-white mb-4">We're here to help. Continue below to start planning your trip! Skeptical? Check out these testimonials!</p>
                        <a href="#" 
                        className="bg-gradient-to-r from-coral via-sage to-dirt hover:bg-green text-white rounded-full shadow hover:shadow-lg py-2 px-4 border hover:border-transparent">Testimonials</a>
                    </div>
                    <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3 justify-center">
                        <div className="h-48 flex flex-wrap content-center">
                            <div>
                                <img className="inline-block mt-24 md:mt-0 p-8 md:p-0" src="map.png" alt="illustration of map"/>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </hero>
    ); 
}