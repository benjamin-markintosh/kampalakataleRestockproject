import { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import DisplayRatingStars from "../components/DisplayRatingStars";

function CartItem() {
  const [delivery, setDelivery] = useState(true);
  return (
    <div className=" m-8 flex w-144 ">
      <div className="w-64 h-64  mr-4 bg-kkwhite shadow-md"></div>
      <div>
        <div className="  w-72 my-2 ">
          <div className="flex justify-between items-center mb-4">
            <p className="text-lg font-bold">Productname</p>
            <div>
              <DisplayRatingStars Stars={3} starWidth={4} starHeight={4} />
            </div>
          </div>

          <div className="flex justify-between mb-4">
            <p className="text-lg font-base">Packaging type</p> -{" "}
            <div className="font-bold">Quantity</div>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div className="font-bold">Delivery Mode: </div>
            <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] duration-300">
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
            </div>{" "}
          </div>
          <div className="flex justify-between mb-4">
            <p className="text-lg font-base">Supplier </p> -{" "}
            <div className="font-bold">Branch</div>
          </div>
          <div className="flex justify-between items-center mb-4 ">
            <Link
              to="/confirm-checkout"
              className="bg-kkyellow flex justify-center items-center gap-2 font-bold text-md px-4 py-2 rounded-full cursor-pointer hover:bg-kkorange shadow-md hover:shadow-xl duration-300"
            >
              <BsFillCartFill size={16} />
              Checkout
            </Link>
            <p className="  text-sm font-bold text-gray-500">
              <span className="px-2   ">20,000,000</span>
              UGX
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default CartItem;
