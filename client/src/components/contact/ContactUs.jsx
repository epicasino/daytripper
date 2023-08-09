export default function ContactUs() {
    return (
        <div className="bg-terracotta h-screen font-kawaii text-white">
            <header className="text-center text-4xl p-1">Like what you see? Feel free to contact us.</header>
            <div className="grid grid-cols-2 grid-rows-2 items-cen ">
                <div className="m-6 rounded-lg h-fit border-4 bg-green">
                    <div className="p-6">
                        <h5 className="mb-2 text-2xl leading-tight text-white">Chelsea Pratte</h5>
                        <p className="mb-4 text-xl text-white">
                            <a href="https://github.com/callmechelsea" className="text-white">GitHub</a>
                            <br />
                            <a href="https://linkedin.com/in/callmechelsea" className="text-white">LinkedIn</a>
                        </p>
                    </div>
                </div>
                <div className="m-6 rounded-lg border-4 bg-green ">
                 <div className="p-6">
                        <h5 className="mb-2 text-2xl leading-tight text-white">Alison Colao</h5>
                        <p className="mb-4 text-xl text-white">
                            <a href="https://github.com/acolao" className="text-white">GitHub</a>
                            <br />
                            <a href="https://linkedin.com/in/alisoncolao" className="text-white">LinkedIn</a>
                        </p>
                    </div>
                </div>
                <div className="m-6 rounded-lg border-4 bg-green ">
                 <div className="p-6">
                        <h5 className="mb-2 text-2xl leading-tight text-white">Ray Badua</h5>
                        <p className="mb-4 text-xl text-white">
                        <a href="https://github.com/epicasino" className="text-white">GitHub</a>
                            <br />
                            <a href="https://www.linkedin.com/in/ray-badua/" className="text-white">LinkedIn</a>
                        </p>
                    </div>
                </div>
                <div className="m-6 rounded-lg border-4 bg-green ">
                 <div className="p-6">
                        <h5 className="mb-2 text-2xl leading-tight text-white">Jose Perez</h5>
                        <p className="mb-4 text-xl text-white">
                        <a href="https://github.com/joseperez013" className="text-white">GitHub</a>
                            <br />
                            <a href="https://www.linkedin.com/in/jose-perez-472444286/" className="text-white">LinkedIn</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}