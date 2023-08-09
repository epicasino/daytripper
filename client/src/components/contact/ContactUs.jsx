export default function ContactUs() {
  return (
    <div className="bg-gradient-to-r from-terracotta via-sage to-dirt h-screen font-kawaii text-white">
      <header className="text-center text-4xl p-1">
        Like what you see? Feel free to contact us.
      </header>
      <div className="grid justify-items- grid-cols-2 grid-rows-2">
        <div className="m-6 rounded-full border-sand border-8 bg-green bg-opacity-90">
          <div className="p-6 text-center">
            <h5 className="mb-2 text-4xl leading-tight text-white">ALISON COLAO</h5>
            <p className="mb-4 text-xl text-white">
              <a href="https://github.com/acolao" className="text-white">GitHub</a>
              <br />
              <a href="https://linkedin.com/in/alisoncolao" className="text-white">LinkedIn</a>
            </p>
          </div>
        </div>
        <div className="m-6 rounded-full border-sand border-8 bg-green bg-opacity-90 ">
          <div className="p-6 text-center">
            <h5 className="mb-2 text-4xl leading-tight text-white">CHELSEA PRATTE</h5>
            <p className="mb-4 text-xl text-white">
              <a href="https://github.com/callmechelsea" className="text-white">GitHub</a>
              <br />
              <a href="https://linkedin.com/in/callmechelsea" className="text-white">LinkedIn</a>
            </p>
          </div>
        </div>
        <div className="m-6 rounded-full border-sand border-8 bg-green bg-opacity-90 ">
          <div className="p-6 text-center">
          <h5 className="mb-2 text-4xl leading-tight text-white">JOSE PEREZ</h5>
            <p className="mb-4 text-xl text-white">
              <a href="https://github.com/joseperez013" className="text-white">GitHub</a>
              <br />
              <a href="https://www.linkedin.com/in/jose-perez-472444286/" className="text-white">LinkedIn</a>
            </p>
          </div>
        </div>
        <div className="m-6 rounded-full border-sand border-8 bg-green bg-opacity-90 ">
          <div className="p-6 text-center">
          <h5 className="mb-2 text-4xl leading-tight text-white">RAY BADUA</h5>
            <p className="mb-4 text-xl text-white">
              <a href="https://github.com/epicasino" className="text-white">GitHub</a>
              <br />
              <a href="https://www.linkedin.com/in/ray-badua/" className="text-white">LinkedIn</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
