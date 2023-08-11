//import React from "react";

import DragAndDrop from "../DragAndDrop";
import "./AddUser.css";

function Adduser() {
  return (
    // container for the forms
    <div className=" w-3/4 justify-center items-center ">
      <form className=" w-auto   items-center  px-10 py-8 lg:px-32">
        <div className="w-full  flex justify-center">
          <DragAndDrop />
        </div>
        <h1 className=" text-center font-bold  px-4 py-4">Edit Profile</h1>
        <div className="names flex justify-between gap-4 py-2">
          <label className="label" htmlFor="Firstname">
            Firstname
          </label>
          <input
            type="text"
            name="Firstname"
            className="inputText"
            id="Firstname"
          />
          <label className="label" htmlFor="Lastname">
            Lastname
          </label>
          <input
            type="text"
            name="Lastname"
            className="inputText"
            id="Lastname"
          />
        </div>
        <div className="email-title flex justify-between gap-4 py-4">
          <label className="label" htmlFor="Email">
            Email
          </label>
          <input type="text" name="Email" className="inputText" id="Email" />
          <label className="label" htmlFor="Tel">
            Tel
          </label>
          <input type="text" name="Tel" className="inputText" id="Tel" />
        </div>
        <div className="busiiness flex justify-between gap-4 py-2">
          <label className="label" htmlFor="Address">
            Address
          </label>
          <input
            type="text"
            name="Address"
            className="inputText"
            id="Address"
          />
        </div>
        <div>
          <h1 className=" text-center font-bold  px-4 py-6">
            Business Details
          </h1>
        </div>
        <div className="tin-worktel flex justify-between gap-4 py-2">
          <label className="label" htmlFor="Tin">
            Tin
          </label>
          <input type="text" name="Tin" className="inputText" id="Tin" />
          <label className="label" htmlFor="WorkTel">
            Work Tel
          </label>
          <input
            type="text"
            name="WorkTel"
            className="inputText"
            id="WorkTel"
          />
        </div>
        <div className="busiiness address flex justify-between gap-4 py-4">
          <label className="label" htmlFor="BusinessAddress">
            Business Address
          </label>
          <input
            type="text"
            name="BusinessAddress"
            className="inputText"
            id="BusinessAddress"
          />
        </div>
        <div className="flex justify-between gap-4 py-2">
          <label className="label" htmlFor="BusinessDesc">
            Business Description
          </label>
          <textarea
            type="text"
            name="BusinessDesc"
            className="flex-1 rounded-lg bg-kkwhite h-16 -rounded-full bg-kkwhite cursor-text border-none ring-2 ring-kkyellow focus:ring-2 focus:ring-kkorange duration-200"
            id="BusinessDesc"
            rows="2"
          ></textarea>
        </div>
        <div className="button flex justify-center pt-2">
          <button className="bg-kkyellow text-kkblack font-bold border border-kkblack shadow-md hover:bg-kkorange hover:text-kkwhite duration-300 cursor-pointer w-64 py-2 px-4 rounded-full">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Adduser;
