import "../App.css";

function Landing() {
  return (
    <div className="h-screen flex justify-center sm:justify-end items-center mx-32">
      {/* <div className="main-text "> */}
      <div className="">
        <div className="text-kkblack w-[256px] text-2xl sm:text-4xl font-normal sm:w-[392px] text-left  pb-4">
          {/* <p className="para text-gray-500"> */}
          <p className=" ">
            Are you a Retailer or <br /> a Wholeseller?
          </p>
        </div>
        {/* <div className="para2 font-bold"> */}
        <div className=" text-kkblack w-[256px] text-4xl sm:text-8xl font-bold  sm:w-[392px] text-left pb-4">
          <h2 className="">
            Katale <br /> with us...
          </h2>
        </div>
        <div className="w-44 h-8 sm:w-72  sm:h-16 bg-kkorange rounded-full flex item-center justify-center">
          <button className="text-white text-lg  sm:text-2xl font-bold">
            REGISTER NOW
          </button>
        </div>
      </div>

      {/*<div className="footer">
      
      </div>*/}
    </div>
  );
}

export default Landing;
