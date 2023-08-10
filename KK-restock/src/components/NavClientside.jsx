import { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import LogoWhite from "./LogoWhite";
import LogoBlack from "./LogoBlack";

function NavClientside() {
  const [nav, setNav] = useState(false);
  const [delivery, setDelivery] = useState(true);
  return (
    <div>
      <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
        {/* Left side */}
        <div className="flex items-center">
          <div className="logo w-auto sm:pr-16 pl-8">{<LogoBlack />}</div>

          <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] duration-">
            <p
              onClick={(e) => {
                console.log(e.target.value);
                setDelivery(true);
              }}
              value="Delivery"
              className={`${
                !delivery
                  ? "p-2"
                  : "bg-black p-2 text-white rounded-full duration-300"
              }  cursor-pointer duration-300`}
            >
              Delivery
            </p>

            <p
              onClick={(e) => {
                console.log(e.target);
                setDelivery(false);
              }}
              value="Pickup"
              className={`${
                !delivery
                  ? "bg-black p-2 text-white rounded-full  duration-300"
                  : "p-2"
              }  cursor-pointer duration-300`}
            >
              Pickup
            </p>
          </div>
        </div>
        <div className="hidden md:scale-1/2 duration-300 md:flex text-xl font-bold p-2">
          <h2>Good Morning Benjamin !</h2>
        </div>
        {/* Search Input */}
        <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px]">
          <AiOutlineSearch size={25} />
          <input
            className="bg-transparent border-none p-2 w-full focus:outline-none"
            type="text"
            placeholder="Search foods"
          />
        </div>
        {/* Cart button */}
        <div className="flex items-center ml-4 gap-4">
          <button className="bg-black text-white hidden md:flex items-center py-2 px-4 rounded-full cursor-pointer hover:text-kkblack hover:bg-kkyellow">
            <BsFillCartFill size={20} className="mx-2 " /> Cart
          </button>
          <div onClick={() => setNav(!nav)} className="cursor-pointer">
            <AiOutlineMenu size={30} />
          </div>
        </div>
        {/* Mobile Menu */}
        {/* Overlay */}
        {nav ? (
          <div
            onClick={() => setNav(!nav)}
            className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"
          ></div>
        ) : (
          ""
        )}
        {/* Side drawer menu */}

        <div
          className={
            nav
              ? "fixed top-0 right-0 w-[300px] h-screen bg-white z-10 duration-300"
              : "fixed top-0 right-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
          }
        >
          <AiOutlineClose
            onClick={() => setNav(!nav)}
            size={30}
            className="absolute text-kkwhite right-4 top-4 cursor-pointer"
          />
          <nav className="bg-kkblack h-full">
            <div className="logo pt-8 ">
              <LogoWhite />
            </div>
            <ul className="flex flex-col p-4 text-kkwhite">
              <li className="text-xl py-4 flex cursor-pointer rounded-lg pl-2 duration-300 hover:bg-kkyellow hover:text-kkblack">
                <TbTruckDelivery size={25} className="mr-4 " /> Orders
              </li>
              <li className="text-xl py-4 flex cursor-pointer rounded-lg pl-2 duration-300 hover:bg-kkyellow hover:text-kkblack">
                <MdFavorite size={25} className="mr-4" /> Favorites
              </li>
              <li className="text-xl py-4 flex cursor-pointer rounded-lg pl-2 duration-300 hover:bg-kkyellow hover:text-kkblack">
                <FaWallet size={25} className="mr-4" /> Wallet
              </li>
              <li className="text-xl py-4 flex cursor-pointer rounded-lg pl-2 duration-300 hover:bg-kkyellow hover:text-kkblack">
                <MdHelp size={25} className="mr-4" /> Help
              </li>
              <li className="text-xl py-4 flex cursor-pointer rounded-lg pl-2 duration-300 hover:bg-kkyellow hover:text-kkblack">
                <AiFillTag size={25} className="mr-4" /> Promotions
              </li>
              <li className="text-xl py-4 flex cursor-pointer rounded-lg pl-2 duration-300 hover:bg-kkyellow hover:text-kkblack">
                <BsFillSaveFill size={25} className="mr-4" /> Best Ones
              </li>
              <li className="text-xl py-4 flex cursor-pointer rounded-lg pl-2 duration-300 hover:bg-kkyellow hover:text-kkblack">
                <FaUserFriends size={25} className="mr-4" /> Invite Friends
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default NavClientside;

{
  /* 
this is for picking the results of the toggle buttons 
<div>
{delivery ? (
  <p>Active option: Delivery</p>
) : (
  <p>Active option: Pickup</p>
)}
</div> */
}
