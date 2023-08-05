export default function Testimonials() {
    return (
        <section>
            <div className="bg-gradient-to-r from-terracotta via-dirt to-sage h-full text-white font-kawaii">
                <div className="container mx-auto lg:px-20">
                    <div className="grid grid-cols-3 h-full pb-40">
                        <div className="border-r border-green mx-3 lg:pl-20">
                            <div className="py-10 pb-3 mt-72 relative bg-green hover:bg-sage cursor-pointer transition ease-out duration-300">
                                <div>
                                    <div className="w-4 h-fit absolute right-0 -top-48 bg-green group-hover:bg-sage"></div>
                                    <img src="sofia.jpeg" className="rounded-full" alt="happy girl with tinsel in her hair" />
                                </div>
                                <div className="px-7 mt-20">
                                    <h1 className="text-3xl font-bold hover:text-green transition ease-out duration-300">SOFIA</h1>
                                    <h2 className="text-2xl mt-4 font-bold">Best. App. Ever.</h2>
                                    <p className="mt-2 opacity-60 group-hover:opacity-70">I never wanted to leave my house before I found this app. Now I'm planning a trip to San Diego!</p>
                                </div>
                            </div>
                        </div>
                        <div className="border-r border-green mx-3 lg:pl-20">
                            <div className="py-10 pb-3 mt-32 relative bg-dirt hover:bg-sand cursor-pointer transition ease-out duration-300">
                                <div>
                                    <div className="w-4 h-fit absolute right-0 -top-48 bg-dirt group-hover:bg-sand"></div>
                                    <img src="jeff2.jpeg" className="rounded-full" alt="happy man making cocktails" />                                
                                </div>
                                <div className="px-7 mt-20">
                                    <h1 className="text-3xl font-bold hover:text-dirt transition ease-out duration-300">Jeff P.</h1>
                                    <h2 className="text-2xl mt-4 font-bold">Where am I?</h2>
                                    <p className="mt-2 opacity-60 group-hover:opacity-70">Was a question I often asked myself. Now I know the answer thanks to DAY TRIPPER</p>
                                </div>

                            </div>
                            

                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}