import React from "react";
import { Link }

function NavDesktop() {
  return (
    <div className="w-100 min-h-12 bg-kkblack ">
      <div className="nav flex flex-wrap flex-row">
        <div className="text-kkyellow p-3 flex-1">
          <span className="text-kkwhite ">Kampala</span>Katale
        </div>
        <div className="menu text-kkwhite ">
          <ul className="flex flex-row flex-wrap p-3">
            <NavLinks/>
          </ul>
        </div>
      </div>
    </div>
  );
}
import NavLinks from "./NavLinks";

export default NavDesktop;
