//import React from "react";

import { useState } from "react";
import "./NavAdmin.css";
import { NavLink } from "react-router-dom";

import LogoWhite from "../assets/images/KampalakataleLogo-06.png";
import arrow from "../assets/images/arrow.svg";
import dashboard from "../assets/images/dashboard.svg";
import orders from "../assets/images/orders.svg";
import transactions from "../assets/images/transactions.svg";
import inventory from "../assets/images/inventory.svg";
import branches from "../assets/images/branches.svg";
import addProduct from "../assets/images/addProduct.svg";
import editProduct from "../assets/images/editProduct.svg";
import deleteProduct from "../assets/images/deleteProduct.svg";
import faqs from "../assets/images/faqs.svg";
import profile from "../assets/images/profile.svg";
import signout from "../assets/images/signout.svg";

function NavAdmin() {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Dashboard", src: dashboard, route: "/admin/dashboard" },
    { title: "Orders", src: orders, route: "/admin/orders" },
    {
      title: "Transactions",
      src: transactions,
      route: "/admin/transactions",
    },
    { title: "Inventory", src: inventory, route: "/admin/inventory" },
    { title: "Branches", src: branches, route: "/admin/branches" },
    { title: "Add Products", src: addProduct, route: "/admin/add-product" },
    {
      title: "Edit Products",
      src: editProduct,
      route: "/admin/edit-product",
    },
    {
      title: "Delete Products",
      src: deleteProduct,
      route: "/admin/delete-product",
    },
    { title: "FAQs", src: faqs, route: "/admin/faqs" },
    {
      title: "Profile",
      src: profile,
      gap: "true",
      route: "/admin/profile",
    },
    { title: "Signout", src: signout, route: "/admin/signout" },
  ];

  return (
    <div
      className={`navbarAdmin fixed left-0 top-0  z-10 ${
        open ? "w-72" : "w-20"
      }  duration-300  left-0 bg-kkblack pt-6 h-screen relative px-4 `}
    >
      <div
        className={`svg absolute cursor-pointer rounded-full -right-3 top-9 w-7 bg-white ${
          !open && "rotate-180"
        }`}
        onClick={() => setOpen(!open)}
      >
        <img src={arrow} />
      </div>
      <div className="flex gap-x-4 items-center">
        <img
          src={LogoWhite}
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
          <NavLink key={index} to={menu.route}>
            <li
              className={`text-kkwhite text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-kkwhite/20 rounded-md ${
                menu.gap ? "mt-9" : "mt-1"
              }`}
            >
              <img src={menu.src} className="h-8" alt={menu.title} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {menu.title}
              </span>
            </li>
          </NavLink>
        ))}
      </ul>
      <p
        className={`footertext text-kkwhite text-xs pb-4 px-2 items-center align-text-center absolute fixed bottom-0 left-0 w-auto ${
          !open && "hidden"
        } duration-200 `}
      >
        Powered by Fortis Team 2023 <br /> Copyright &copy;{" "}
        <script>document.write(new Date().getFullYear())</script> Fortis Team
        International All Rights Reserved
      </p>
    </div>
  );
}

export default NavAdmin;
