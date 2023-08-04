export default function Navbar() {
  return (
    <header className="bg-green">
      <nav className="flex justify-between items-center w-[98%]  mx-auto">
        <div>
          <img
            className="h-5 cursor-pointer"
            src="logo1.png"
            alt="station wagon with text that says day tripper"
          />
        </div>
        <div className="nav-links duration-500 md:static absolute bg-green text-white font-kawaii md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-end px-5">
          <ul className="flex md:flex-row flex-col md:items-end md:gap-[4vw] gap-4">
            <li>
              <a className="hover:text-sage" href="#">
                About
              </a>
            </li>
            <li>
              <a className="hover:bg-sage" href="#">
                Trips
              </a>
            </li>
            <li>
              <a className="hover:bg-sage" href="#">
                Contact
              </a>
            </li>
            <li>
              <a className="hover:bg-sage" href="#">
                Testimonials
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button
            id="signInBtn"
            className="bg-terracotta font-kawaii text-white px-4 py-1 m-1 rounded-full hover:bg-sand"
          >
            Sign in
          </button>
          <ion-icon
            onclick="onToggleMenu(this)"
            name="menu"
            className="text-3xl cursor-pointer md:hidden"
          ></ion-icon>
        </div>
      </nav>
    </header>
  );
}
