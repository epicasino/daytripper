import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';

export function NavLinks() {
  return (
    <div className="flex items-center gap-2">
      <div className="nav-links duration-500 md:static absolute bg-green text-white text-center font-kawaii md:min-h-fit min-h-[60vh] left-0 top-[-100%] px-5">
        <ul className="flex md:flex-row flex-col md:items-end md:gap-[4vw] py-1 my-2">
          {/* If user isn't logged in, /trips in navbar does not render */}
          {Auth.loggedIn() ? (
            <li>
              <Link to="/trips" className="hover:text-sage">
                Trips
              </Link>
            </li>
          ) : (
            <></>
          )}
          <li>
            <Link to="/contact" className="hover:text-sage">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      {Auth.loggedIn() ? (
        <button
          id="logOutBtn"
          className="bg-terracotta font-kawaii text-white px-4 py-1 m-1 rounded-full hover:bg-sand"
          onClick={Auth.logout}
        >
          Logout
        </button>
      ) : (
        <Link to="/login">
          <button
            id="signInBtn"
            className="bg-terracotta font-kawaii text-white px-4 py-1 m-1 rounded-full hover:bg-sand"
          >
            Sign in
          </button>
        </Link>
      )}
    </div>
  );
}
