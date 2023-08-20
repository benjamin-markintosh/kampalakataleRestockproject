import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import LogoWhite from "../../components/LogoWhite";

function Alert() {
  const alerts = [
    {
      category: "Orders",
      message: "You have Pending Orders",
      number: 5,
    },
    {
      category: "Inventory",
      message: "You have New items in stock",
      number: 2,
    },
    {
      category: "Out of Stock",
      message: "Items are out of Stock",
      number: 6,
    },
  ];

  const [alert, setAlert] = useState(false);
  return (
    <div>
      <div
        onClick={() => setAlert(!alert)}
        className="fixed bottom-10 right-10 w-20 h-20 bg-kkyellow flex justfiy-center items-center hover:bg-kkorange hover:w-24 hover:h-24 duration-300 cursor-pointer text-white py-2 px-4 rounded-full shadow-xl"
      >
        <div className="w-24 text-center text-kkblack text-md font-extrabold">
          {alerts.length <= 1 ? "Alert" : "Alerts"}
        </div>
        <div className="absolute flex justify-center items-center -top-1 -right-1 bg-kkorange text-xs p-1 w-6 h-6 rounded-full">
          {/* {messageCount} */}
          <div className="text-kkwhite font-semibold">{alerts.length}</div>
        </div>
      </div>

      {/* Overlay */}
      {alert ? (
        <div
          onClick={() => setAlert(!alert)}
          className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"
        ></div>
      ) : (
        ""
      )}

      {/* side  drawer */}

      <div
        className={
          alert
            ? "fixed top-0 right-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 right-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setAlert(!alert)}
          size={25}
          className="absolute text-kkwhite right-4 top-4 cursor-pointer"
        />
        <nav className="bg-kkblack h-full">
          <div className="logo pt-8 ">
            <LogoWhite />{" "}
          </div>
          <div className="text-center text-kkwhite font-bpld">Alerts!</div>
          <ul className="flex flex-col p-4 text-kkblack">
            {alerts.map((alert, index) => (
              <li key={index} className="mb-4">
                <div className="relative w-full p-4 bg-red-500 text-kkwhite cursor-pointer transition-transform transform hover:scale-110 rounded-lg">
                  <div className="absolute flex justify-center items-center -top-1 -right-1 bg-kkorange text-xs p-1 w-6 h-6 rounded-full">
                    {/* {messageCount} */}
                    <div className="text-kkwhite font-semibold">
                      {alert.number}
                    </div>
                  </div>
                  <p className="font-semibold">{alert.category}</p>{" "}
                  <hr className="mb-2 " />
                  <p className="text-sm">{alert.message}</p>
                </div>
              </li>
            ))}

            <li></li>
          </ul>
          <div className="button flex justify-end pt-2 mr-4">
            <button className="bg-kkyellow text-kkblack font-bold border border-kkblack shadow-md hover:bg-kkorange hover:text-kkwhite duration-300 cursor-pointer w-32 py-2 px-4 rounded-full">
              Clear Alerts
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}
export default Alert;
