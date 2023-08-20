import LogoBlack from "../components/LogoBlack";

import { AiOutlineSearch } from "react-icons/ai";

function AdminFaqs() {
  return (
    <div className=" w-[100%] my-8">
      <div className=" grid grid-cols-3 gap-space-between items-center">
        <div className="  ">
          <LogoBlack />
        </div>
        <div className="text-center text-black text-2xl font-extrabold">
          Welcome to the Admin Dashboard
        </div>
        <div className="ml-8">
          {" "}
          <div className="bg-gray-200 rounded-full flex items-center px-2 w-[100px] sm:w-[200px] md:w-[400px] lg:w-[300px]">
            <AiOutlineSearch size={20} />
            <input
              className="bg-transparent border-none p-2 w-full focus:outline-none"
              type="text"
              placeholder="Search Products"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">Faqs</div>
    </div>
  );
}

export default AdminFaqs;
