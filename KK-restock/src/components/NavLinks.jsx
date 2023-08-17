import { Link } from "react-router-dom";
import Button from "./Button";

function NavLinks() {
  return (
    <div>
      <div className="md:flex items-center justify-between bg-black py-4 md:px-10 px-7">
        <div className="font-bold text-3xl flex  items-center font-[poppins] text-white">
          <span className="text-3xl text-yellow-600 mr-1 pt-2">Kampala</span>
          katale
        </div>
        <ul className="md:flex md:items-center text-white md:pb-0 pb-2 absolute md:static bg-black md:z-auto[-1] left-0 w-full md:w-auto pl-9 transition-all duration-500 ease-in">
          <li className="md:ml-7 text-sm md:my-0 my-7">
            <Link to="/home">HOME</Link>
          </li>

          <li className="md:ml-7 text-sm md:my-0 my-7">
            <Link to="/services">SERVICES</Link>
          </li>
          <li className="md:ml-7 text-sm md:my-0 my-7">
            <Link to="/about">ABOUT</Link>
          </li>
          <li className="md:ml-7 text-sm md:my-0 my-7">
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
        <div>
          <Button>Login</Button>
          <Button>Sign Up</Button>
        </div>
      </div>
    </div>
  );
}

export default NavLinks;
