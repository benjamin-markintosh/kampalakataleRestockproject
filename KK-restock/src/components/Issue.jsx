import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import LogoWhite from "./LogoWhite";

function Issue() {
  const [issue, setIssue] = useState(false);
  return (
    <div>
      <div
        onClick={() => setIssue(!issue)}
        className="fixed bottom-10 right-10 w-20 h-20 bg-kkyellow flex justfiy-center items-center hover:bg-kkorange hover:w-24 hover:h-24 duration-300 cursor-pointer text-white py-2 px-4 rounded-full shadow-xl"
      >
        <div className="w-24 text-center text-kkblack text-md font-extrabold">
          Issue
        </div>
      </div>

      {/* Overlay */}
      {issue ? (
        <div
          onClick={() => setIssue(!issue)}
          className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"
        ></div>
      ) : (
        ""
      )}

      {/* side  drawer */}

      <div
        className={
          issue
            ? "fixed top-0 right-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 right-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setIssue(!issue)}
          size={30}
          className="absolute text-kkwhite right-4 top-4 cursor-pointer"
        />
        <nav className="bg-kkblack h-full">
          <div className="logo pt-8 ">
            <LogoWhite />{" "}
          </div>
          <div>
            <h2 className="text-kkwhite font-bold text-center pt-4 text-xl underline ">
              Report any Issue!
            </h2>
          </div>
          <ul className="flex flex-col p-4 text-kkblack">
            <li className="text-md py-4 flex cursor-pointer text-kkwhite hover:text-kkblack  rounded-lg pl-2 duration-300 hover:bg-kkyellow hover:text-kkblack">
              <label className="label pr-4 " htmlFor="Email">
                Names
              </label>
              <input
                type="text"
                name="FullNames"
                className="inputText text-kkblack"
                id="FullNames"
              />
            </li>
            <li className="text-md py-4 flex text-kkwhite hover:text-kkblack  cursor-pointer rounded-lg pl-2 duration-300 hover:bg-kkyellow ">
              <label className="label pr-4 " htmlFor="Email">
                Email
              </label>
              <input
                type="email"
                name="Email"
                className="inputText text-kkblack "
                id="Email"
              />
            </li>
            <li className="text-md py-4 flex cursor-pointer text-kkwhite hover:text-kkblack rounded-lg pl-2 duration-300 hover:bg-kkyellow ">
              <label className="label pr-4  " htmlFor="Tel">
                Tel
              </label>
              <input
                type="tel"
                name="Tel"
                className="inputText text-kkblack"
                id="Tel"
              />
            </li>
            <li className="text-md py-4 flex cursor-pointer text-kkwhite  rounded-lg pl-2 duration-300 hover:bg-kkyellow hover:text-kkblack">
              <label className="label pr-4 " htmlFor="BusinessDesc">
                Your Issue
              </label>
              <textarea
                type="text"
                name="BusinessDesc"
                className="flex-1 rounded-lg bg-kkwhite h-16 text-kkblack rounded-full bg-kkwhite cursor-text border-none ring-2 ring-kkyellow focus:ring-2 focus:ring-kkorange duration-200"
                id="BusinessDesc"
                rows="2"
              ></textarea>
            </li>
          </ul>
          <div className="button flex justify-end pt-2 mr-4">
            <button className="bg-kkyellow text-kkblack font-bold border border-kkblack shadow-md hover:bg-kkorange hover:text-kkwhite duration-300 cursor-pointer w-32 py-2 px-4 rounded-full">
              Submit
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Issue;
