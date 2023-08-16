import { NavLinks } from './NavLinks';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center w-full px-3 mx-auto bg-green">
      <figure>
        <Link to="/">
          <img
            className="h-5 cursor-pointer align-middle"
            src="logo1.png"
            alt="station wagon with text that says day tripper"
          />
        </Link>
      </figure>
      <NavLinks />
    </nav>
  );
}
