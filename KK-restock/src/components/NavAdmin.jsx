//import React from "react";

import { useState } from "react";

function NavAdmin() {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Dashboard", src: "dashboard" },
    { title: "Orders", src: "orders" },
    { title: "Transactions", src: "transactions" },
    { title: "Inventory", src: "inventory" },
    { title: "Add Products", src: "addProduct" },
    { title: "Edit Products", src: "editProduct" },
    { title: "Delete Products", src: "deleteProduct" },
    { title: "FAQs", src: "faqs" },
    { title: "Profile", src: "profile", gap: "true" },
    { title: "Signout", src: "signout" },
  ];

  return (
    <div
      className={`${
        open ? "w-72" : "w-20"
      }  duration-300 h-screen bg-kkblack pt-6 relative pl-4`}
    >
      <div
        className={`svg absolute cursor-pointer rounded-full -right-3 top-9 w-7 bg-white ${
          !open && "rotate-180"
        }`}
        onClick={() => setOpen(!open)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="#FF7A00"
        >
          <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z" />
          <path d="M13.293 7.293 8.586 12l4.707 4.707 1.414-1.414L11.414 12l3.293-3.293-1.414-1.414z" />
        </svg>
      </div>
      <div className="flex gap-x-4 items-center">
        <img
          src="./src/assets/images/KampalakataleLogo-06.png"
          className={`cursor-pointer duration-500 w-14`}
          alt="Kampala Katale"
        />
        <div
          className={`text-kkyellow  origin-left font-medium text-x1 duration-300 ${
            !open && "scale-0"
          }`}
        >
          <span className="text-kkwhite ">Kampala </span>Katale
        </div>
      </div>
      <ul className="pt-6">
        {Menus.map((menu, index) => (
          <li
            key={index}
            className={`text-kkwhite text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-kkwhite/20  rounded-md ${
              menu.gap ? "mt-9" : "mt-1"
            }`}
          >
            <img
              src={`./src/assets/images/${menu.src}.svg`}
              className="h-8  "
              alt={menu.title}
            />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              {menu.title}
            </span>
          </li>
        ))}
      </ul>
      <p
        className={`text-kkwhite text-sm items-center align-text-center absolute bottom-4 ${
          !open && "hidden"
        } duration-200 `}
      >
        Powered by Fortis Team 2023
      </p>
    </div>
  );
}

export default NavAdmin;
