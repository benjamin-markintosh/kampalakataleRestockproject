function Admincomponentcard() {
  return (
    <div>
      <div className="relative w-60 h-32 shadow p-4 m-8 bg-kkyellow text-kkblack  cursor-pointer transition-transform transform hover:scale-110 rounded-2xl">
        <div className="absolute flex justify-center items-center -top-1 -right-1 bg-kkorange text-xs p-1 w-6 h-6 rounded-full">
          {/* {messageCount} */}
          <div className="text-kkwhite font-semibold"></div>
        </div>
        <p className="text-2xl text-center font-extrabold">Property</p>{" "}
        <hr className="mb-2 border-kkblack " />
        <p className="text-2xl text-center font-extrabold">Value</p>
        <p className="w-full h-6  text-stone-700 text-lg font-semibold text-left ">
          View all
        </p>
      </div>
    </div>
  );
}

export default Admincomponentcard;
